import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Decor from "@/components/Decor";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { getSemuaBerita } from "@/lib/news";
import SafeImg from "@/components/SafeImg";
import FallbackImg from "@/components/FallbackImg";
import Photo from "@/components/Photo";
import AnimText from "@/components/AnimText";
import MisiStepper from "@/components/MisiStepper";
import AspirasiForm from "@/components/AspirasiForm";
import {
  hero, profil, profilSection, pendidikan, publikasi, prestasiNarasi, prestasi,
  organisasiNarasi, kaderisasi, organisasi, manifesto, visi, misi, dimensi, kutipan,
  program, dukungan, tahapan,
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
    <Reveal className="stitle">
      {kicker && <p className={`kicker kicker--${tone}`}>{kicker}</p>}
      <h2 className={`tag tag--${tone}`}>
        <AnimText parts={rest ? [{ em: italic }, rest] : [{ em: italic }]} delay={150} stagger={90} />
      </h2>
    </Reveal>
  );
}

export const revalidate = 60;

export default async function Page() {
  const berita = await getSemuaBerita();
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
              <h1 className="hero__title">
                <AnimText parts={hero.judul.replace(/,\s*$/, "")} delay={150} stagger={120} />
                <AnimText parts={["untuk", { em: "Perempuan" }, "Indonesia"]} className="hero__sub" delay={450} stagger={110} />
              </h1>
              <AnimText as="p" parts={hero.tagline} className="hero__tagline" mode="fade" delay={850} stagger={70} />
              <Reveal delay={240}>
                <div className="hero__who">
                  <strong>{hero.ajakan}</strong>
                  <span>{hero.ajakanSub}</span>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="hero__cta">
                  <a href="#profil" className="btn btn--pink">Kenali Profil</a>
                  <a href="#gagasan" className="btn btn--ghost-pink">Baca Gagasan</a>
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

        {/* TAHAPAN MUNAS — pink */}
        <section id="tahapan" className="section sec--pink-soft">
          <Decor kind="kelopak" size={220} left="-80px" top="40px" reverse />
          <div className="container">
            <Title kicker="Jadwal Resmi" italic="Tahapan" rest="Menuju Munas" tone="pink" />
            <p className="narasi">Rangkaian pemilihan Ketua Umum KOHATI PB HMI periode 2027–2029 hingga Musyawarah Nasional KOHATI ke-XXVI.</p>
            <ol className="steps">
              {tahapan.map((t, i) => (
                <Reveal as="li" key={t.judul} delay={i * 60} className={`steps__item steps__item--${t.fase}`}>
                  <span className="steps__no">{i + 1}</span>
                  <b className="steps__date">{t.tanggal}</b>
                  <h3>{t.judul}</h3>
                  <p>{t.ket}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* PROFIL — biru */}
        <section id="profil" className="section sec--blue-soft">
          <Decor kind="kelopak" size={320} right="-120px" bottom="60px" reverse />
          <div className="container profile">
            <Reveal className="profile__photo">
              <Photo src="/images/dini-profil.png" alt={`Foto profil ${profil.namaPendek}`} label="Foto profil" />
            </Reveal>
            <div className="profile__body">
              <Title kicker="Rekam Jejak" italic={profilSection.judulMiring} rest={profilSection.judul} tone="blue" />
              <p className="narasi">{profilSection.narasi}</p>
              <Reveal>
                <h3 className="profile__name">{profil.nama}</h3>
                <p className="profile__place">{profil.asal}</p>
                <a className="profile__ig" href={`https://instagram.com/${profil.kontak.instagramPribadi}`} target="_blank" rel="noreferrer">Instagram @{profil.kontak.instagramPribadi}</a>
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
              <Title kicker="Rekam Jejak" italic="Pengalaman" rest="Organisasi" tone="green" />
              <p className="narasi narasi--side">{organisasiNarasi}</p>
            </div>
            <Reveal className="kader">
              <h3>Riwayat Kaderisasi</h3>
              <ul>
                {kaderisasi.map((k) => (
                  <li key={k.kode}><b>{k.kode}</b><span>{k.tempat}</span></li>
                ))}
              </ul>
            </Reveal>
            <div className="three">
              {organisasi.map((o, i) => (
                <Reveal key={o.grup} delay={i * 90}>
                  <details className="card acc" open={i === 0}>
                    <summary>
                      <h4 className="card__title card__title--green">{o.grup}</h4>
                      <i className="acc__icon" aria-hidden />
                    </summary>
                    <ul className="bullets bullets--green">
                      {o.daftar.map((d) => <li key={d}>{d}</li>)}
                    </ul>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* MANIFESTO — pink */}
        <section id="gagasan" className="section sec--pink manifesto">
          <Decor kind="kotak" size={250} left="-100px" top="70px" />
          <Decor kind="kelopak" size={210} right="-60px" bottom="80px" reverse />
          <div className="container container--narrow">
            <p className="kicker kicker--pink center">{manifesto.label}</p>
            <span className="manifesto__mark" aria-hidden>“</span>
            <Reveal>
              <blockquote className="manifesto__quote">
                <AnimText parts={[{ em: manifesto.sorot }, manifesto.kalimat]} mode="fade" stagger={45} />
              </blockquote>
              <p className="manifesto__by">{manifesto.oleh}</p>
            </Reveal>
          </div>
          <div className="container three manifesto__pillars">
            {manifesto.komitmen.map((k, i) => (
              <Reveal key={k.judul} delay={i * 90} className="card">
                <h4 className="card__title">{k.judul}</h4>
                <p>{k.isi}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* VISI MISI — hijau tegas */}
        <section id="visi-misi" className="section sec--green-strong">
          <Decor kind="kelopak" size={340} right="-120px" top="-90px" opacity={0.3} />
          <Decor kind="kotak" size={200} left="-70px" bottom="40px" opacity={0.3} reverse />
          <div className="container">
            <Title kicker="Gagasan" italic="Visi" rest="& Misi" tone="white" />
            <p className="narasi narasi--light">Tiga amanah yang menjadi arah gerak KOHATI periode 2027–2029.</p>
            <Reveal className="visi">
              <p className="visi__label">Visi</p>
              <p>{visi}</p>
            </Reveal>
            <Reveal>
              <MisiStepper misi={misi} />
            </Reveal>
            <Reveal className="dimensi">
              <h3>Dimensi Amanah Kepemimpinan</h3>
              <div className="dimensi__grid">
                {dimensi.map((d) => (
                  <details key={d.judul} className="acc acc--dim">
                    <summary><b>{d.judul}</b><i className="acc__icon" aria-hidden /></summary>
                    <p>{d.isi}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* KUTIPAN — pink */}
        <section className="quote-band">
          <div className="container container--narrow">
            <AnimText as="p" parts={[{ em: kutipan.miring }, kutipan.lanjut]} mode="fade" stagger={60} />
            <span className="quote-band__tag">{dukungan.tagar}</span>
          </div>
        </section>

        {/* PROGRAM — hijau */}
        <section id="program" className="section sec--green-soft">
          <Decor kind="kotak" size={210} left="-70px" bottom="60px" />
          <div className="container">
            <div className="program__head">
              <p className="kicker kicker--pill kicker--pill-green">Rencana Program</p>
              <h2 className="program__title">8 Program Amanah KOHATI</h2>
              <p className="narasi center">Gagasan yang diterjemahkan menjadi kerja nyata untuk kader dan perempuan Indonesia.</p>
              <p className="acc-hint">Klik setiap program untuk membaca penjelasannya.</p>
              <ul className="legend">
                <li className="m1">Amanah Kaderisasi</li>
                <li className="m2">Amanah Kepemimpinan</li>
                <li className="m3">Amanah Kelembagaan</li>
              </ul>
            </div>
            <div className="programs">
              {program.map((p, i) => (
                <Reveal key={p.no} delay={(i % 4) * 70}>
                  <details className={`prog prog--m${p.misi} acc`}>
                    <summary className="prog__top">
                      <span className="num">{p.no}</span>
                      <div><small>KOHATI</small><h3>{p.nama}</h3></div>
                      <i className="acc__icon" aria-hidden />
                    </summary>
                    <p>{p.isi}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ASPIRASI — hijau lembut */}
        <section id="aspirasi" className="section sec--green-soft">
          <Decor kind="kelopak" size={220} right="-70px" top="50px" reverse />
          <div className="container aspirasi">
            <div className="aspirasi__intro">
              <Title kicker="Suara Kader" italic="Kirim" rest="Aspirasi" tone="green" />
              <p className="narasi">Gagasan terbaik lahir dari mendengar. Sampaikan harapan, masukan, dan gagasanmu untuk KOHATI. Setiap aspirasi akan kami baca dengan sepenuh hati.</p>
            </div>
            <Reveal className="card aspirasi__card">
              <AspirasiForm />
            </Reveal>
          </div>
        </section>

        {/* DUKUNG DINI — pink */}
        <section id="dukung" className="section sec--pink-soft closing">
          <Decor kind="kotak" size={270} right="-80px" bottom="40px" />
          <Decor kind="kelopak" size={190} left="-70px" top="70px" reverse />
          <div className="container closing__grid">
            <Reveal className="closing__photo">
              <Photo src="/images/dini-penutup.png" alt={`Foto ${profil.namaPendek}`} label="Foto penutup" />
            </Reveal>
            <div className="closing__body">
              <p className="tag tag--pink tag--sm"><em>Dukung</em> Dini</p>
              <h2 className="closing__title"><AnimText parts={dukungan.judul} stagger={60} /></h2>
              <Reveal><p className="closing__text">{dukungan.isi}</p></Reveal>
              <Reveal><p className="closing__tag">{dukungan.tagar}</p></Reveal>
              <div className="closing__who">
                <b>{profil.nama}</b>
                <span>{profil.peran} · {profil.periode}</span>
              </div>
              <div className="closing__cta">
                <a href={`https://instagram.com/${profil.kontak.instagram}`} target="_blank" rel="noreferrer" className="btn btn--pink">Ikuti @{profil.kontak.instagram}</a>
                <a href={`https://instagram.com/${profil.kontak.instagramPribadi}`} target="_blank" rel="noreferrer" className="btn btn--ghost-pink">Ikuti @{profil.kontak.instagramPribadi}</a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
