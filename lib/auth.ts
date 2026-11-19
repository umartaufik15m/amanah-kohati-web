import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

// Password admin diambil dari Environment Variable ADMIN_PASSWORD di Vercel,
// jadi tidak pernah tersimpan di GitHub.
export const COOKIE = "amanah_admin";
const MAX_AGE = 60 * 60 * 12; // 12 jam

function secret() {
  return process.env.ADMIN_PASSWORD || "";
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

export function passwordOk(input: string) {
  const real = secret();
  if (!real) return false;
  const a = Buffer.from(sign(input));
  const b = Buffer.from(sign(real));
  return a.length === b.length && timingSafeEqual(a, b);
}

export function makeToken() {
  const exp = String(Date.now() + MAX_AGE * 1000);
  return `${exp}.${sign(exp)}`;
}

export function tokenOk(token?: string) {
  if (!token || !secret()) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  const a = Buffer.from(sig);
  const b = Buffer.from(sign(exp));
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function isAdmin() {
  const store = await cookies();
  return tokenOk(store.get(COOKIE)?.value);
}

export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
  maxAge: MAX_AGE,
};
