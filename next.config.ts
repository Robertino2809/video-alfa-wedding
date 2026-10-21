import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

// Rute sekcije "Priče s vjenčanja" (app/vjencanja/**/page.story.tsx) uključuju se
// samo ako postoji barem jedna objavljena priča. U dev modu su uvijek uključene.
function hasPublishedStories() {
  const dir = path.join(process.cwd(), "content", "vjencanja");
  if (!fs.existsSync(dir)) return false;
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .some((f) => matter(fs.readFileSync(path.join(dir, f), "utf8")).data.published === true);
}

export default function config(phase: string): NextConfig {
  const showStories = phase === PHASE_DEVELOPMENT_SERVER || hasPublishedStories();

  return {
    output: "export",
    trailingSlash: true,
    pageExtensions: [...(showStories ? ["story.tsx"] : []), "tsx", "ts", "jsx", "js"],
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
        },
      ],
    },
  };
}
