"use client";

export default function myImageLoader({ src, width, quality }) {
  return `https://devben.github.io/per-questions${src}?w=${width}&q=${
    quality || 75
  }`;
}
