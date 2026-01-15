import * as Sentry from '@sentry/tanstackstart-react'
import { createRouter } from '@tanstack/react-router'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'

import * as TanstackQuery from './integrations/tanstack-query/root-provider'
import { routeTree } from './routeTree.gen'

export const getRouter = () => {
  const rqContext = TanstackQuery.getContext()

  const router = createRouter({
    routeTree,
    context: {
      ...rqContext,
    },
    defaultPreload: 'intent',
  })

  setupRouterSsrQueryIntegration({ router, queryClient: rqContext.queryClient })

  // Initialize Sentry on the client side only
  if (!router.isServer) {
    Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,

      // Environment - Vercel provides VERCEL_ENV (development, preview, production)
      environment:
        import.meta.env.VITE_VERCEL_ENV ??
        (import.meta.env.DEV ? 'development' : 'production'),

      // Capture user IP only in development for privacy compliance
      sendDefaultPii: import.meta.env.DEV,

      // Integrations for browser
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
      ],

      // Tracing - capture 100% during development
      tracesSampleRate: 1.0,

      // Control which URLs get distributed tracing headers
      tracePropagationTargets: ['localhost', /^https:\/\/neonspace\.me/],

      // Session Replay - 10% normal sessions, 100% when errors occur
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,

      // Enable Sentry logs
      _experiments: {
        enableLogs: true,
      },
    })
  }

  return router
}
