import { del, get, list, put } from "@vercel/blob";
import { ACCESS, blobAktif } from "@/lib/news";

// Aspirasi kader disimpan di Vercel Blob: aspirasi/<waktu>-<acak>.json
const PREFIX = "aspirasi/";

export type Aspirasi = {
  id: string;
  nama: string;
  cabang: string;
  pesan: string;
  dibuat: string; // ISO
};

export async function simpanAspirasi(a: Omit<Aspirasi, "id" | "dibuat">) {
  const dibuat = new Date().toISOString();
  const id = `${dibuat.replace(/[:.]/g, "-")}-${Math.random().toString(36).slice(2, 8)}`;
  const data: Aspirasi = { id, dibuat, ...a };
  await put(`${PREFIX}${id}.json`, JSON.stringify(data), {
    access: ACCESS,
    contentType: "application/json",
    addRandomSuffix: false,
  });
  return data;
}

export async function getAspirasi(): Promise<Aspirasi[]> {
  if (!blobAktif()) return [];
  try {
    const out: Aspirasi[] = [];
    let cursor: string | undefined;
    do {
      const r = await list({ prefix: PREFIX, cursor });
      const items = await Promise.all(
        r.blobs
          .filter((b) => b.pathname.endsWith(".json"))
          .map(async (b) => {
            const g = await get(b.pathname, { access: ACCESS, useCache: false }).catch(() => null);
            if (!g || g.statusCode !== 200 || !g.stream) return null;
            return JSON.parse(await new Response(g.stream).text()) as Aspirasi;
          })
      );
      out.push(...items.filter((x): x is Aspirasi => Boolean(x)));
      cursor = r.hasMore ? r.cursor : undefined;
    } while (cursor);
    return out.sort((a, b) => b.dibuat.localeCompare(a.dibuat));
  } catch (e) {
    console.error("Gagal membaca aspirasi", e);
    return [];
  }
}

export async function hapusAspirasi(id: string) {
  if (!/^[\w-]+$/.test(id)) return;
  await del(`${PREFIX}${id}.json`);
}
