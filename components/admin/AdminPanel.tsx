"use client";

import { useState } from "react";
import type { Berita } from "@/app/data";
import type { Aspirasi } from "@/lib/aspirasi";
import AdminAspirasi from "./AdminAspirasi";

type Form = {
  judul: string;
  kategori: string;
  tanggal: string;
  ringkasan: string;
  isi: string;
  kutipan: string;
  gambar: string;
  slugLama: string;
};

const kosong: Form = { judul: "", kategori: "Berita", tanggal: "", ringkasan: "", isi: "", kutipan: "", gambar: "", slugLama: "" };
/** Perkecil foto di browser (maks. 2000px, JPEG) supaya cepat diunggah dari HP. */
async function perkecil(file: File): Promise<File> {
  if (file.size < 1_200_000 || !file.type.startsWith("image/")) return file;
  const bmp = await createImageBitmap(file).catch(() => null);
  if (!bmp) return file;
  const skala = Math.min(1, 2000 / Math.max(bmp.width, bmp.height));
  const c = document.createElement("canvas");
  c.width = Math.round(bmp.width * skala);
  c.height = Math.round(bmp.height * skala);
  c.getContext("2d")!.drawImage(bmp, 0, 0, c.width, c.height);
  const blob: Blob | null = await new Promise((r) => c.toBlob(r, "image/jpeg", 0.85));
  return blob ? new File([blob], file.name.replace(/\.\w+$/, "") + ".jpg", { type: "image/jpeg" }) : file;
}

const kategoriList = ["Berita", "Pendaftaran", "Deklarasi", "Roadshow", "Kegiatan", "Liputan Media"];

