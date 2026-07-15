import type { Metadata } from "next";
import { Dosis, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dosis = Dosis({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dosis",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sáng Đèn — GOE Alliance",
  description: "Chiến dịch truyền thông và thắp sáng cộng đồng về VIFC HCM.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body className={`${dosis.variable} ${instrumentSerif.variable}`}>{children}</body></html>;
}
