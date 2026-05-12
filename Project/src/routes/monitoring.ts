import { createFileRoute } from '@tanstack/react-router';

function getSentryEnvelopeEndpoint() {
    const dsn = process.env.VITE_SENTRY_DSN;

    if (!dsn) {
        return null;
    }

    try {
        const dsnUrl = new URL(dsn);
        const projectId = dsnUrl.pathname.replace('/', '');

        if (!projectId) {
            return null;
        }

        return `${dsnUrl.protocol}//${dsnUrl.host}/api/${projectId}/envelope/`;
    } catch {
        return null;
    }
}

export const Route = createFileRoute('/monitoring')({
    server: {
        handlers: {
            POST: async ({ request }) => {
                const endpoint = getSentryEnvelopeEndpoint();

                if (!endpoint) {
                    return new Response(null, { status: 204 });
                }

                const envelope = await request.text();

                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/x-sentry-envelope',
                    },
                    body: envelope,
                });

                return new Response(null, { status: response.status });
            },
        },
    },
});
