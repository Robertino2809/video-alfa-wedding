import type { Metadata } from "next";
import { preload } from "react-dom";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import ElegantGallery from "@/components/ElegantGallery";
import FullscreenImage from "@/components/FullScreenImage";
import FullscreenImage2 from "@/components/FullScreenImage2";
import GalleryPreview from "@/components/gallerypreview/GalleryPreview";
import Hero from "@/components/hero/Hero";
import Social from "@/components/instagram/Social";
import Pricing from "@/components/pricing/Pricing";
import { getResponsiveImage } from "@/components/ResponsiveImage";
import HomeStories from "@/components/vjencanja/HomeStories";
import { getStories } from "@/lib/vjencanja";

export const metadata: Metadata = {
  title: 'Fotograf i snimatelj vjenčanja | Video Alfa Slatina',
  description:
    'Fotografiranje i video snimanje vjenčanja od 1998. Wedding book, dron i light show. Zatražite ponudu za svoj datum.',
  alternates: { canonical: 'https://www.video-alfa.hr/' },
  openGraph: {
    title: 'Fotograf i snimatelj vjenčanja | Video Alfa Slatina',
    description: 'Fotografiranje i video snimanje vjenčanja od 1998.',
    url: 'https://www.video-alfa.hr/',
  },
};

const HERO_IMAGE = "/images/webp/image94.webp";

export default function Home() {
  // <link rel="preload"> za hero sliku u <head>; srcset i sizes moraju biti
  // isti kao na <img> u Hero komponenti, inače preglednik skida sliku dvaput.
  preload(HERO_IMAGE, {
    as: "image",
    fetchPriority: "high",
    imageSrcSet: getResponsiveImage(HERO_IMAGE)?.srcSet,
    imageSizes: "100vw",
  });

  // 0 priča → ništa; 1–2 → ispod pregleda galerije; 3+ → umjesto pregleda galerije.
  const stories = getStories()
    .slice(0, 3)
    .map(({ slug, title, city, cover, coverAlt, description }) => ({
      slug, title, city, cover, coverAlt, description,
    }));

  return (
    <main>
      <Hero image={HERO_IMAGE} />
      <About />
      <FullscreenImage />
      {stories.length < 3 && <GalleryPreview />}
      {stories.length > 0 && <HomeStories stories={stories} followsPreview={stories.length < 3} />}
      <Pricing />
      <FullscreenImage2 />
      <Contact />
      <ElegantGallery />
      <Social />
    </main>
  );
}
