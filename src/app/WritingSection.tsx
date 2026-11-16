"use client";

import { useState, type CSSProperties } from "react";

const INITIAL_COUNT = 7;

interface BlogPost {
  title: string;
  url: string;
  date: string;
}

export function WritingSection({ posts }: { posts: BlogPost[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? posts : posts.slice(0, INITIAL_COUNT);
  const hiddenCount = posts.length - INITIAL_COUNT;

  return (
    <section aria-label="Writing" className="blog-section">
      <h2 className="section-heading">
        writing
      </h2>
      <div className="blog-links">
        {visible.map((post, i) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`blog-item${i >= INITIAL_COUNT ? " blog-item-revealed" : ""}`}
            style={{ "--i": i, "--j": i - INITIAL_COUNT } as CSSProperties}
          >
            <span className="blog-item-date">{post.date}</span>
            <span>
              <span className="blog-item-title">{post.title}</span>
              <span className="blog-item-arrow" aria-hidden="true">↗</span>
            </span>
          </a>
        ))}
        {hiddenCount > 0 && (
          <button className="more-toggle" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
            {expanded ? "− show less" : `+ ${hiddenCount} more`}
          </button>
        )}
      </div>
    </section>
  );
}
