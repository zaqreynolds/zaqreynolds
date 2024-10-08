import Header from "@/app/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import BGParticles from "./components/BGParticles";

const spaceGrotesk = Space_Grotesk({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `Zaq Reynolds's Website`,
  description: "created with next.js, tailwindcss, and typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} text-lightOlive`}>
        <div className="h-screen w-screen flex flex-col overflow-hidden">
          <BGParticles />
          <Header />
          <main className="flex flex-grow overflow-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
