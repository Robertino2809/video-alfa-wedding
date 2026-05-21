import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import StatsSection from "@/components/about/StatsSection";

export const metadata: Metadata = {
  title: 'O Nama – Tim i Pristup Fotografiji Vjenčanja',
  description:
    'Upoznajte tim Alfa Vjenčanja. Više od 10 godina fotografiramo vjenčanja u Slavoniji i široj regiji s naglaskom na autentične emocije i bezvremensku estetiku.',
  alternates: { canonical: 'https://www.video-alfa.hr/about' },
  openGraph: {
    title: 'O Nama | Alfa Vjenčanja – Fotograf Vjenčanja',
    description: 'Više od 10 godina fotografiramo vjenčanja u Slavoniji i šire. Diskrecija, estetika, povjerenje.',
    url: 'https://www.video-alfa.hr/about',
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
