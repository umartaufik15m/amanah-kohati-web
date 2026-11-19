import { del, get, list, put } from "@vercel/blob";
import { berita as beritaStatis, type Berita } from "@/app/data";

// Berita yang diunggah lewat /admin disimpan di Vercel Blob:
// - berita/<slug>.json  → isi berita
// - foto/...            → foto banner
// Store bertipe Private (default) atau Public (set BLOB_ACCESS=public).
const PREFIX = "berita/";
export const ACCESS: "public" | "private" = process.env.BLOB_ACCESS === "public" ? "public" : "private";

export function blobAktif() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID);
}

async function bacaJson(pathname: string): Promise<Berita | null> {
  const r = await get(pathname, { access: ACCESS, useCache: false });
  if (!r || r.statusCode !== 200 || !r.stream) return null;
  return JSON.parse(await new Response(r.stream).text()) as Berita;
}

export async function getBeritaAdmin(): Promise<Berita[]> {
  if (!blobAktif()) return [];
  try {
    const { blobs } = await list({ prefix: PREFIX });
    const items = await Promise.all(
      blobs.filter((b) => b.pathname.endsWith(".json")).map((b) => bacaJson(b.pathname).catch(() => null))
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
    access: ACCESS,
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

/** Simpan foto; mengembalikan alamat yang bisa dipakai di <img>. */
export async function simpanFoto(file: File) {
  const ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
  const r = await put(`foto/berita.${ext}`, file, {
    access: ACCESS,
    contentType: file.type || "image/jpeg",
    addRandomSuffix: true,
  });
  return ACCESS === "public" ? r.url : `/api/foto/${r.pathname}`;
}

export async function hapusBerita(slug: string) {
  const b = (await getBeritaAdmin()).find((x) => x.slug === slug);
  const target: string[] = [`${PREFIX}${slug}.json`];
  if (b?.gambar?.startsWith("/api/foto/")) target.push(b.gambar.replace("/api/foto/", ""));
  else if (b?.gambar?.includes(".blob.vercel-storage.com")) target.push(b.gambar);
  await del(target);
}

/** Alamat gambar banner sebuah berita. */
export function bannerSrc(b: Berita) {
  return b.gambar ?? `/images/${b.banner ?? `berita-${b.slug}.jpg`}`;
}
