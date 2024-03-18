import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://marcelo7x.dev"
  ),
  title: "Marcelo7x",
  description: "Developer Portfolio By Marcelo7x",
  keywords: ["Developer", "Portfolio", "Developer Portflio", "Marcelo, Marcelo7x, Marcelo Nascimento"],
  openGraph: {
    title: "Marcelo7x",
    description: "Developer fullstack portfolio by Marcelo7x",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
