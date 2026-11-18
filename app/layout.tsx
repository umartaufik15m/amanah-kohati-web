import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "./data";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Amanah KOHATI — untuk Perempuan Indonesia",
  description: site.deskripsi,
  openGraph: {
    title: "Amanah KOHATI — untuk Perempuan Indonesia",
    description: "Tanggung Jawab Besar, Meniti Jalan Muslimah Insan Cita.",
    url: site.url,
    siteName: site.nama,
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 650, alt: "Amanah KOHATI, untuk Perempuan Indonesia" }],
    videos: [{ url: `${site.url}/images/og-image.mp4`, width: 900, height: 488, type: "video/mp4" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#66A854",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Cormorant+Garamond:ital,wght@0,700;1,700&family=Mona+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
