import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Decor from "@/components/Decor";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import SafeImg from "@/components/SafeImg";
import FallbackImg from "@/components/FallbackImg";
import {
  hero, berita, profil, profilSection, pendidikan, publikasi, prestasiNarasi, prestasi,
  organisasiNarasi, kaderisasi,
} from "./data";

function Marquee({ text, tone }: { text: string; tone: "green" | "pink" }) {
  const t = Array.from({ length: 6 }, () => text).join("");
  return (
    <div className={`marquee marquee--${tone}`} aria-hidden>
      <div className="marquee__track">
        <span>{t}</span>
        <span>{t}</span>
      </div>
    </div>
  );
}

function Title({ kicker, italic, rest, tone }: { kicker?: string; italic: string; rest?: string; tone: "green" | "blue" | "pink" | "white" }) {
  return (
    <div className="stitle">
      {kicker && <p className={`kicker kicker--${tone}`}>{kicker}</p>}
      <h2 className={`tag tag--${tone}`}>
        <em>{italic}</em>
        {rest ? ` ${rest}` : ""}
      </h2>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* COVER — sambutan */}
        <section className="hero">
          <Decor kind="kelopak" size={380} left="-130px" bottom="-40px" />
          <Decor kind="kotak" size={210} right="-60px" top="110px" reverse />
          <div className="container hero__grid">
            <div className="hero__copy">
              <Reveal>
                <SafeImg src="/images/logo-header.png" alt="Logo HMI dan KOHATI" className="hero__logo" />
              </Reveal>
              <Reveal delay={80}>
                <h1 className="hero__title">
                  {hero.judul.replace(/,\s*$/, "")}
                  <span>
                    untuk <em>Perempuan</em> Indonesia
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="hero__tagline">{hero.tagline}</p>
              </Reveal>
              <Reveal delay={240}>
                <div className="hero__who">
                  <strong>{hero.ajakan}</strong>
                  <span>{hero.ajakanSub}</span>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="hero__cta">
                  <a href="#profil" className="btn btn--pink">Kenali Profil</a>
                  <a href="#berita" className="btn btn--ghost-pink">Lihat Berita</a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={150} className="hero__visual hero__visual--img">
              <FallbackImg
                srcs={["/images/Visual-hero.png", "/images/Visual-hero.jpg"]}
                alt="Dini Asmiatul Amanah"
                className="hero__visual-img"
              />
            </Reveal>
          </div>
        </section>
        <Marquee tone="green" text="SELAMAT DATANG  ·  AMANAH KOHATI  ·  UNTUK PEREMPUAN INDONESIA  ·  " />

        {/* RILIS BERITA — hijau */}
        <section id="berita" className="section sec--green-soft">
          <Decor kind="kotak" size={180} right="-40px" top="40px" />
          <div className="container">
            <div className="row-between">
              <Title kicker="Kabar Terbaru" italic="Rilis" rest="Berita" tone="green" />
              <Link href="/berita" className="link link--green">Lihat semua rilis →</Link>
            </div>
            <div className={`news ${berita.length === 1 ? "news--single" : ""}`}>
              {berita.slice(0, 3).map((b, i) => (
                <Reveal key={b.slug} delay={i * 90} as="article" className="news__card">
                  <NewsCard b={b} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROFIL — biru */}
        <section id="profil" className="section sec--blue-soft">
          <Decor kind="kelopak" size={320} right="-120px" bottom="60px" reverse />
          <div className="container profile profile--solo">
            <div className="profile__body">
              <Title kicker="Rekam Jejak" italic={profilSection.judulMiring} rest={profilSection.judul} tone="blue" />
              <p className="narasi">{profilSection.narasi}</p>
              <Reveal>
                <h3 className="profile__name">{profil.nama}</h3>
                <p className="profile__place">{profil.asal}</p>
                <ul className="chips">
                  {profil.fokus.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </Reveal>
              <Reveal className="card">
                <h4 className="card__title">Latar Pendidikan</h4>
                <ul className="edu">
                  {pendidikan.map((p) => (
                    <li key={p.jenjang}>
                      <span className="edu__lvl">{p.jenjang}</span>
                      <span>
                        <b>{p.nama}</b>
                        {p.catatan && <em> · {p.catatan}</em>}
                        {p.tempat && <small>{p.tempat}</small>}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="card">
                <h4 className="card__title">Publikasi Ilmiah</h4>
                <ul className="pubs">
                  {publikasi.map((p) => (
                    <li key={p.doi}>
                      <b>{p.judul}</b>
                      <span>{p.sitasi}</span>
                      <a href={p.doi} target="_blank" rel="noreferrer">{p.doi.replace("https://", "")}</a>
                      <i className="badge">{p.indeks}</i>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PRESTASI — biru */}
        <section id="rekam-jejak" className="section sec--blue-soft-rev">
          <Decor kind="kotak" size={230} left="-90px" top="110px" />
          <div className="container">
            <Title kicker="Rekam Jejak" italic="Perjalanan" rest="Prestasi" tone="blue" />
            <p className="narasi">{prestasiNarasi}</p>
            <ol className="achieve">
              {prestasi.map((p, i) => (
                <Reveal as="li" key={p.judul} delay={i * 80} className={`achieve__item ${i === 1 || i === 2 ? "is-tint" : ""}`}>
                  <span className="achieve__no">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{p.judul}</h3>
                    <p>{p.isi}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ORGANISASI — hijau */}
        <section id="kaderisasi" className="section sec--green-soft-rev">
          <Decor kind="kelopak" size={270} right="-80px" top="-70px" reverse />
          <div className="container">
            <div className="row-title">
              <Title kicker="Rekam Jejak" italic="Riwayat" rest="Kaderisasi" tone="green" />
              <p className="narasi narasi--side">{organisasiNarasi}</p>
            </div>
            <Reveal className="kader">
              <ul>
                {kaderisasi.map((k) => (
                  <li key={k.kode}><b>{k.kode}</b><span>{k.tempat}</span></li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
