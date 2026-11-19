import { del, list, put } from "@vercel/blob";
import { berita as beritaStatis, type Berita } from "@/app/data";

// Berita yang diunggah lewat /admin disimpan di Vercel Blob sebagai
// file JSON per berita (folder "berita/"), fotonya di folder "foto/".
const PREFIX = "berita/";

export function blobAktif() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

export async function getBeritaAdmin(): Promise<Berita[]> {
  if (!blobAktif()) return [];
  try {
    const { blobs } = await list({ prefix: PREFIX });
    const items = await Promise.all(
      blobs
        .filter((b) => b.pathname.endsWith(".json"))
        .map(async (b) => {
          const res = await fetch(b.url, { cache: "no-store" });
          return res.ok ? ((await res.json()) as Berita) : null;
        })
    );
    return items
      .filter((x): x is Berita => Boolean(x))
      .sort((a, b) => (b.dibuat ?? "").localeCompare(a.dibuat ?? ""));
  } catch (e) {
    console.error("Gagal membaca berita dari Blob", e);
    return [];
  }
}

/** Semua berita: unggahan admin (terbaru di atas), lalu berita bawaan di data.ts. */
export async function getSemuaBerita(): Promise<Berita[]> {
  const admin = await getBeritaAdmin();
  const slugs = new Set(admin.map((b) => b.slug));
  return [...admin, ...beritaStatis.filter((b) => !slugs.has(b.slug))];
}

export function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export async function simpanBerita(b: Berita) {
  await put(`${PREFIX}${b.slug}.json`, JSON.stringify(b), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 60,
  });
}

export async function hapusBerita(slug: string) {
  const semua = await getBeritaAdmin();
  const b = semua.find((x) => x.slug === slug);
  const { blobs } = await list({ prefix: `${PREFIX}${slug}.json` });
  const urls = blobs.map((x) => x.url);
  if (b?.gambar && b.gambar.includes(".blob.vercel-storage.com")) urls.push(b.gambar);
  if (urls.length) await del(urls);
}

/** Alamat gambar banner sebuah berita. */
export function bannerSrc(b: Berita) {
  return b.gambar ?? `/images/${b.banner ?? `berita-${b.slug}.jpg`}`;
}
