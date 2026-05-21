import type { Metadata } from "next";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import ElegantGallery from "@/components/ElegantGallery";
import FullscreenImage from "@/components/FullScreenImage";
import GalleryPreview from "@/components/gallerypreview/GalleryPreview";
import Hero from "@/components/hero/Hero";
import Instagram from "@/components/instagram/Instagram";
import Social from "@/components/instagram/Social";
import Pricing from "@/components/pricing/Pricing";
import Testimonials from "@/components/testimonials/Testimonials";

export const metadata: Metadata = {
  title: 'Fotograf i Video Vjenčanja – Slavonija, Zagreb i Okolica',
  description:
    'Alfa Vjenčanja – profesionalna fotografija i video snimanje vjenčanja u Slavoniji, Zagrebu i okolici. Više od 10 godina iskustva, 300–800+ fotografija po paketu. Zatražite besplatnu ponudu.',
  alternates: { canonical: 'https://www.video-alfa.hr' },
  openGraph: {
    title: 'Alfa Vjenčanja | Fotograf Vjenčanja – Slavonija i Zagreb',
    description: 'Profesionalna fotografija i video snimanje vjenčanja. Slavonija, Zagreb, cijela regija.',
    url: 'https://www.video-alfa.hr',
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <GalleryPreview />
      <Pricing />
      <FullscreenImage />
      <Testimonials />
      <Contact />
      <ElegantGallery />
      <Social />
    </div>
  );
}
