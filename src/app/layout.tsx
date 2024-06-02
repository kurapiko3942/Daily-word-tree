import type { Metadata } from "next";
import { Inter,Cormorant_Garamond } from "next/font/google";
import "./globals.css";
const CormorantGaramondFont = Cormorant_Garamond({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "launch Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={CormorantGaramondFont.className}>{children}</body>
    </html>
  );
}
