import { get } from "@vercel/blob";
import { ACCESS } from "@/lib/news";

// Menampilkan foto dari Blob store Private ke pengunjung website.
export async function GET(_req: Request, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  const pathname = path.map(decodeURIComponent).join("/");
  if (!pathname.startsWith("foto/")) return new Response("Not found", { status: 404 });
  try {
    const r = await get(pathname, { access: ACCESS });
    if (!r || r.statusCode !== 200 || !r.stream) return new Response("Not found", { status: 404 });
    return new Response(r.stream, {
      headers: {
        "Content-Type": r.blob.contentType || "image/jpeg",
        "Cache-Control": "public, max-age=86400, s-maxage=31536000, immutable",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
