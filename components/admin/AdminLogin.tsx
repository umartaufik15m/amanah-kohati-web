"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setErr("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw }),
    });
    setBusy(false);
    if (res.ok) window.location.reload();
    else setErr((await res.json().catch(() => ({}))).error || "Gagal masuk.");
  };

  return (
    <main className="admin admin--login">
      <form className="admin__card admin__login" onSubmit={submit}>
        <p className="kicker kicker--pink">Ruang Admin</p>
        <h1>Amanah KOHATI</h1>
        <label>
          Password
          <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} autoFocus autoComplete="current-password" required />
        </label>
        {err && <p className="admin__err">{err}</p>}
        <button className="btn btn--pink" disabled={busy}>{busy ? "Memeriksa…" : "Masuk"}</button>
      </form>
    </main>
  );
}
