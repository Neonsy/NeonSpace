import { createRootRouteWithContext } from '@tanstack/react-router';

import { siteConfig } from '@/core/config/site';
import RootLayout from '@/layouts/root';

import appCss from '@/styles/index.css?url';

import type { QueryClient } from '@tanstack/react-query';

interface MyRouterContext {
    queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                title: siteConfig.title,
            },
            {
                name: 'description',
                content: siteConfig.description,
            },
            {
                property: 'og:type',
                content: 'website',
            },
            {
                property: 'og:site_name',
                content: siteConfig.name,
            },
            {
                property: 'og:title',
                content: siteConfig.title,
            },
            {
                property: 'og:description',
                content: siteConfig.description,
            },
            {
                property: 'og:url',
                content: siteConfig.url,
            },
            {
                name: 'twitter:card',
                content: 'summary',
            },
            {
                name: 'twitter:title',
                content: siteConfig.title,
            },
            {
                name: 'twitter:description',
                content: siteConfig.description,
            },
        ],
        links: [
            {
                rel: 'stylesheet',
                href: appCss,
            },
            {
                rel: 'canonical',
                href: siteConfig.url,
            },
        ],
    }),
    shellComponent: RootLayout,
});
