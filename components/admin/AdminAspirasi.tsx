"use client";

import { useState } from "react";
import type { Aspirasi } from "@/lib/aspirasi";

const waktu = (iso: string) =>
  new Date(iso).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Jakarta" });

/** Daftar aspirasi kader di halaman admin. */
export default function AdminAspirasi({ awal }: { awal: Aspirasi[] }) {
  const [list, setList] = useState(awal);
  const [cari, setCari] = useState("");
  const [busy, setBusy] = useState(false);

  async function muatUlang() {
    setBusy(true);
    const r = await fetch("/api/admin/aspirasi", { cache: "no-store" });
    if (r.ok) setList((await r.json()).aspirasi);
    setBusy(false);
  }

  async function hapus(a: Aspirasi) {
    if (!confirm(`Hapus aspirasi dari ${a.nama}? Tindakan ini tidak bisa dibatalkan.`)) return;
    const r = await fetch(`/api/admin/aspirasi?id=${encodeURIComponent(a.id)}`, { method: "DELETE" });
    if (r.ok) setList((l) => l.filter((x) => x.id !== a.id));
  }

  function unduhCsv() {
    const esc = (s: string) => `"${s.replace(/"/g, '""')}"`;
    const rows = [["Waktu", "Nama", "Asal Cabang", "Pesan"], ...list.map((a) => [waktu(a.dibuat), a.nama, a.cabang, a.pesan])];
    const csv = "﻿" + rows.map((r) => r.map(esc).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const el = document.createElement("a");
    el.href = url;
    el.download = `aspirasi-amanah-kohati-${new Date().toISOString().slice(0, 10)}.csv`;
    el.click();
    URL.revokeObjectURL(url);
  }

  const q = cari.toLowerCase();
  const tampil = q ? list.filter((a) => `${a.nama} ${a.cabang} ${a.pesan}`.toLowerCase().includes(q)) : list;

  return (
    <section className="admin__card" id="aspirasi">
      <div className="admin__head">
        <h2>Aspirasi Kader ({list.length})</h2>
        <div className="admin__item-actions">
          <button onClick={muatUlang} disabled={busy}>{busy ? "Memuat…" : "Muat ulang"}</button>
          <button onClick={unduhCsv} disabled={!list.length}>Unduh CSV</button>
        </div>
      </div>
      {list.length > 0 && (
        <input className="admin__search" placeholder="Cari nama, cabang, atau isi pesan…" value={cari} onChange={(e) => setCari(e.target.value)} />
      )}
      {list.length === 0 && <p className="admin__muted">Belum ada aspirasi yang masuk.</p>}
      <ul className="asp-list">
        {tampil.map((a) => (
          <li key={a.id}>
            <div className="asp-list__meta">
              <b>{a.nama}</b>
              <span>{a.cabang}</span>
              <small>{waktu(a.dibuat)}</small>
            </div>
            <p>{a.pesan}</p>
            <div className="admin__item-actions">
              <button onClick={() => hapus(a)} className="danger">Hapus</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
