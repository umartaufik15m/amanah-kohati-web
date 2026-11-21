import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { getAspirasi, hapusAspirasi } from "@/lib/aspirasi";

const tolak = () => NextResponse.json({ error: "Tidak diizinkan." }, { status: 401 });

export async function GET() {
  if (!(await isAdmin())) return tolak();
  return NextResponse.json({ aspirasi: await getAspirasi() });
}

export async function DELETE(req: Request) {
  if (!(await isAdmin())) return tolak();
  const id = new URL(req.url).searchParams.get("id") ?? "";
  if (!id) return NextResponse.json({ error: "ID kosong." }, { status: 400 });
  await hapusAspirasi(id);
  return NextResponse.json({ ok: true });
}