export default function AdminPanel({ awal, blob, aspirasi }: { awal: Berita[]; blob: boolean; aspirasi: Aspirasi[] }) {
  const [list, setList] = useState<Berita[]>(awal);
  const [f, setF] = useState<Form>(kosong);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF((v) => ({ ...v, [k]: e.target.value }));

  const pilihFoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fl = e.target.files?.[0] ?? null;
    setFile(fl);
    setPreview(fl ? URL.createObjectURL(fl) : f.gambar);
  };

  const muatUlang = async () => {
    const r = await fetch("/api/admin/berita");
    if (r.ok) setList((await r.json()).berita);
  };

  const simpan = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      let gambar = f.gambar;
      if (file) {
        setStatus("Mengunggah foto…");
        const kecil = await perkecil(file);
        const fd = new FormData();
        fd.append("foto", kecil);
        const up = await fetch("/api/admin/foto", { method: "POST", body: fd });
        const uj = await up.json().catch(() => ({}));
        if (!up.ok) throw new Error(uj.error || "Gagal mengunggah foto.");
        gambar = uj.url;
      }
      setStatus("Menyimpan berita…");
      const r = await fetch("/api/admin/berita", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, gambar }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "Gagal menyimpan.");
      setStatus(f.slugLama ? "✓ Berita diperbarui. Website ikut berubah dalam beberapa detik." : "✓ Berita terbit! Website ikut berubah dalam beberapa detik.");
      setF(kosong);
      setFile(null);
      setPreview("");
      const inp = document.getElementById("foto-input") as HTMLInputElement | null;
      if (inp) inp.value = "";
      await muatUlang();
    } catch (err) {
      setStatus("✗ " + (err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const edit = (b: Berita) => {
    setF({
      judul: b.judul,
      kategori: b.kategori,
      tanggal: b.tanggal,
      ringkasan: b.ringkasan,
      isi: b.isi.join("\n\n"),
      kutipan: b.kutipan ?? "",
      gambar: b.gambar ?? "",
      slugLama: b.slug,
    });
    setFile(null);
    setPreview(b.gambar ?? "");
    setStatus(`Mengedit: ${b.judul}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const hapus = async (b: Berita) => {
    if (!confirm(`Hapus berita "${b.judul}"? Foto dan isinya akan terhapus permanen.`)) return;
    const r = await fetch(`/api/admin/berita?slug=${encodeURIComponent(b.slug)}`, { method: "DELETE" });
    setStatus(r.ok ? "✓ Berita dihapus." : "✗ Gagal menghapus.");
    await muatUlang();
  };

  const keluar = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    window.location.reload();
  };

  return (
    <main className="admin">
      <header className="admin__top">
        <div>
          <p className="kicker kicker--pink">Ruang Admin</p>
          <h1>Kelola Rilis Berita</h1>
        </div>
        <div className="admin__actions">
          <a href="/" target="_blank" className="btn btn--ghost-pink btn--small">Lihat website ↗</a>
          <button onClick={keluar} className="btn btn--pink btn--small">Keluar</button>
        </div>
      </header>

      {!blob && (
        <p className="admin__warn">
          Penyimpanan belum aktif. Di Vercel buka <b>Storage → Create → Blob</b>, hubungkan ke proyek ini, lalu Redeploy.
        </p>
      )}

      <form className="admin__card admin__form" onSubmit={simpan}>
        <h2>{f.slugLama ? "Edit berita" : "Tulis berita baru"}</h2>

        <label className="admin__photo">
          Foto banner
          <div className="admin__drop">
            {preview ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={preview} alt="Pratinjau foto" />
            ) : (
              <span>Klik untuk memilih foto (JPG/PNG, otomatis diperkecil)</span>
            )}
            <input id="foto-input" type="file" accept="image/jpeg,image/png,image/webp" onChange={pilihFoto} />
          </div>
        </label>

        <label>
          Judul berita *
          <input value={f.judul} onChange={set("judul")} required />
        </label>
        <div className="admin__row">
          <label>
            Kategori
            <select value={f.kategori} onChange={set("kategori")}>
              {kategoriList.map((k) => <option key={k}>{k}</option>)}
            </select>
          </label>
          <label>
            Tanggal
            <input value={f.tanggal} onChange={set("tanggal")} placeholder="contoh: 19 November 2026" />
          </label>
        </div>
        <label>
          Ringkasan (1–2 kalimat, tampil di kartu beranda)
          <textarea rows={2} value={f.ringkasan} onChange={set("ringkasan")} placeholder="Kosongkan untuk memakai awal paragraf pertama" />
        </label>
        <label>
          Narasi berita *
          <textarea rows={12} value={f.isi} onChange={set("isi")} required placeholder={"Paragraf pertama…\n\nParagraf kedua… (pisahkan paragraf dengan satu baris kosong)"} />
        </label>
        <label>
          Kutipan (opsional)
          <input value={f.kutipan} onChange={set("kutipan")} placeholder="Kalimat pernyataan yang mau ditonjolkan" />
        </label>

        <div className="admin__submit">
          <button className="btn btn--pink" disabled={busy || !blob}>
            {busy ? "Memproses…" : f.slugLama ? "Simpan perubahan" : "Terbitkan berita"}
          </button>
          {f.slugLama && (
            <button type="button" className="btn btn--ghost-pink" onClick={() => { setF(kosong); setPreview(""); setStatus(""); }}>
              Batal edit
            </button>
          )}
          {status && <span className="admin__status">{status}</span>}
        </div>
      </form>

      <section className="admin__card">
        <h2>Berita yang sudah diunggah ({list.length})</h2>
        {list.length === 0 && <p className="admin__muted">Belum ada berita dari halaman admin.</p>}
        <ul className="admin__list">
          {list.map((b) => (
            <li key={b.slug}>
              {b.gambar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={b.gambar} alt="" />
              ) : (
                <span className="admin__thumb" />
              )}
              <div>
                <b>{b.judul}</b>
                <small>{b.kategori} · {b.tanggal}</small>
              </div>
              <div className="admin__item-actions">
                <a href={`/berita/${b.slug}`} target="_blank">Lihat</a>
                <button onClick={() => edit(b)}>Edit</button>
                <button onClick={() => hapus(b)} className="danger">Hapus</button>
              </div>
            </li>
          ))}
        </ul>
        <p className="admin__muted">Berita bawaan (yang ditulis di kode) tidak muncul di daftar ini.</p>
      </section>

      <AdminAspirasi awal={aspirasi} />
    </main>
  );
}
