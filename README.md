# Amanah KOHATI — Website Kampanye

Website untuk **Dini Asmiatul Amanah, M.Pd**, Bakal Calon Ketua Umum KOHATI PB HMI Periode 2027–2029.
Dibangun dengan Next.js 15. Semua halaman dirender statis, jadi website cepat dan murah (gratis di Vercel).

## Isi website

| Halaman | Alamat |
|---|---|
| Beranda (cover, rilis berita, profil, rekam jejak, gagasan, program, galeri, dukung Dini) | `/` |
| Semua rilis berita | `/berita` |
| Detail berita | `/berita/pendaftaran`, `/berita/deklarasi`, `/berita/roadshow` |
| SEO otomatis | `/sitemap.xml`, `/robots.txt`, gambar preview link `og-image.jpg` |

## Langkah 1 — Masukkan foto dari Figma

Di Figma, halaman **🌐 Website — Landing Page**, ada section **📦 Export untuk Web**.
Semua layer di dalamnya sudah diberi nama dan pengaturan export yang benar.

1. Klik section itu, pilih semua isinya (Ctrl/Cmd + A di dalam section).
2. Di panel kanan, klik **Export N layers**.
3. Pindahkan semua file hasil export ke folder `public/images/` di proyek ini.

Nama file yang dibutuhkan:

| File | Dipakai di |
|---|---|
| `logo-header.png` | Logo di cover |
| `dini-hero.png` | Foto cover |
| `dini-profil.png` | Foto section Profil |
| `dini-penutup.png` | Foto section Dukung Dini |
| `berita-pendaftaran.jpg`, `berita-deklarasi.jpg`, `berita-roadshow.jpg` | Banner rilis berita |
| `galeri-01.jpg` … `galeri-12.jpg` | Galeri Perjalanan |
| `hiasan-kotak.png`, `hiasan-kelopak.png` | Hiasan latar yang berputar |
| `og-image.jpg` | Gambar saat link dibagikan di WhatsApp/IG |

Selama foto belum ada, website tetap jalan: foto diganti bingkai berisi nama file, dan hiasan disembunyikan.

## Langkah 2 — Coba di komputer (opsional)

Butuh [Node.js 20+](https://nodejs.org).

```bash
npm install
npm run dev     # buka http://localhost:3000
```

## Langkah 3 — Online-kan (deploy) gratis di Vercel

1. Buat akun di [github.com](https://github.com), buat repository baru, lalu upload seluruh isi folder ini (tanpa `node_modules` dan `.next`).
2. Masuk ke [vercel.com](https://vercel.com) dengan akun GitHub → **Add New → Project** → pilih repository tadi → **Deploy**. Tidak perlu pengaturan tambahan.
3. Setelah jadi, website langsung punya alamat `nama-proyek.vercel.app`.
4. **Domain sendiri** (misalnya `amanahkohati.id`): beli domain di registrar mana pun, lalu di Vercel buka **Project → Settings → Domains → Add**, ikuti petunjuk DNS-nya.
5. Di Vercel **Settings → Environment Variables**, tambahkan `NEXT_PUBLIC_SITE_URL` = alamat website (contoh `https://amanahkohati.id`), lalu **Redeploy**. Ini supaya preview link dan sitemap memakai alamat yang benar.

Setiap kali file di GitHub diubah, Vercel otomatis memperbarui website.

## Mengubah isi

Semua teks ada di **satu file**: `app/data.ts`.

- **Menambah rilis berita baru:** tambah satu objek di daftar `berita` (isi `slug`, `judul`, `ringkasan`, `tanggal`, `isi`), lalu taruh banner `public/images/berita-<slug>.jpg`. Halaman detailnya dibuat otomatis.
- **Tanggal dan isi berita** saat ini masih placeholder `[Tanggal rilis]` dan `[Paragraf …]`, jangan lupa diganti sebelum publikasi.
- **Jumlah foto galeri:** ubah `jumlahGaleri`.
- **Kontak & pesan WhatsApp:** ada di `profil.kontak`.

## Warna (dari variabel Figma)

- Hijau `#66A854` / ijo gelap `#5FB25D` / botol `#A0C03E` → hal yang berkaitan dengan HMI/KOHATI
- Soft blue `#7FC2EC` → info pribadi
- Soft pink `#F0C2D2` + ungu `#C2577D` → gagasan & ajakan

Font: Bricolage Grotesque, Cormorant Garamond, Mona Sans (dimuat dari Google Fonts).
