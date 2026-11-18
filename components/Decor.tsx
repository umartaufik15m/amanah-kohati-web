"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  kind: "kotak" | "kelopak";
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  reverse?: boolean;
  opacity?: number;
};

/** Hiasan latar yang berputar pelan. Tidak tampil kalau file gambarnya belum ada. */
export default function Decor({ kind, size, reverse, opacity = 0.85, ...pos }: Props) {
  const [ok, setOk] = useState(true);
  const ref = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setOk(false);
  }, []);
  if (!ok) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={`/images/hiasan-${kind}.png`}
      alt=""
      aria-hidden
      onError={() => setOk(false)}
      className={`decor ${reverse ? "decor--reverse" : ""}`}
      style={{ width: size, height: size, opacity, ...pos }}
    />
  );
}
