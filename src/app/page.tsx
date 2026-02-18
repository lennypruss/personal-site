'use client';

import { useState, useEffect } from 'react';

const investments = [
  { name: 'Amp', url: 'https://ampcode.com' },
  { name: 'Antithesis', url: 'https://antithesis.com' },
  { name: 'Anyscale', url: 'https://anyscale.com' },
  { name: 'bitdrift', url: 'https://bitdrift.io' },
  { name: 'Chainguard', url: 'https://chainguard.dev' },
  { name: 'Cockroach Labs', url: 'https://cockroachlabs.com' },
  { name: 'Datadog', url: 'https://datadoghq.com' },
  { name: 'dbt Labs', url: 'https://getdbt.com' },
  { name: 'HashiCorp', url: 'https://hashicorp.com' },
  { name: 'Hightouch', url: 'https://hightouch.com' },
  { name: 'Temporal', url: 'https://temporal.io' },
  { name: 'TigerBeetle', url: 'https://tigerbeetle.com' },
  { name: 'turbopuffer', url: 'https://turbopuffer.com' },
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved !== null) {
      setIsDarkMode(saved === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', !isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <main className="container">
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="theme-toggle"
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

      <header>
        <h1>Lenny Pruss<span className="cursor">_</span></h1>
        <p className="description">early stage investor</p>
        <div className="links">
          <a href="https://x.com/lennypruss" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg className="icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="https://github.com/lennypruss" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg className="icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/lennypruss/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg className="icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
          </a>
          <a href="https://www.amplifypartners.com/team/lenny-pruss" target="_blank" rel="noopener noreferrer" className="bio-link">
            bio
          </a>
        </div>
      </header>

      <section aria-label="Writing">
        <div className="blog-section">
          <h2 className="underline">writing</h2>
          <div className="blog-links">
            <a href="https://www.amplifypartners.com/blog-posts/how-hightouch-built-their-long-running-agent-harness" target="_blank" rel="noopener noreferrer">
              How Hightouch built their long-running agent harness
            </a>
            <a href="https://www.amplifypartners.com/blog-posts/agents-are-just-workflows-really" target="_blank" rel="noopener noreferrer">
              Agents are just workflows, really
            </a>
            <a href="https://www.amplifypartners.com/blog-posts/the-agent-first-developer-toolchain-how-ai-will-radically-transform-the-sdlc" target="_blank" rel="noopener noreferrer">
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
            <a href="https://medium.com/lenny-for-your-thoughts/when-10x-better-isn-t-enough-building-technical-products-that-win-2ef2c642c9a2" target="_blank" rel="noopener noreferrer">
              When 10x Better isn&apos;t Enough: Building Technical Products that Win
            </a>
            <a href="https://medium.com/lenny-for-your-thoughts/market-makers-surfers-and-10x-ers-a-model-for-investing-in-enterprise-it-726782affe76" target="_blank" rel="noopener noreferrer">
              Market Makers, Surfers, and 10xers: A Model for Investing in Enterprise IT
            </a>
            <a href="https://medium.com/lenny-for-your-thoughts/the-most-important-saas-metric-nobody-talks-about-time-to-value-ttv-40815bd16196" target="_blank" rel="noopener noreferrer">
              The Most Important SaaS Metric Nobody Talks about: Time-to-Value
            </a>
            <a href="https://medium.com/lenny-for-your-thoughts/the-developer-driven-economy-how-the-developer-has-become-the-organization-s-most-influential-d74ed11207b" target="_blank" rel="noopener noreferrer">
              The Developer Driven Economy: How the Developer Has Become the Organization&apos;s Most Influential Employee
            </a>
          </div>
        </div>
      </section>

      <section aria-label="Select Investments">
        <div className="investments-section">
          <h2 className="underline">select investments</h2>
          <div className="investments-grid">
            {investments.map((company) => (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="investment-item"
              >
                {company.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
