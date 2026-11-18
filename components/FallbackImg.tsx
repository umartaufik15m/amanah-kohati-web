"use client";

import { useEffect, useRef, useState } from "react";

type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  /** Dicoba berurutan; file pertama yang ada akan dipakai. */
  srcs: string[];
  /** Ditampilkan kalau semua file tidak ada. */
  fallback?: React.ReactNode;
};

export default function FallbackImg({ srcs, fallback = null, ...rest }: Props) {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLImageElement | null>(null);
  const next = () => setI((v) => v + 1);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) next();
  }, [i]);

  if (i >= srcs.length) return <>{fallback}</>;
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img key={srcs[i]} ref={ref} src={encodeURI(srcs[i])} onError={next} {...rest} />;
}
