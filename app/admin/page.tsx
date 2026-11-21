import type { Metadata } from "next";
import { isAdmin } from "@/lib/auth";
import { blobAktif, getBeritaAdmin } from "@/lib/news";
import { getAspirasi } from "@/lib/aspirasi";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminPanel from "@/components/admin/AdminPanel";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Admin — Amanah KOHATI",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  if (!(await isAdmin())) return <AdminLogin />;
  const [berita, aspirasi] = await Promise.all([getBeritaAdmin(), getAspirasi()]);
  return <AdminPanel awal={berita} blob={blobAktif()} aspirasi={aspirasi} />;
}
