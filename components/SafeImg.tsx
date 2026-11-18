"use client";

import { useEffect, useRef, useState } from "react";

/** Gambar biasa yang otomatis disembunyikan kalau file-nya belum ada. */
export default function SafeImg(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [ok, setOk] = useState(true);
  const ref = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setOk(false);
  }, []);
  if (!ok) return null;
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img ref={ref} {...props} onError={() => setOk(false)} />;
}
