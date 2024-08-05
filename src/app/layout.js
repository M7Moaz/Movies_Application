import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "سيري بيست | جميع الأفلام",
  description:
    "اكتشف أحدث الأفلام والمسلسلات مع سيري بيست. تصفح مراجعات الأفلام، تقييمات المستخدمين، وإصدارات الأفلام الجديدة. استمتع بأفضل تجربة مشاهدة مع أحدث الأخبار والترشيحات.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
