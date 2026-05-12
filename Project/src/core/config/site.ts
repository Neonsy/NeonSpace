export const siteConfig = {
    name: 'NeonSpace',
    title: 'NeonSpace',
    description: 'A personal site for ideas, work, and experiments',
    url: 'https://neonspace.me',
} as const;

export const observabilityPaths = {
    sentryTunnel: '/monitoring',
    vercelAnalyticsScript: '/pulse/script.js',
    vercelAnalyticsView: '/pulse/view',
    vercelAnalyticsEvent: '/pulse/event',
    vercelAnalyticsSession: '/pulse/session',
    vercelSpeedInsightsScript: '/pulse/speed/script.js',
    vercelSpeedInsightsEndpoint: '/pulse/speed/vitals',
} as const;
