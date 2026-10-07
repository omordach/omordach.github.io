import * as Sentry from "@sentry/tanstackstart-react";

Sentry.init({
  dsn: "https://f89821e0b50cfa66752308b1b60a3c0c@o4512214933372928.ingest.de.sentry.io/4512214942482512",
  environment: import.meta.env.MODE,
  // Capture 100% of spans locally, sample in production to stay within quota.
  // https://docs.sentry.io/platforms/javascript/configuration/options/#traces-sample-rate
  tracesSampleRate: import.meta.env.PROD ? 0.2 : 1.0,
  // Only propagate trace headers to our own origin (default would also be same-origin,
  // stated explicitly so third-party calls like GA never receive sentry-trace headers).
  tracePropagationTargets: [/^\//],
});
