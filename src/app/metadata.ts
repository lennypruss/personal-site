import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://lennypruss.com'),
  title: "Lenny Pruss",
  description: "Early stage investor focused on developer tools, infrastructure, and AI.",
  openGraph: {
    title: "Lenny Pruss",
    description: "Early stage investor focused on developer tools, infrastructure, and AI.",
    type: "website",
    url: "https://lennypruss.com",
    siteName: "Lenny Pruss",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Lenny Pruss",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lenny Pruss",
    description: "Early stage investor focused on developer tools, infrastructure, and AI.",
    creator: "@lennypruss",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://lennypruss.com",
  },
}; 