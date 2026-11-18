import Link from "next/link";
import Photo from "@/components/Photo";
import type { Berita } from "@/app/data";

/** Kartu berita. Liputan media (punya `url`) membuka artikel aslinya di tab baru. */
export default function NewsCard({ b }: { b: Berita }) {
  const external = Boolean(b.url);
  const href = b.url ?? `/berita/${b.slug}`;
  const linkProps = external ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <>
      <Link href={href} className="news__banner" aria-label={b.judul} {...linkProps}>
        {external ? (
          <div className="news__media">
            <span className="chip news__media-chip">Liputan Media</span>
            <b>{b.sumber}</b>
            <span>{b.bannerSub}</span>
          </div>
        ) : (
          <Photo src={`/images/${b.banner ?? `berita-${b.slug}.jpg`}`} alt={`Banner ${b.kategori}`} label={`Banner ${b.kategori}`} />
        )}
      </Link>
      <div className="news__body">
        <div className="news__meta">
          <span className="chip chip--green">{b.kategori}</span>
          <span>{b.tanggal}</span>
        </div>
        <h3>{b.judul}</h3>
        <p>{b.ringkasan}</p>
        <Link href={href} className="btn btn--outline-green btn--small" {...linkProps}>
          {external ? `Baca di ${b.sumber} ↗` : "Baca Selengkapnya →"}
        </Link>
      </div>
    </>
  );
}
