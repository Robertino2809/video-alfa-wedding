import type { Metadata } from "next";
import { montserrat } from "./fonts";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alfa Vjenčanja",
  description: "Profesionalna fotografija vjenčanja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
