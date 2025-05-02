'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);

  return (
    <main className="container">
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)} 
        className="theme-toggle"
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      <h1>Lenny Pruss<span className="cursor">_</span></h1>
      <p className="description">early stage investor</p>
      <div className="links">
        <a href="https://x.com/lennypruss" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <svg className="icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/lennypruss/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg className="icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
          </svg>
        </a>
        <a href="https://www.amplifypartners.com/investment-team/lenny-pruss" target="_blank" rel="noopener noreferrer" className="bio-link">
          bio
        </a>
      </div>
      
      <div className="blog-section">
        <h2 className="underline">writing</h2>
        <div className="blog-links">
          <a href="/blog/the-sdlc-for-agents">
            The Agent-First Developer Toolchain: How AI will Radically Transform the SDLC
          </a>
          <a href="https://www.amplifypartners.com/blog-posts/how-skiplabs-is-building-react-for-the-backend" target="_blank" rel="noopener noreferrer">
            How SkipLabs is building React for the backend
          </a>
          <a href="https://www.amplifypartners.com/blog-posts/our-investment-in-bitdrift" target="_blank" rel="noopener noreferrer">
            Our investment in bitdrift
          </a>
          <a href="https://www.amplifypartners.com/blog-posts/our-investment-in-tigerbeetle" target="_blank" rel="noopener noreferrer">
            Our investment in TigerBeetle
          </a>
          <a href="https://www.amplifypartners.com/blog-posts/our-investment-in-chainguard" target="_blank" rel="noopener noreferrer">
            Our investment in Chainguard
          </a>
          <a href="https://www.amplifypartners.com/blog-posts/announcing-our-investment-in-hightouch" target="_blank" rel="noopener noreferrer">
            Our investment in Hightouch
          </a>
          <a href="https://www.amplifypartners.com/blog-posts/our-investment-in-temporal" target="_blank" rel="noopener noreferrer">
            Our investment in Temporal
          </a>
          <a href="https://medium.com/lenny-for-your-thoughts/infrastructure-3-0-building-blocks-for-the-ai-revolution-f141d55b4202" target="_blank" rel="noopener noreferrer">
            Infrastructure 3.0: Building Blocks for the AI Revolution
          </a>
          <a href="https://medium.com/lenny-for-your-thoughts/the-devopsification-of-security-e62604203adc" target="_blank" rel="noopener noreferrer">
            The DevOpsification of Security
          </a>
          <a href="https://medium.com/lenny-for-your-thoughts/when-10x-better-isn-t-enough-building-technical-products-that-win-2ef2c642c9a2">
            When 10x Better isn&apos;t Enough: Building Technical Products that Win
          </a>
          <a href="https://medium.com/lenny-for-your-thoughts/market-makers-surfers-and-10x-ers-a-model-for-investing-in-enterprise-it-726782affe76">
            Market Makers, Surfers, and 10xers: A Model for Investing in Enterprise IT
          </a>
          <a href="https://medium.com/lenny-for-your-thoughts/the-most-important-saas-metric-nobody-talks-about-time-to-value-ttv-40815bd16196">
            The Most Important SaaS Metric Nobody Talks about: Time-to-Value
          </a>
          <a href="https://medium.com/lenny-for-your-thoughts/the-developer-driven-economy-how-the-developer-has-become-the-organization-s-most-influential-d74ed11207b">
            The Developer Driven Economy: How the Developer Has Become the Organization&apos;s Most Influential Employee
          </a>
        </div>
      </div>
    </main>
  );
}
