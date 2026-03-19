"use client";

export default function myImageLoader({ src, width, quality }) {
  // Pass through absolute URLs (e.g. Amazon CDN images) unchanged
  if (src.startsWith("http")) {
    return src;
  }
  return `https://devben.github.io/per-questions${src}?w=${width}&q=${
    quality || 75
  }`;
}
