import type { Metadata } from "next";
import { Barlow_Condensed, Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", display: "swap" });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["800"], variable: "--font-barlow", display: "swap" });

export const metadata: Metadata = {
  title: "Stackpointer Labs | Intelligent IT Services",
  description: "AI chatbots, full-stack web applications, APIs, and integrations for ambitious businesses.",
  metadataBase: new URL("https://nebulax-solutions.vercel.app")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${barlow.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
