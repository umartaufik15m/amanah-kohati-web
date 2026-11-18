import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Photo from "@/components/Photo";
import Footer from "@/components/Footer";
import { berita } from "@/app/data";

export const metadata: Metadata = {
  title: "Rilis Berita — Amanah KOHATI",
  description: "Kumpulan rilis dan kabar terbaru Amanah KOHATI.",
};

export default function SemuaBerita() {
  return (
    <>
      <Nav />
      <main className="article">
        <div className="container">
          <Link href="/#berita" className="link link--green">← Kembali ke Beranda</Link>
          <div className="stitle" style={{ marginTop: 24 }}>
            <p className="kicker kicker--green">Kabar Terbaru</p>
            <h1 className="tag tag--green"><em>Rilis</em> Berita</h1>
          </div>
          <div className="news">
            {berita.map((b) => (
              <article key={b.slug} className="news__card reveal--in">
                <Link href={`/berita/${b.slug}`} className="news__banner" aria-label={b.judul}>
                  <Photo src={`/images/berita-${b.slug}.jpg`} alt={`Banner ${b.kategori}`} label={`Banner ${b.kategori}`} />
                </Link>
                <div className="news__body">
                  <div className="news__meta">
                    <span className="chip chip--green">{b.kategori}</span>
                    <span>{b.tanggal}</span>
                  </div>
                  <h3>{b.judul}</h3>
                  <p>{b.ringkasan}</p>
                  <Link href={`/berita/${b.slug}`} className="btn btn--outline-green btn--small">Baca Selengkapnya →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
