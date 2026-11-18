import { profil } from "@/app/data";

export default function Footer() {
  const t = Array.from({ length: 6 }, () => "AMANAH KOHATI  ·  UNTUK PEREMPUAN INDONESIA  ·  ").join("");
  return (
    <footer className="footer">
      <div className="marquee marquee--pink" aria-hidden>
        <div className="marquee__track">
          <span>{t}</span>
          <span>{t}</span>
        </div>
      </div>
      <div className="container footer__inner">
        <span>
          Amanah <b>KOHATI</b> · untuk Perempuan Indonesia
        </span>
        <a href={`https://instagram.com/${profil.kontak.instagram}`} target="_blank" rel="noreferrer">
          @{profil.kontak.instagram}
        </a>
      </div>
    </footer>
  );
}
