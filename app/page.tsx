import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import FullscreenImage from "@/components/FullScreenImage";
import GalleryPreview from "@/components/gallerypreview/GalleryPreview";
import Hero from "@/components/hero/Hero";
import Instagram from "@/components/instagram/Instagram";
import Social from "@/components/instagram/Social";
import Pricing from "@/components/pricing/Pricing";
import ScrollRevealGallery from "@/components/ScrollRevealGallery";
import Testimonials from "@/components/testimonials/Testimonials";
import ImageShowcase from "@/components/ImageShowcase"

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ImageShowcase />
      <GalleryPreview />
      <Pricing />
      <FullscreenImage />
      <Testimonials />
      <Contact />
      <ScrollRevealGallery />
      <Social />
    </div>
  );
}
