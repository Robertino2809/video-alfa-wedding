import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import VjencanjaHero from "@/components/vjencanja/VjencanjaHero";
import Breadcrumb from "@/components/vjencanja/Breadcrumb";
import StoryCTA from "@/components/vjencanja/StoryCTA";
import StoryCards from "@/components/vjencanja/StoryCards";
import { mdxComponents } from "@/components/vjencanja/mdxComponents";
import {
  formatMonthYear,
  getStories,
  getStory,
  SITE_URL,
} from "@/lib/vjencanja";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getStories().map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};

  const title = `${story.title} | Video Alfa`;
  const url = `${SITE_URL}/vjencanja/${story.slug}/`;

  return {
    title,
    description: story.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description: story.description,
      url,
      images: [{ url: story.cover, alt: story.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: story.description,
      images: [story.cover],
    },
  };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const meta = [story.city, story.venue, formatMonthYear(story.date)]
    .filter(Boolean)
    .join(" · ");

  const more = getStories()
    .filter((s) => s.slug !== story.slug)
    .slice(0, 3);

  return (
    <main className="bg-white">
      <VjencanjaHero
        image={story.cover}
        imageAlt={story.coverAlt}
        eyebrow="Priče s vjenčanja"
        title={story.title}
        meta={meta}
      />

      <Breadcrumb
        items={[
          { name: "Početna", href: "/" },
          { name: "Priče s vjenčanja", href: "/vjencanja/" },
          { name: story.title, href: `/vjencanja/${story.slug}/` },
        ]}
      />

      <article className="max-w-5xl mx-auto px-6 pt-16 pb-32">
        <MDXRemote source={story.content} components={mdxComponents} />
      </article>

      <StoryCTA />

      {more.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-xs text-gray-500 mb-6">
              Vjenčanja
            </p>
            <h2 className="font-sans text-3xl md:text-5xl font-light">
              Još vjenčanja
            </h2>
          </div>
          <StoryCards stories={more} />
        </section>
      )}
    </main>
  );
}
