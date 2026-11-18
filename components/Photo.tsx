"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  label: string;
  className?: string;
};

/**
 * Menampilkan foto dari /public/images. Selama file belum ada,
 * yang tampil adalah bingkai pengganti berisi nama file yang dibutuhkan.
 */
export default function Photo({ src, alt, label, className = "" }: Props) {
  const [ok, setOk] = useState(true);
  const ref = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    // gambar yang gagal dimuat sebelum halaman aktif tidak memicu onError
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setOk(false);
  }, []);
  return (
    <div className={`photo ${className}`}>
      {ok ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img ref={ref} src={src} alt={alt} onError={() => setOk(false)} loading="lazy" />
      ) : (
        <div className="photo__placeholder" role="img" aria-label={alt}>
          <span>{label}</span>
          <small>{src.replace("/images/", "public/images/")}</small>
        </div>
      )}
    </div>
  );
}
