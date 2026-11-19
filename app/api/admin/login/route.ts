import { NextResponse } from "next/server";
import { COOKIE, cookieOptions, makeToken, passwordOk } from "@/lib/auth";

export async function POST(req: Request) {
  const { password } = (await req.json().catch(() => ({}))) as { password?: string };
  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "ADMIN_PASSWORD belum diatur di Vercel." }, { status: 500 });
  }
  if (!password || !passwordOk(password)) {
    await new Promise((r) => setTimeout(r, 800)); // memperlambat tebak-tebakan
    return NextResponse.json({ error: "Password salah." }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, makeToken(), cookieOptions);
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, "", { ...cookieOptions, maxAge: 0 });
  return res;
}
