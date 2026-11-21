import { NextResponse } from "next/server";
import { blobAktif } from "@/lib/news";
import { simpanAspirasi } from "@/lib/aspirasi";

// Batas sederhana: maks. 5 kiriman per 10 menit per alamat IP (per instance server).
const jejak = new Map<string, number[]>();
function terlaluSering(ip: string) {
  const now = Date.now();
  const arr = (jejak.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  arr.push(now);
  jejak.set(ip, arr);
  return arr.length > 5;
}

const bersih = (v: unknown, max: number) =>
  String(v ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .trim()
    .slice(0, max);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Data tidak terbaca." }, { status: 400 });
  }

  // Kolom jebakan untuk bot: manusia tidak mengisinya.
  if (body.website) return NextResponse.json({ ok: true });

  const nama = bersih(body.nama, 80);
  const cabang = bersih(body.cabang, 100);
  const pesan = bersih(body.pesan, 2000);
  if (!nama || !cabang || pesan.length < 5) {
    return NextResponse.json({ error: "Nama, asal cabang, dan pesan wajib diisi." }, { status: 400 });
  }

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "anon";
  if (terlaluSering(ip)) {
    return NextResponse.json({ error: "Terlalu banyak kiriman. Coba lagi beberapa menit lagi." }, { status: 429 });
  }

  if (!blobAktif()) {
    return NextResponse.json({ error: "Penyimpanan belum aktif. Coba lagi nanti." }, { status: 503 });
  }

  try {
    await simpanAspirasi({ nama, cabang, pesan });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Gagal menyimpan aspirasi", e);
    return NextResponse.json({ error: "Gagal mengirim. Coba lagi." }, { status: 500 });
  }
}
