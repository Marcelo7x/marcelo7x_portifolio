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
  keywords: ["Developer", "Portfolio", "Developer", "Portflio", "Marcelo", "Marcelo7x", "Nascimento", "Desenvolvedor", "Fullstack", "Mobile", "Site", "Android", "Ios", "Java", "Kotlin", "Swift", "Dart", "Flutter", "React", "Next", "Node", "Express", "Mongo", "Postgres", "Sql", "Prisma", "Docker", "Aws", "Azure", "Firebase", "Tailwind", "Css", "Html", "Javascript", "Typescript", "Python", "C", "C++", "C#", "Go", "Rust", "Ruby", "Php", "Shell", "Bash", "Powershell", "Linux", "Windows", "Macos", "Web", "Mobile", "Desktop", "Cloud", "Server", "Frontend", "Backend", "Fullstack", "Devops", "Acaiaca", "Viçosa", "MG", "Home", "Office", "Freelancer", "Remote", "Work", "Programmer", "Site", "Computaçao", "Computer", "Science", "Ciencia",],
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
