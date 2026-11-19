import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { blobAktif, simpanFoto } from "@/lib/news";

export async function POST(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Tidak diizinkan." }, { status: 401 });
  if (!blobAktif()) return NextResponse.json({ error: "Penyimpanan Vercel Blob belum dihubungkan." }, { status: 500 });
  const form = await req.formData();
  const file = form.get("foto");
  if (!(file instanceof File) || !file.type.startsWith("image/")) {
    return NextResponse.json({ error: "File foto tidak valid." }, { status: 400 });
  }
  try {
    return NextResponse.json({ url: await simpanFoto(file) });
  } catch (e) {
    return NextResponse.json({ error: "Gagal mengunggah foto: " + (e as Error).message }, { status: 500 });
  }
}
