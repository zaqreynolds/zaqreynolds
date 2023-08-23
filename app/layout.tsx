import "./globals.css";
import type { Metadata } from "next";
import { Cinzel } from "next/font/google";

const bodoni = Cinzel({ weight: "400", subsets: ["latin"] });

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
      <body className={bodoni.className}>
        <div
          className={`min-h-screen min-w-screen flex flex-col overflow-hidden`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
