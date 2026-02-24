import PackagesHero from "@/components/packages/PackagesHero";
import PackagesList from "@/components/packages/PackagesList";
import PackagesCTA from "@/components/packages/PackagesCTA";

export default function PackagesPage() {
  return (
    <main className="bg-white">
      <PackagesHero />
      <PackagesList />
      <PackagesCTA />
    </main>
  );
}