import type { ReactNode } from 'react';
import Link from 'next/link';

export default function BlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="blog-page">
      <header className="blog-header">
        <Link href="/" className="blog-home-link">
          <h1 className="blog-title">
            Lenny Pruss<span className="cursor">_</span>
          </h1>
        </Link>
      </header>
      <main className="blog-content">
        {children}
      </main>
    </div>
  );
}
