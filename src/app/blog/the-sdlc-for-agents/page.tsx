import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export { metadata } from './metadata';

export default function BlogPost() {
  const filePath = path.join(process.cwd(), 'public', 'The SDLC for agents.md');
  const content = fs.readFileSync(filePath, 'utf-8');

  return (
    <article className="blog-post">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
