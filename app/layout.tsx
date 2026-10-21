import type { Metadata } from "next";
import { montserrat } from "./fonts";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { hasStories } from "@/lib/vjencanja";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.video-alfa.hr'),
  title: {
    default: 'Fotograf i snimatelj vjenčanja | Video Alfa Slatina',
    template: '%s',
  },
  description:
    'Fotografiranje i video snimanje vjenčanja, 28+ godina iskustva. Wedding book, dron i light show.',
  authors: [{ name: 'Video Alfa', url: 'https://www.video-alfa.hr' }],
  creator: 'Video Alfa',
  publisher: 'Video Alfa',
  openGraph: {
    type: 'website',
    locale: 'hr_HR',
    url: 'https://www.video-alfa.hr/',
    siteName: 'Video Alfa',
    title: 'Fotograf i snimatelj vjenčanja | Video Alfa Slatina',
    description:
      'Fotografiranje i video snimanje vjenčanja, 28+ godina iskustva.',
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
    title: 'Fotograf i snimatelj vjenčanja | Video Alfa Slatina',
    description: 'Fotografiranje i video snimanje vjenčanja od 1998.',
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
    canonical: 'https://www.video-alfa.hr/',
    languages: {
      'hr-HR': 'https://www.video-alfa.hr/',
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
        <Navbar showVjencanja={hasStories()} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
