"use client";

import { useState } from "react";

type Misi = { no: string; judul: string; isi: string };

/** Menampilkan misi satu per satu: klik untuk membuka misi berikutnya. */
export default function MisiStepper({ misi }: { misi: Misi[] }) {
  const [n, setN] = useState(1);
  const habis = n >= misi.length;

  return (
    <div className="misi-steps">
      {misi.slice(0, n).map((m, i) => (
        <article key={m.no} className={`misi misi--row misi--${i + 1} misi--pop`}>
          <span className="num">{m.no}</span>
          <div>
            <h3>{m.judul}</h3>
            <p>{m.isi}</p>
          </div>
        </article>
      ))}
      <button
        type="button"
        className="misi-steps__btn"
        onClick={() => setN(habis ? 1 : n + 1)}
        aria-expanded={habis}
      >
        {habis ? (
          <>Tutup kembali <span aria-hidden>↑</span></>
        ) : (
          <>
            Buka misi berikutnya <b>{misi[n].no}</b> dari {String(misi.length).padStart(2, "0")} <span aria-hidden>↓</span>
          </>
        )}
      </button>
    </div>
  );
}
