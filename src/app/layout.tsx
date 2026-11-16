import type { ReactNode } from "react";
import "./globals.css";

export { metadata, viewport } from "./metadata";

const BOOT_SCRIPT = `try{var d=document.documentElement;if(location.pathname==="/"&&!sessionStorage.getItem("booted")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("boot");sessionStorage.setItem("booted","1");setTimeout(function(){d.classList.remove("boot")},2600)}}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Plays the boot animation once per session, before first paint, unless reduced motion is on */}
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
