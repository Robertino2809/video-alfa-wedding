import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import StatsSection from "@/components/about/StatsSection";

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
