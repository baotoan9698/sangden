import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-sans",
  display: "swap",
});

const title = "Chiến dịch Sáng Đèn - VIFC HCM";
const description = "Chiến dịch truyền thông và thắp sáng cộng đồng VIFC HCM.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Chiến dịch Sáng Đèn",
    "VIFC HCM",
    "Trung tâm Tài chính Quốc tế Việt Nam",
    "cộng đồng VIFC",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: "Chiến dịch Sáng Đèn",
    title,
    description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Chiến dịch Sáng Đèn - VIFC HCM kết nối Việt Nam với thế giới",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preload" href="/hero-video.mp4" as="video" type="video/mp4" />
      </head>
      <body className={notoSans.variable}>{children}</body>
    </html>
  );
}
