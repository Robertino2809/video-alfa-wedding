import type { Metadata } from "next";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import ElegantGallery from "@/components/ElegantGallery";
import FullscreenImage from "@/components/FullScreenImage";
import FullscreenImage2 from "@/components/FullScreenImage2";
import GalleryPreview from "@/components/gallerypreview/GalleryPreview";
import Hero from "@/components/hero/Hero";
import Social from "@/components/instagram/Social";
import Pricing from "@/components/pricing/Pricing";
import Testimonials from "@/components/testimonials/Testimonials";

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

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <FullscreenImage />
      <GalleryPreview />
      <Pricing />
      <FullscreenImage2 />
      <Testimonials />
      <Contact />
      <ElegantGallery />
      <Social />
    </div>
  );
}
