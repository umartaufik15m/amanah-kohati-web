import type { MetadataRoute } from "next";
import { site } from "./data";
import { getSemuaBerita } from "@/lib/news";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const berita = (await getSemuaBerita()).filter((b) => !b.url);
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/berita`, changeFrequency: "weekly", priority: 0.8 },
    ...berita.map((b) => ({ url: `${site.url}/berita/${b.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
