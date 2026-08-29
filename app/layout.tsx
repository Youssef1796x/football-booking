import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const arabicFont = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ملعب النور | مدينة نصر",
  description: "ملعبك المفضل في قلب مدينة نصر. نجيل طبيعي وإضاءة احترافية عشان تلعب كورتك بمزاج.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className={`${arabicFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0A0A0A]">{children}</body>
    </html>
  );
}
