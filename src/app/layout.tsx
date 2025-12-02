import "./globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Sale Test Page",

  description: "我只是一个测试用的页面描述啊啊啊啊啊啊啊",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
