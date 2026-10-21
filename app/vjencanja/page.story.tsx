import type { Metadata } from "next";
import VjencanjaHero from "@/components/vjencanja/VjencanjaHero";
import StoryCards from "@/components/vjencanja/StoryCards";
import { getStories, SITE_URL } from "@/lib/vjencanja";

const title = "Priče s vjenčanja | Video Alfa";
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const url = `${SITE_URL}/vjencanja/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    images: [{ url: "/images/webp/image30.webp", alt: "Priče s vjenčanja" }],
  },
};

export default function VjencanjaPage() {
  const stories = getStories();

  return (
    <main className="bg-white">
      <VjencanjaHero
        image="/images/webp/image30.webp"
        imageAlt="Mladenci na dan vjenčanja"
        eyebrow="Vjenčanja"
        title="Priče"
        titleSecond="s vjenčanja"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <section className="max-w-6xl mx-auto px-6 py-32">
        <StoryCards stories={stories} />
      </section>
    </main>
  );
}
