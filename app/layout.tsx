import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfitf = Outfit({
  subsets: ["latin"],weight:["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],weight:["400"]
});

export const metadata: Metadata = {
  title: "portfolio - Land",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitf.className} ${ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
