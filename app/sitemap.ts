import type { MetadataRoute } from "next";
import { beritaInternal, site } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/berita`, changeFrequency: "weekly", priority: 0.8 },
    ...beritaInternal().map((b) => ({ url: `${site.url}/berita/${b.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
