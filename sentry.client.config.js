import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN =
  process.env.SENTRY_DSN ||
  process.env.NEXT_PUBLIC_SENTRY_DSN |
    'https://f6bd384734374955a4bc0272d081956b@sentry.infra.yandex.astral-dev.ru/152';

Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: 1.0,
});
