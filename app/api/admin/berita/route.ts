import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAdmin } from "@/lib/auth";
import { blobAktif, getBeritaAdmin, hapusBerita, simpanBerita, slugify } from "@/lib/news";
import type { Berita } from "@/app/data";

function segarkan(slug?: string) {
  revalidatePath("/");
  revalidatePath("/berita");
  revalidatePath("/sitemap.xml");
  if (slug) revalidatePath(`/berita/${slug}`);
}

const tolak = () => NextResponse.json({ error: "Tidak diizinkan." }, { status: 401 });

export async function GET() {
  if (!(await isAdmin())) return tolak();
  return NextResponse.json({ berita: await getBeritaAdmin(), blob: blobAktif() });
}

type Input = {
  judul?: string;
  kategori?: string;
  tanggal?: string;
  ringkasan?: string;
  isi?: string;
  kutipan?: string;
  gambar?: string;
  slugLama?: string;
};

export async function POST(req: Request) {
  if (!(await isAdmin())) return tolak();
  if (!blobAktif()) {
    return NextResponse.json({ error: "Penyimpanan Vercel Blob belum dihubungkan." }, { status: 500 });
  }
  const d = (await req.json()) as Input;
  const judul = d.judul?.trim();
  const isi = (d.isi ?? "")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (!judul || isi.length === 0) {
    return NextResponse.json({ error: "Judul dan isi berita wajib diisi." }, { status: 400 });
  }

  const slug = d.slugLama || `${slugify(judul)}-${Date.now().toString(36).slice(-4)}`;
  const kategori = d.kategori?.trim() || "Berita";
  const b: Berita = {
    slug,
    kategori,
    bannerJudul: kategori,
    bannerSub: "",
    judul,
    ringkasan: d.ringkasan?.trim() || isi[0].slice(0, 180),
    tanggal: d.tanggal?.trim() || new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
    isi,
    kutipan: d.kutipan?.trim() || undefined,
    gambar: d.gambar || undefined,
    dibuat: new Date().toISOString(),
  };

  // saat mengedit, pertahankan waktu dibuat yang lama
  if (d.slugLama) {
    const lama = (await getBeritaAdmin()).find((x) => x.slug === d.slugLama);
    if (lama?.dibuat) b.dibuat = lama.dibuat;
  }

  await simpanBerita(b);
  segarkan(slug);
  return NextResponse.json({ ok: true, slug });
}

export async function DELETE(req: Request) {
  if (!(await isAdmin())) return tolak();
  const slug = new URL(req.url).searchParams.get("slug");
  if (!slug) return NextResponse.json({ error: "slug kosong" }, { status: 400 });
  await hapusBerita(slug);
  segarkan(slug);
  return NextResponse.json({ ok: true });
}
