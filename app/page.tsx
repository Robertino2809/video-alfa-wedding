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
