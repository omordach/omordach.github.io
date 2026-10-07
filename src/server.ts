import "./lib/error-capture";

import * as Sentry from "@sentry/tanstackstart-react";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

// script-src needs 'unsafe-inline': TanStack Start injects a per-build hydration/streaming
// script (route manifest + timestamps) that can't be pinned with a static hash, and CSP3
// browsers drop 'unsafe-inline' entirely once any hash/nonce is present in the same directive —
// so mixing a hash for our own inline scripts with 'unsafe-inline' as a fallback doesn't work.
// Nonces would fix this but require TanStack Start to plumb a per-request nonce into its SSR
// output, which it doesn't expose today. Revisit if/when that lands.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://*.googletagmanager.com https://*.secureprivacy.ai",
  // 'unsafe-inline' for styles: the Secure Privacy consent banner injects inline <style>/style attrs.
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.secureprivacy.ai",
  "font-src 'self' https://fonts.gstatic.com https://*.secureprivacy.ai",
  "img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com https://*.secureprivacy.ai",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.secureprivacy.ai https://*.ingest.de.sentry.io",
  "frame-src 'self' https://*.secureprivacy.ai",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

function withSecurityHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  headers.set("Content-Security-Policy", CSP);
  headers.set("X-Frame-Options", "SAMEORIGIN");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  // HSTS only over HTTPS — Cloudflare handles this in production, but belt-and-suspenders
  if (process.env.NODE_ENV === "production") {
    headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  }

  // Add X-Robots-Tag for 404 responses
  if (response.status === 404) {
    headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  let sanitizedBody = "[redacted]";
  try {
    const parsed = JSON.parse(body);
    sanitizedBody = JSON.stringify({
      unhandled: parsed.unhandled,
      message: parsed.message,
    });
  } catch {
    // Fallback to [redacted]
  }

  const captured = consumeLastCapturedError();
  const error = captured ?? new Error(`h3 swallowed SSR error: ${sanitizedBody}`);
  console.error(error);
  Sentry.captureException(error, { tags: { source: "ssr-catastrophic" } });
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

type FetchOpts = { env: unknown; ctx: unknown };

// wrapFetchWithSentry only forwards (request, opts), so env/ctx are threaded through opts.
const sentryHandler = Sentry.wrapFetchWithSentry({
  async fetch(request: Request, opts?: FetchOpts) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, opts?.env, opts?.ctx);
      return withSecurityHeaders(await normalizeCatastrophicSsrResponse(response));
    } catch (error) {
      console.error(error);
      Sentry.captureException(error, { tags: { source: "server-entry" } });
      return withSecurityHeaders(
        new Response(renderErrorPage(), {
          status: 500,
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
      );
    }
  },
});

export default {
  fetch(request: Request, env: unknown, ctx: unknown) {
    return sentryHandler.fetch(request, { env, ctx } satisfies FetchOpts);
  },
};
