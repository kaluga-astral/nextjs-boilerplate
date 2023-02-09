const Sentry = require('@sentry/nextjs');

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NEXT_PUBLIC_SENTRY_ENV,
  tracesSampleRate: 1.0,
});
