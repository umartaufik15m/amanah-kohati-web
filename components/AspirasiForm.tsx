"use client";

import { useState } from "react";

/** Formulir kirim aspirasi kader. */
export default function AspirasiForm() {
  const [nama, setNama] = useState("");
  const [cabang, setCabang] = useState("");
  const [pesan, setPesan] = useState("");
  const [website, setWebsite] = useState(""); // jebakan bot
  const [status, setStatus] = useState<"" | "kirim" | "ok" | "gagal">("");
  const [err, setErr] = useState("");

  async function kirim(e: React.FormEvent) {
    e.preventDefault();
    setStatus("kirim");
    setErr("");
    try {
      const r = await fetch("/api/aspirasi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama, cabang, pesan, website }),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || "Gagal mengirim.");
      setStatus("ok");
      setNama("");
      setCabang("");
      setPesan("");
    } catch (e: any) {
      setStatus("gagal");
      setErr(e.message || "Gagal mengirim.");
    }
  }

  if (status === "ok") {
    return (
      <div className="aspirasi__ok" role="status">
        <b>Terima kasih, aspirasimu sudah kami terima. 🤍</b>
        <p>Setiap suara kader akan kami baca dan menjadi bahan untuk menyempurnakan gagasan Amanah KOHATI.</p>
        <button type="button" className="btn btn--ghost-pink" onClick={() => setStatus("")}>Kirim aspirasi lain</button>
      </div>
    );
  }

  return (
    <form className="aspirasi__form" onSubmit={kirim}>
      <div className="aspirasi__row">
        <label>
          Nama
          <input value={nama} onChange={(e) => setNama(e.target.value)} required maxLength={80} placeholder="Nama lengkap" autoComplete="name" />
        </label>
        <label>
          Asal Cabang
          <input value={cabang} onChange={(e) => setCabang(e.target.value)} required maxLength={100} placeholder="Contoh: HMI Cabang Bandung" />
        </label>
      </div>
      <label>
        Pesan / Aspirasi
        <textarea value={pesan} onChange={(e) => setPesan(e.target.value)} required minLength={5} maxLength={2000} rows={5} placeholder="Tuliskan harapan, masukan, atau gagasanmu untuk KOHATI…" />
        <small>{pesan.length}/2000</small>
      </label>
      <input className="aspirasi__hp" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} aria-hidden="true" name="website" />
      <div className="aspirasi__submit">
        <button className="btn btn--pink" disabled={status === "kirim"}>
          {status === "kirim" ? "Mengirim…" : "Kirim Aspirasi"}
        </button>
        {status === "gagal" && <span className="aspirasi__err">{err}</span>}
      </div>
    </form>
  );
}
