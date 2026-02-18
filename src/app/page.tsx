
const investments = [
  { name: 'Amp', url: 'https://ampcode.com', logo: '/logos/amp.svg' },
  { name: 'Antithesis', url: 'https://antithesis.com', logo: '/logos/antithesis.png' },
  { name: 'Anyscale', url: 'https://anyscale.com', logo: '/logos/anyscale.png' },
  { name: 'bitdrift', url: 'https://bitdrift.io', logo: '/logos/bitdrift.png' },
  { name: 'Chainguard', url: 'https://chainguard.dev', logo: '/logos/chainguard.png', size: 32 },
  { name: 'Cockroach Labs', url: 'https://cockroachlabs.com', logo: '/logos/cockroachlabs.png' },
  { name: 'Datadog', url: 'https://datadoghq.com', logo: '/logos/datadog.png', size: 32 },
  { name: 'dbt Labs', url: 'https://getdbt.com', logo: '/logos/dbtlabs.png' },
  { name: 'HashiCorp', url: 'https://hashicorp.com', logo: '/logos/hashicorp.png' },
  { name: 'Hightouch', url: 'https://hightouch.com', logo: '/logos/hightouch.svg' },
  { name: 'Temporal', url: 'https://temporal.io', logo: '/logos/temporal.png' },
  { name: 'TigerBeetle', url: 'https://tigerbeetle.com', logo: '/logos/tigerbeetle.png' },
  { name: 'turbopuffer', url: 'https://turbopuffer.com', logo: '/logos/turbopuffer.svg' },
];

export default function Home() {
  return (
    <main className="container">

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
            <div className="blog-item">
              <a href="https://www.amplifypartners.com/blog-posts/how-hightouch-built-their-long-running-agent-harness" target="_blank" rel="noopener noreferrer" className="blog-item-title">
                How Hightouch built their long-running agent harness
              </a>
              <span className="blog-item-date">Jan 2026</span>
            </div>
            <div className="blog-item">
              <a href="https://www.amplifypartners.com/blog-posts/agents-are-just-workflows-really" target="_blank" rel="noopener noreferrer" className="blog-item-title">
                Agents are just workflows, really
              </a>
              <span className="blog-item-date">Jul 2025</span>
            </div>
            <div className="blog-item">
              <a href="https://www.amplifypartners.com/blog-posts/the-agent-first-developer-toolchain-how-ai-will-radically-transform-the-sdlc" target="_blank" rel="noopener noreferrer" className="blog-item-title">
                The Agent-First Developer Toolchain: How AI will Radically Transform the SDLC
              </a>
              <span className="blog-item-date">Apr 2025</span>
            </div>
            <div className="blog-item">
              <a href="https://www.amplifypartners.com/blog-posts/how-skiplabs-is-building-react-for-the-backend" target="_blank" rel="noopener noreferrer" className="blog-item-title">
                How SkipLabs is building React for the backend
              </a>
              <span className="blog-item-date">Mar 2025</span>
            </div>
            <div className="blog-item">
              <a href="https://www.amplifypartners.com/blog-posts/our-investment-in-bitdrift" target="_blank" rel="noopener noreferrer" className="blog-item-title">
                Our investment in bitdrift
              </a>
              <span className="blog-item-date">Dec 2023</span>
            </div>
            <div className="blog-item">
              <a href="https://www.amplifypartners.com/blog-posts/our-investment-in-tigerbeetle" target="_blank" rel="noopener noreferrer" className="blog-item-title">
                Our investment in TigerBeetle
              </a>
              <span className="blog-item-date">Jan 2023</span>
            </div>
            <div className="blog-item">
              <a href="https://www.amplifypartners.com/blog-posts/our-investment-in-chainguard" target="_blank" rel="noopener noreferrer" className="blog-item-title">
                Our investment in Chainguard
              </a>
              <span className="blog-item-date">Dec 2021</span>
            </div>
            <div className="blog-item">
              <a href="https://www.amplifypartners.com/blog-posts/announcing-our-investment-in-hightouch" target="_blank" rel="noopener noreferrer" className="blog-item-title">
                Our investment in Hightouch
              </a>
              <span className="blog-item-date">Jul 2021</span>
            </div>
            <div className="blog-item">
              <a href="https://www.amplifypartners.com/blog-posts/our-investment-in-temporal" target="_blank" rel="noopener noreferrer" className="blog-item-title">
                Our investment in Temporal
              </a>
              <span className="blog-item-date">Oct 2020</span>
            </div>
            <div className="blog-item">
              <a href="https://medium.com/lenny-for-your-thoughts/when-10x-better-isn-t-enough-building-technical-products-that-win-2ef2c642c9a2" target="_blank" rel="noopener noreferrer" className="blog-item-title">
                When 10x Better isn&apos;t Enough: Building Technical Products that Win
              </a>
              <span className="blog-item-date">Jun 2018</span>
            </div>
            <div className="blog-item">
              <a href="https://medium.com/lenny-for-your-thoughts/infrastructure-3-0-building-blocks-for-the-ai-revolution-f141d55b4202" target="_blank" rel="noopener noreferrer" className="blog-item-title">
                Infrastructure 3.0: Building Blocks for the AI Revolution
              </a>
              <span className="blog-item-date">Dec 2017</span>
            </div>
            <div className="blog-item">
              <a href="https://medium.com/lenny-for-your-thoughts/the-devopsification-of-security-e62604203adc" target="_blank" rel="noopener noreferrer" className="blog-item-title">
                The DevOpsification of Security
              </a>
              <span className="blog-item-date">Nov 2016</span>
            </div>
            <div className="blog-item">
              <a href="https://medium.com/lenny-for-your-thoughts/market-makers-surfers-and-10x-ers-a-model-for-investing-in-enterprise-it-726782affe76" target="_blank" rel="noopener noreferrer" className="blog-item-title">
                Market Makers, Surfers, and 10xers: A Model for Investing in Enterprise IT
              </a>
              <span className="blog-item-date">Jul 2015</span>
            </div>
            <div className="blog-item">
              <a href="https://medium.com/lenny-for-your-thoughts/the-most-important-saas-metric-nobody-talks-about-time-to-value-ttv-40815bd16196" target="_blank" rel="noopener noreferrer" className="blog-item-title">
                The Most Important SaaS Metric Nobody Talks about: Time-to-Value
              </a>
              <span className="blog-item-date">Jun 2015</span>
            </div>
            <div className="blog-item">
              <a href="https://medium.com/lenny-for-your-thoughts/the-developer-driven-economy-how-the-developer-has-become-the-organization-s-most-influential-d74ed11207b" target="_blank" rel="noopener noreferrer" className="blog-item-title">
                The Developer Driven Economy: How the Developer Has Become the Organization&apos;s Most Influential Employee
              </a>
              <span className="blog-item-date">Jun 2015</span>
            </div>
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
                <div className="investment-logo-wrapper">
                  <img src={company.logo} alt={company.name} className="investment-logo" style={company.size ? { width: company.size, height: company.size } : undefined} />
                </div>
                <span>{company.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
