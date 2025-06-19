import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://lennypruss.com'),
  title: 'The Agent-First Developer Toolchain: How AI will Radically Transform the SDLC',
  description: 'An exploration of how AI agents will transform software development, from code writing to system architecture, and the new tools and workflows that will emerge.',
  openGraph: {
    title: 'The Agent-First Developer Toolchain: How AI will Radically Transform the SDLC',
    description: 'An exploration of how AI agents will transform software development, from code writing to system architecture, and the new tools and workflows that will emerge.',
    type: 'article',
    publishedTime: '2024-04-29',
    authors: ['Lenny Pruss'],
    url: 'https://lennypruss.com/blog/the-sdlc-for-agents',
    siteName: 'Lenny Pruss',
    locale: 'en_US',
    images: [
      {
        url: '/agent-sdlc-image.png',
        width: 1200,
        height: 630,
        alt: 'SDLC for Agents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Agent-First Developer Toolchain: How AI will Radically Transform the SDLC',
    description: 'An exploration of how AI agents will transform software development, from code writing to system architecture, and the new tools and workflows that will emerge.',
    creator: '@lennypruss',
    images: ['/agent-sdlc-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://lennypruss.com/blog/the-sdlc-for-agents',
  },
}; 