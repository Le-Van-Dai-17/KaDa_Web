import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "vietnamese"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  // TODO: Replace with the production domain before launch.
  metadataBase: new URL("https://kada-cv.example"),
  title: "KaDa_CV — Phân tích CV và so khớp công việc bằng AI",
  description:
    "KaDa_CV giúp sinh viên và người tìm việc ngành công nghệ phân tích CV, so khớp với JD, xác định kỹ năng còn thiếu và nhận gợi ý cải thiện có căn cứ.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <div className="site-shell">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}