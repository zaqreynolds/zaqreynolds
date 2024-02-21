import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Alegreya_Sans, Space_Grotesk } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"], display: "swap" });
const alegreyaSans = Alegreya_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
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
      <body className={`${spaceGrotesk.className} text-defaultText`}>
        <div className="min-h-screen min-w-screen flex flex-col overflow-hidden bg-black">
          <div className="flex-grow pattern-wavy pattern-gray-900 pattern-bg-darkOlive pattern-opacity-100 bg-opacity-25 pattern-size-5 ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
