'use client';

import React from 'react';
import Link from 'next/link';
import '../globals.css';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
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