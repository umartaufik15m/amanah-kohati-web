import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import NewsCard from "@/components/NewsCard";
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
                <NewsCard b={b} />
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
