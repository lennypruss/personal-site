"use client";

import { useState } from "react";

const INITIAL_COUNT = 7;

interface BlogPost {
  title: string;
  url: string;
  date: string;
}

export function WritingSection({ posts }: { posts: BlogPost[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? posts : posts.slice(0, INITIAL_COUNT);

  return (
    <section aria-label="Writing">
      <div className="blog-section">
        <h2 className="underline">writing</h2>
        <div className="blog-links">
          {visible.map((post) => (
            <div key={post.url} className="blog-item">
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="blog-item-title">
                {post.title}
              </a>
              <span className="blog-item-date">{post.date}</span>
            </div>
          ))}
          {!expanded && posts.length > INITIAL_COUNT && (
            <button className="more-toggle" onClick={() => setExpanded(true)}>
              more...
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
