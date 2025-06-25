// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed-Samer | مطور ويب خبير وباني أنظمة",
  description: "بورتفوليو يعرض خبرتي في بناء تطبيقات ويب متقدمة قابلة للتوسع، متخصص في منصات التجارة الإلكترونية والحلول المخصصة.",
  
  // ---  هنا الحل ---
  // بنعرف مسار الأيقونات بشكل صريح
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png', // أيقونة لأجهزة أبل
  },

  //  لتحسين شكل اللينك عند مشاركته على السوشيال ميديا Open Graph Tags
  openGraph: {
    title: "Ahmed-Samer-Kamal | مطور ويب خبير",
    description: "ألق نظرة على أعمالي وخبرتي في تطوير الويب.",
    url: 'https://portfolio-pro-1.vercel.app/', // لما ترفع الموقع، حط الرابط هنا
    siteName: 'portfolio-pro',
    images: [
      {
        url: '/og-image.png',
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
        <Footer />
      </body>
    </html>
  );
}