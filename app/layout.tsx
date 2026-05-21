import type { Metadata } from "next";
import { montserrat } from "./fonts";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.video-alfa.hr'),
  title: {
    default: 'Video Alfa | Fotografiranje i snimanje vjenčanja',
    template: '%s | Alfa Vjenčanja',
  },
  description:
    'Profesionalna fotografija i video snimanje vjenčanja. Više od 25 godina iskustva.',
  keywords: [
    'fotograf vjenčanja Slavonija',
    'fotograf vjenčanja Zagreb',
    'fotografija vjenčanja Hrvatska',
    'snimanje vjenčanja Slavonija',
    'fotograf vjenčanja Osijek',
    'fotograf vjenčanja Virovitica',
    'fotograf vjenčanja Slatina',
    'video snimanje vjenčanja',
    'Alfa Vjenčanja',
    'wedding photographer Croatia',
    'fotografiranje',
    'videosnimanje',
    'fotografiranje vjenčanja',
    'snimanje vjenčanja',
  ],
  authors: [{ name: 'Video Alfa', url: 'https://www.video-alfa.hr' }],
  creator: 'Video Alfa',
  publisher: 'Video Alfa',
  openGraph: {
    type: 'website',
    locale: 'hr_HR',
    url: 'https://www.video-alfa.hr',
    siteName: 'Video Alfa',
    title: 'Video Alfa | Fotografiranje i snimanje vjenčanja',
    description:
      'Profesionalna fotografija i video snimanje vjenčanja. Više od 25 godina iskustva. Rezervirajte vaš datum.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Video Alfa | Fotografiranje i snimanje vjenčanja',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Alfa | Fotografiranje i snimanje vjenčanja',
    description:
      'Profesionalna fotografija i video snimanje vjenčanja. Više od 25 godina iskustva.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.video-alfa.hr',
    languages: {
      'hr-HR': 'https://www.video-alfa.hr',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body className={`${montserrat.className} antialiased`}>
        <LocalBusinessSchema />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
