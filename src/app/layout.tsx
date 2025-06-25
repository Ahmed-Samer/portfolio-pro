// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // 1. استدعاء الفوتر

const inter = Inter({ subsets: ["latin"] });

// src/app/layout.tsx

export const metadata: Metadata = {
  title: "أحمد سمير كمال | مطور ويب خبير وباني أنظمة",
  description: "بورتفوليو يعرض خبرتي في بناء تطبيقات ويب متقدمة قابلة للتوسع، متخصص في منصات التجارة الإلكترونية والحلول المخصصة.",
  //  لتحسين شكل اللينك عند مشاركته على السوشيال ميديا Open Graph Tags
  openGraph: {
    title: "أحمد سمير كمال | مطور ويب خبير",
    description: "ألق نظرة على أعمالي وخبرتي في تطوير الويب.",
    url: 'https://your-domain.com', // لما ترفع الموقع، حط الرابط هنا
    siteName: 'AhmedSamerPortfolio',
    images: [
      {
        url: '/og-image.png', // هنشرح دي تحت
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.className} bg-gray-900 text-white flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer /> {/* 2. وضع الفوتر هنا ليظهر في كل الصفحات */}
      </body>
    </html>
  );
}