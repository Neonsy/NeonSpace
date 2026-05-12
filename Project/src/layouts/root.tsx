import { HeadContent, Scripts } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import { observabilityPaths } from '@/core/config/site';
import TanStackQueryDevtools from '@/core/integrations/tanstack-query/devtools';

import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <HeadContent />
            </head>
            <body>
                {children}
                <Analytics
                    scriptSrc={observabilityPaths.vercelAnalyticsScript}
                    viewEndpoint={observabilityPaths.vercelAnalyticsView}
                    eventEndpoint={observabilityPaths.vercelAnalyticsEvent}
                    sessionEndpoint={observabilityPaths.vercelAnalyticsSession}
                />
                <SpeedInsights
                    scriptSrc={observabilityPaths.vercelSpeedInsightsScript}
                    endpoint={observabilityPaths.vercelSpeedInsightsEndpoint}
                />
                <TanStackDevtools
                    config={{
                        position: 'bottom-right',
                    }}
                    plugins={[
                        {
                            name: 'Tanstack Router',
                            render: <TanStackRouterDevtoolsPanel />,
                        },
                        TanStackQueryDevtools,
                    ]}
                />
                <Scripts />
            </body>
        </html>
    );
}
