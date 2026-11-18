import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Photo from "@/components/Photo";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import { berita, beritaInternal } from "@/app/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return beritaInternal().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const b = berita.find((x) => x.slug === slug);
  if (!b) return {};
  return {
    title: `${b.judul} — Amanah KOHATI`,
    description: b.ringkasan,
    openGraph: { title: b.judul, description: b.ringkasan, images: [`/images/berita-${b.slug}.jpg`], type: "article" },
  };
}

export default async function BeritaPage({ params }: Props) {
  const { slug } = await params;
  const b = beritaInternal().find((x) => x.slug === slug);
  if (!b) notFound();
  const lain = berita.filter((x) => x.slug !== b.slug);

  return (
    <>
      <Nav />
      <main className="article">
        <div className="container container--article">
          <Link href="/#berita" className="link link--green">← Kembali ke Beranda</Link>
          <div className="news__meta article__meta">
            <span className="chip chip--green">{b.kategori}</span>
            <span>{b.tanggal} · Tim Media Amanah KOHATI</span>
          </div>
          <h1 className="article__title">{b.judul}</h1>
          <div className="article__banner">
            <Photo src={`/images/berita-${b.slug}.jpg`} alt={`Banner ${b.kategori}`} label={`berita-${b.slug}.jpg`} />
          </div>
          <div className="article__body">
            {b.isi.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {b.kutipan && <blockquote>“{b.kutipan}”</blockquote>}
          </div>
          <ShareButtons title={b.judul} />
          {lain.length > 0 && (
            <div className="article__more">
              <h2>Berita lainnya</h2>
              <ul>
                {lain.map((x) => (
                  <li key={x.slug}>
                    <Link href={x.url ?? `/berita/${x.slug}`} {...(x.url ? { target: "_blank", rel: "noreferrer" } : {})}>
                      <span className="chip chip--green">{x.kategori}</span>
                      <b>{x.judul}</b>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
