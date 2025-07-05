import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import '@/app/(neonspace)/styles/globals.css';
import { rootMetadata } from './meta/root';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = rootMetadata;
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover',
    themeColor: '#1a0b2e',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
