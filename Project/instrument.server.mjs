import * as Sentry from '@sentry/tanstackstart-react'

const sentryDsn =
  import.meta.env?.VITE_SENTRY_DSN ?? process.env.VITE_SENTRY_DSN

const isDev = process.env.NODE_ENV !== 'production'

if (sentryDsn) {
  Sentry.init({
    dsn: sentryDsn,

    // Environment - Vercel provides VERCEL_ENV (development, preview, production)
    environment:
      process.env.VERCEL_ENV ??
      (process.env.NODE_ENV === 'production' ? 'production' : 'development'),

    // Capture user IP and request headers only in development
    sendDefaultPii: isDev,

    // Tracing - capture 100% during development, reduce in production
    tracesSampleRate: 1.0,

    // Session Replay - 10% normal sessions, 100% when errors occur
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,

    // Enable Sentry logs
    _experiments: {
      enableLogs: true,
    },
  })
}
