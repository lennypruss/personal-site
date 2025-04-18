import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lenny Pruss",
  description: "Early Stage Investor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
