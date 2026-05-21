import type { Metadata } from "next";
import PackagesHero from "@/components/packages/PackagesHero";
import PackagesList from "@/components/packages/PackagesList";
import PackagesCTA from "@/components/packages/PackagesCTA";

export const metadata: Metadata = {
  title: 'Paketi Fotografije Vjenčanja – Essential, Signature, Exclusive',
  description:
    'Pogledajte naše pakete za fotografiranje i video snimanje vjenčanja. Od 6 sati do cjelodnevnog snimanja, 300–800+ fotografija. Slavonija, Zagreb i okolica.',
  alternates: { canonical: 'https://www.video-alfa.hr/packages' },
  openGraph: {
    title: 'Paketi | Alfa Vjenčanja – Fotografija Vjenčanja',
    description: 'Essential, Signature i Exclusive paketi za fotografiranje vjenčanja.',
    url: 'https://www.video-alfa.hr/packages',
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
