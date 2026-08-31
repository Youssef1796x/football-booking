import type { Metadata } from "next";
import "@fontsource-variable/cairo/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "ملعب النور | مدينة نصر",
  description: "جاهز للماتش؟ شوف المواعيد المتاحة واختار الوقت اللي يناسبك.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0A0A0A]">{children}</body>
    </html>
  );
}
