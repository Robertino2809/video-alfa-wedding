import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.video-alfa.hr';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/gallery`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/packages`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
  ];
}
