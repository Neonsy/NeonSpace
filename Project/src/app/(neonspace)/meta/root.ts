import type { Metadata } from 'next';

// Default metadata applied to every page in the application.
export const rootMetadata: Metadata = {
    // Base URL used for generating absolute URLs (e.g. Open Graph images)
    metadataBase: new URL('https://neonsy.space'),

    // --- Document titles ---------------------------------------------------
    title: {
        default: 'NeonSpace',
        template: '%s | NeonSpace',
    },

    description: 'NeonSpace – the default description for all pages.',

    // --- Application identity ---------------------------------------------
    applicationName: 'NeonSpace',
    authors: [{ name: 'Neonsy', url: 'https://github.com/neonsy' }],
    creator: 'Neonsy',
    publisher: 'Neonsy',

    // Guide crawlers on how to handle referrers for outbound links
    referrer: 'origin-when-cross-origin',

    // Disable automatic detection of contact data in Safari on iOS
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },

    // --- Crawlers ----------------------------------------------------------
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },

    // --- Icons & manifest --------------------------------------------------
    manifest: '/site.webmanifest',
    icons: {
        icon: [{ url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
        apple: [
            {
                url: '/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
        other: [
            {
                rel: 'mask-icon',
                url: '/safari-pinned-tab.svg',
                color: '#5bbad5',
            },
        ],
    },
    appleWebApp: {
        capable: true,
        title: 'NeonSpace',
        statusBarStyle: 'default',
    },

    // --- Social cards ------------------------------------------------------
    openGraph: {
        type: 'website',
        url: 'https://neonsy.space',
        title: 'NeonSpace',
        description: 'NeonSpace – the default description for all pages.',
        siteName: 'NeonSpace',
        images: [
            {
                url: 'https://neonsy.space/og-image.png',
                width: 1200,
                height: 630,
                alt: 'NeonSpace',
            },
        ],
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NeonSpace',
        description: 'NeonSpace – the default description for all pages.',
        site: '@neonspace',
        creator: '@neonspace',
        images: ['https://neonsy.space/og-image.png'],
    },
};
