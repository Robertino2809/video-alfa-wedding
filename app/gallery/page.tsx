import type { Metadata } from "next";
import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: 'Galerija fotografija vjenčanja | Video Alfa',
  description:
    'Odabrane fotografije s vjenčanja koja smo snimali. Pogledajte naš stil prije nego rezervirate datum.',
  alternates: { canonical: 'https://www.video-alfa.hr/gallery/' },
  openGraph: {
    title: 'Galerija fotografija vjenčanja | Video Alfa',
    description: 'Portfolio fotografija vjenčanja studija Video Alfa.',
    url: 'https://www.video-alfa.hr/gallery/',
  },
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <GalleryGrid />
    </main>
  );
}
