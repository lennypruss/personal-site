"use client";

import { useEffect, useState } from "react";

interface StatusLineProps {
  builtAt: string;
  commit: string | null;
  postCount: number;
  companyCount: number;
}

function formatRelative(iso: string, now: number): string {
  const seconds = Math.max(0, Math.round((now - new Date(iso).getTime()) / 1000));
  if (seconds < 60) return "just now";
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days}d ago`;
  return formatAbsolute(iso);
}

function formatAbsolute(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export function StatusLine({ builtAt, commit, postCount, companyCount }: StatusLineProps) {
  // Server render shows the absolute date; the client swaps in relative time after hydration.
  const [deployed, setDeployed] = useState(() => formatAbsolute(builtAt));

  useEffect(() => {
    const update = () => setDeployed(formatRelative(builtAt, Date.now()));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [builtAt]);

  return (
    <footer className="status-line" aria-label="Site status">
      <span className="status-dot" aria-hidden="true" />
      <span>
        last deploy <time dateTime={builtAt} title={new Date(builtAt).toUTCString()}>{deployed}</time>
      </span>
      {commit && (
        <>
          <span className="status-sep" aria-hidden="true">·</span>
          <a href={`https://github.com/lennypruss/personal-site/commit/${commit}`} target="_blank" rel="noopener noreferrer">
            {commit}
          </a>
        </>
      )}
      <span className="status-sep" aria-hidden="true">·</span>
      <span>{companyCount} companies</span>
      <span className="status-sep" aria-hidden="true">·</span>
      <span>{postCount} posts</span>
    </footer>
  );
}
