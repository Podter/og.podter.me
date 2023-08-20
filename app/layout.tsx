import "./globals.css";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "og.podter.me",
  description: "OpenGraph image generator",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
