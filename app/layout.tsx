import type { Metadata } from "next";
import { montserrat } from "./fonts";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.video-alfa.hr'),
  title: {
    default: 'Alfa Vjenčanja | Fotograf i Video Vjenčanja – Slavonija i Zagreb',
    template: '%s | Alfa Vjenčanja',
  },
  description:
    'Profesionalna fotografija i video snimanje vjenčanja u Slavoniji, Zagrebu i okolici. Više od 10 godina iskustva. Putujemo po cijeloj regiji. Paketi od 6 do cjelodnevnog snimanja.',
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
  ],
  authors: [{ name: 'Alfa Vjenčanja', url: 'https://www.video-alfa.hr' }],
  creator: 'Alfa Vjenčanja',
  publisher: 'Alfa Vjenčanja',
  openGraph: {
    type: 'website',
    locale: 'hr_HR',
    url: 'https://www.video-alfa.hr',
    siteName: 'Alfa Vjenčanja',
    title: 'Alfa Vjenčanja | Fotograf Vjenčanja – Slavonija i Zagreb',
    description:
      'Profesionalna fotografija i video snimanje vjenčanja. Slavonija, Zagreb, cijela regija. Rezervirajte vaš datum.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alfa Vjenčanja – Profesionalna fotografija i video vjenčanja, Slavonija',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alfa Vjenčanja | Fotograf Vjenčanja – Slavonija i Zagreb',
    description:
      'Profesionalna fotografija i video snimanje vjenčanja u Slavoniji i Zagrebu.',
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
