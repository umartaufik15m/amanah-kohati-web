import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notfound">
      <p className="kicker kicker--pink">404</p>
      <h1>Halaman tidak ditemukan</h1>
      <Link href="/" className="btn btn--pink">Kembali ke Beranda</Link>
    </main>
  );
}
