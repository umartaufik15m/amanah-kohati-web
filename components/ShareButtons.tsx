"use client";

import { useState } from "react";

export default function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const wa = `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard tidak tersedia */
    }
  };

  return (
    <div className="share">
      <span>Bagikan:</span>
      <a href={wa} target="_blank" rel="noreferrer" className="share__btn">WhatsApp</a>
      <button type="button" onClick={copy} className="share__btn">
        {copied ? "Tautan disalin ✓" : "Salin Tautan"}
      </button>
    </div>
  );
}
