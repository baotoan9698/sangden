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

export const metadata: Metadata = {
  title: "Sáng Đèn — GOE Alliance",
  description: "Chiến dịch truyền thông và thắp sáng cộng đồng về VIFC HCM.",
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
