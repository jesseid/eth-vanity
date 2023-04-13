import '@/styles/globals.css';

import { cn } from '@/lib/utils';
import { RootLayoutProps } from '@/types';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: {
    default: 'ETH Vanity',
    template: '%s | ETH Vanity'
  },
  description: 'ETH Vanity.',
  openGraph: {
    title: 'ETH Vanity',
    description: 'ETH Vanity.',
    url: 'https://aitools.eth2.ml',
    siteName: 'ETH Vanity',
    locale: 'en-US',
    type: 'website'
    // TODO: add logo for images
  },
  twitter: {
    title: 'ETH Vanity',
    card: 'summary_large_image',
    description: 'ETH Vanity.'
  },
  icons: {
    shortcut: '/favicon.ico'
  }
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        'selection:bg-neutral-300 dark:bg-neutral-900 dark:text-neutral-200 dark:selection:bg-neutral-700',
        fontSans.variable
      )}
    >
      <head />
      <body className="mx-auto flex max-w-3xl flex-auto flex-col text-sm antialiased md:text-base lg:text-base">
        <main className="min-h-full">{children}</main>
      </body>
    </html>
  );
}
