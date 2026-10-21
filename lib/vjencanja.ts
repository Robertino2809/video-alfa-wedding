import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const SITE_URL = "https://www.video-alfa.hr";

const CONTENT_DIR = path.join(process.cwd(), "content", "vjencanja");
const PUBLIC_DIR = path.join(process.cwd(), "public");

// U dev modu prikazujemo i neobjavljene priče, u production buildu samo objavljene.
const SHOW_UNPUBLISHED = process.env.NODE_ENV === "development";

export type StoryMeta = {
  slug: string;
  title: string;
  description: string;
  city: string;
  venue?: string;
  date: string; // YYYY-MM-DD
  cover: string;
  coverAlt: string;
  published: boolean;
};

export type Story = StoryMeta & { content: string };

function fail(file: string, field: string, message: string): never {
  throw new Error(
    `[vjencanja] content/vjencanja/${file}: polje "${field}" ${message}`
  );
}

function requireString(
  data: Record<string, unknown>,
  file: string,
  field: string
): string {
  const value = data[field];
  if (typeof value !== "string" || value.trim() === "") {
    fail(file, field, "je obavezno i mora biti tekst");
  }
  return value.trim();
}

function parseDate(value: unknown, file: string): string {
  // gray-matter pretvara nenavodnikom napisan datum u Date objekt
  const str =
    value instanceof Date ? value.toISOString().slice(0, 10) : value;
  if (typeof str !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(str)) {
    fail(file, "date", 'je obavezno i mora biti u obliku "YYYY-MM-DD"');
  }
  const d = new Date(`${str}T00:00:00Z`);
  if (Number.isNaN(d.getTime()) || d.toISOString().slice(0, 10) !== str) {
    fail(file, "date", `nije ispravan datum ("${str}")`);
  }
  return str;
}

function requirePublicFile(src: string, file: string, field: string) {
  if (!src.startsWith("/")) {
    fail(file, field, `mora počinjati s "/" (putanja iz public/), a glasi "${src}"`);
  }
  if (!fs.existsSync(path.join(PUBLIC_DIR, src))) {
    fail(file, field, `pokazuje na nepostojeću datoteku public${src}`);
  }
}

// Provjerava da svaka <Fotografija> u MDX-u ima src i neprazan alt,
// kako bi build pao s porukom koja datoteka je problem.
function validatePhotos(content: string, file: string) {
  const tags = content.match(/<Fotografija\b[^>]*>/g) ?? [];
  tags.forEach((tag, i) => {
    const n = i + 1;
    const src = tag.match(/\bsrc\s*=\s*"([^"]*)"/)?.[1];
    const alt = tag.match(/\balt\s*=\s*"([^"]*)"/)?.[1];
    if (!src) fail(file, `Fotografija #${n} src`, "je obavezno");
    if (!alt || alt.trim() === "") {
      fail(file, `Fotografija #${n} alt`, `je obavezno (src="${src}")`);
    }
    requirePublicFile(src, file, `Fotografija #${n} src`);
  });
}

function readStory(file: string): Story {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
  const { data, content } = matter(raw);

  const description = requireString(data, file, "description");
  if (description.length > 160) {
    fail(file, "description", `ima ${description.length} znakova (najviše 160)`);
  }

  if (typeof data.published !== "boolean") {
    fail(file, "published", "je obavezno i mora biti true ili false");
  }

  const venue = data.venue;
  if (venue !== undefined && (typeof venue !== "string" || venue.trim() === "")) {
    fail(file, "venue", "mora biti tekst ako je navedeno");
  }

  const cover = requireString(data, file, "cover");
  requirePublicFile(cover, file, "cover");
  validatePhotos(content, file);

  return {
    slug: file.replace(/\.mdx$/, ""),
    title: requireString(data, file, "title"),
    description,
    city: requireString(data, file, "city"),
    venue: typeof venue === "string" ? venue.trim() : undefined,
    date: parseDate(data.date, file),
    cover,
    coverAlt: requireString(data, file, "coverAlt"),
    published: data.published,
    content,
  };
}

let cache: Story[] | null = null;

function loadAll(): Story[] {
  if (cache && !SHOW_UNPUBLISHED) return cache;
  const files = fs.existsSync(CONTENT_DIR)
    ? fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"))
    : [];
  cache = files
    .map(readStory)
    .filter((s) => s.published || SHOW_UNPUBLISHED)
    .sort((a, b) => b.date.localeCompare(a.date));
  return cache;
}

/** Vidljive priče (objavljene; u dev modu i neobjavljene), najnovije prve. */
export function getStories(): Story[] {
  return loadAll();
}

export function getStory(slug: string): Story | undefined {
  return loadAll().find((s) => s.slug === slug);
}

export function hasStories(): boolean {
  return loadAll().length > 0;
}

const MONTHS = [
  "siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj",
  "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac",
];

/** "2026-10-21" → "listopad 2026." */
export function formatMonthYear(date: string): string {
  const [year, month] = date.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}.`;
}
