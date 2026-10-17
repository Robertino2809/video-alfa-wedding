import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import StatsSection from "@/components/about/StatsSection";

export const metadata: Metadata = {
  title: 'O nama – foto studio Video Alfa, Slatina od 1998.',
  description:
    'Obiteljski foto i video studio iz Slatine. Fotografiranje i video snimanje vjenčanja od 1998., s jednim timom od prvog dogovora do predaje materijala.',
  alternates: { canonical: 'https://www.video-alfa.hr/about/' },
  openGraph: {
    title: 'O nama – foto studio Video Alfa, Slatina od 1998.',
    description: 'Fotografiranje i video snimanje vjenčanja od 1998.',
    url: 'https://www.video-alfa.hr/about/',
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <AboutStory />
      <StatsSection />
      <AboutValues />
    </main>
  );
}
