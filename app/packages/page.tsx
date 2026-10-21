import type { Metadata } from "next";
import PackagesHero from "@/components/packages/PackagesHero";
import PackagesList from "@/components/packages/PackagesList";
import PackagesCTA from "@/components/packages/PackagesCTA";

export const metadata: Metadata = {
  title: 'Paketi za fotografiranje i snimanje vjenčanja | Video Alfa',
  description:
    'Šest foto paketa s kožnim wedding bookom 30×30 i 30×40 cm, video paketi, dron i light show. Zatražite ponudu.',
  alternates: { canonical: 'https://www.video-alfa.hr/packages/' },
  openGraph: {
    title: 'Paketi za fotografiranje i snimanje vjenčanja | Video Alfa',
    description: 'Foto i video paketi za vjenčanja, wedding book, dron i light show.',
    url: 'https://www.video-alfa.hr/packages/',
  },
};

export default function PackagesPage() {
  return (
    <main className="bg-white">
      <PackagesHero />
      <PackagesList />
      <PackagesCTA />
    </main>
  );
}
