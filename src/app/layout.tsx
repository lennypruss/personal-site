import type { ReactNode } from "react";
import "./globals.css";

export { metadata } from "./metadata";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
