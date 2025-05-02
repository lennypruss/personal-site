'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import type { ImgHTMLAttributes } from 'react';

const Image = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  if (!props.src || typeof props.src !== 'string') return null;
  
  // Since the image is in the public folder, we need to reference it from the root
  const imagePath = props.src.startsWith('/') ? props.src : `/${props.src}`;
  
  return (
    <img 
      src={imagePath} 
      alt={props.alt || ''} 
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
};

export default function BlogPost() {
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/The SDLC for agents.md')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load content');
        }
        return res.text();
      })
      .then((text) => {
        // Split the content into lines
        const lines = text.split('\n');
        // Insert the image at line 9
        lines.splice(8, 0, '![SDLC for Agents](/agent-sdlc-image.png)');
        // Join the lines back together
        setContent(lines.join('\n'));
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <article className="blog-post">
        <p>Error loading content: {error}</p>
      </article>
    );
  }

  if (content === null) {
    return (
      <article className="blog-post">
        <p>Loading...</p>
      </article>
    );
  }

  return (
    <article className="blog-post">
      <ReactMarkdown
        components={{
          img: Image
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
} 