import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sáng Đèn — GOE Alliance",
  description: "Chiến dịch truyền thông và thắp sáng cộng đồng về VIFC HCM.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body>{children}</body></html>;
}
