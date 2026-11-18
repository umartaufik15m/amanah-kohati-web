"use client";

import { useEffect, useState } from "react";
import FallbackImg from "@/components/FallbackImg";

const links = [
  { href: "/#berita", label: "Berita" },
  { href: "/#profil", label: "Profil" },
  { href: "/#rekam-jejak", label: "Rekam Jejak" },
  { href: "/#kaderisasi", label: "Kaderisasi" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav__inner container">
        <a href="/#top" className="nav__brand" onClick={() => setOpen(false)}>
          <FallbackImg
            srcs={["/images/Logo Amanah White.png", "/images/logo-amanah-white.png", "/images/Logo Amanah White.svg"]}
            alt="Amanah KOHATI"
            className="nav__logo"
            fallback={
              <span>
                <span className="nav__mark" aria-hidden>✦ </span>Amanah <b>KOHATI</b>
              </span>
            }
          />
        </a>
        <nav className="nav__links" aria-label="Navigasi utama">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={`https://instagram.com/amanahkohati`} target="_blank" rel="noreferrer" className="btn btn--small" onClick={() => setOpen(false)}>
            @amanahkohati
          </a>
        </nav>
        <button
          className="nav__toggle"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
