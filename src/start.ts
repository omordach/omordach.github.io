import { createStart, createMiddleware } from "@tanstack/react-start";
import {
  captureException,
  sentryGlobalFunctionMiddleware,
  sentryGlobalRequestMiddleware,
} from "@sentry/tanstackstart-react";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    // This middleware turns the throw into a Response, so the outer Sentry middleware
    // never sees it — report explicitly.
    captureException(error, { tags: { source: "request-middleware" } });
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  // Sentry middlewares must come first so they wrap everything else. Keep these as plain
  // identifiers — the Sentry Vite plugin only auto-instruments identifier arrays.
  requestMiddleware: [sentryGlobalRequestMiddleware, errorMiddleware],
  functionMiddleware: [sentryGlobalFunctionMiddleware],
}));
