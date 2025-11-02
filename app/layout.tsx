import type { Metadata } from "next";
import { playfair } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farkhan Nindyarayhan",
  description: "Personal Portfolio - Newspaper UI Themed",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.className}>
      <body className="bg-[#faf7f2] text-gray-900 paper-grain">{children}</body>
    </html>
  );
}
