import type { MetadataRoute } from "next";
import { getStories, SITE_URL } from "@/lib/vjencanja";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const stories = getStories();

  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/about/`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/gallery/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/packages/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact/`, changeFrequency: "yearly", priority: 0.6 },
  ];

  if (stories.length === 0) return pages;

  return [
    ...pages,
    {
      url: `${SITE_URL}/vjencanja/`,
      lastModified: stories[0].date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...stories.map((story) => ({
      url: `${SITE_URL}/vjencanja/${story.slug}/`,
      lastModified: story.date,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
