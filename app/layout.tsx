import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"], display: "swap" });

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
      <body className={`${roboto.className} text-defaultText`}>
        <div
          className={`min-h-screen min-w-screen flex flex-col overflow-hidden bg-black`}
        >
          <div className="flex-grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
