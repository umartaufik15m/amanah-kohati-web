"use client";

import { useEffect, useRef, useState } from "react";

type Part = string | { em: string };

type Props = {
  /** Teks atau potongan teks; { em } untuk kata miring. */
  parts: Part[] | string;
  as?: "span" | "p" | "div";
  className?: string;
  /** Jeda sebelum kata pertama muncul (ms). */
  delay?: number;
  /** Jeda antar kata (ms). */
  stagger?: number;
  /** rise = kata naik dari balik garis; fade = kata menyala dari samar. */
  mode?: "rise" | "fade";
};

/** Memunculkan teks kata demi kata saat masuk layar. */
export default function AnimText({ parts, as = "span", className = "", delay = 0, stagger = 70, mode = "rise" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -30px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const list: Part[] = typeof parts === "string" ? [parts] : parts;
  const words: { w: string; em: boolean }[] = [];
  for (const p of list) {
    const text = typeof p === "string" ? p : p.em;
    for (const w of text.split(/\s+/).filter(Boolean)) words.push({ w, em: typeof p !== "string" });
  }
  const plain = words.map((x) => x.w).join(" ");

  const Tag = as as any;
  return (
    <Tag ref={ref} className={`atext atext--${mode} ${shown ? "atext--in" : ""} ${className}`} aria-label={plain}>
      {words.map((x, i) => (
        <span key={i} aria-hidden="true">
          <span className="atext__w">
            <span style={{ transitionDelay: `${delay + i * stagger}ms` }}>{x.em ? <em>{x.w}</em> : x.w}</span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
