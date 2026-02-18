import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://lennypruss.com'),
  title: "Lenny Pruss",
  description: "early stage investor",
  authors: [{ name: "Lenny Pruss" }],
  keywords: ["venture capital", "developer tools", "infrastructure", "AI", "early stage investing"],
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#faf8f4",
  },
  openGraph: {
    title: "Lenny Pruss",
    description: "early stage investor",
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
    description: "early stage investor",
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