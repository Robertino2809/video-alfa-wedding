import type { Metadata } from "next";
import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";
import GalleryIntro from "@/components/GalleryIntro";

export const metadata: Metadata = {
  title: 'Galerija Fotografija Vjenčanja – Portfolio',
  description:
    'Pogledajte portfolio fotografija vjenčanja studija Alfa Vjenčanja. Autentični trenuci, elegantna estetika. Lokacije po cijeloj Slavoniji, Zagrebu i regiji.',
  alternates: { canonical: 'https://www.video-alfa.hr/gallery' },
  openGraph: {
    title: 'Galerija | Alfa Vjenčanja – Fotografija Vjenčanja',
    description: 'Portfolio fotografija vjenčanja – Slavonija, Zagreb i regija.',
    url: 'https://www.video-alfa.hr/gallery',
  },
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryIntro />
      <GalleryGrid />
    </>
  );
}
