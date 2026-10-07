// Loaded via `node --import` before the Nitro server starts, so Sentry can
// instrument Node built-ins (http, fetch) ahead of any app code.
// Copied into .output/server by the `build` script.
import * as Sentry from "@sentry/tanstackstart-react";

const isProd = process.env.NODE_ENV === "production";

Sentry.init({
  dsn: "https://f89821e0b50cfa66752308b1b60a3c0c@o4512214933372928.ingest.de.sentry.io/4512214942482512",
  environment: isProd ? "production" : "development",
  // https://docs.sentry.io/platforms/javascript/configuration/options/#traces-sample-rate
  tracesSampleRate: isProd ? 0.2 : 1.0,
});

