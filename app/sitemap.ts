import type { MetadataRoute } from "next";
import { berita, site } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/berita`, changeFrequency: "weekly", priority: 0.8 },
    ...berita.map((b) => ({ url: `${site.url}/berita/${b.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
