"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import StoryCards, { type StoryCard } from "@/components/vjencanja/StoryCards";

type HomeStory = StoryCard & { description: string };

// Sekcija s najnovijim pričama na početnoj (do 3).
// S jednom pričom prikazuje veću horizontalnu karticu umjesto grida.
// followsPreview: sekcija stoji odmah ispod pregleda galerije pa ne treba puni gornji razmak.
export default function HomeStories({
  stories,
  followsPreview = false,
}: {
  stories: HomeStory[];
  followsPreview?: boolean;
}) {
  const [first] = stories;

  return (
    <section
      id="vjencanja"
      className={`bg-white pb-40 ${followsPreview ? "pt-8" : "pt-40"}`}
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="max-w-4xl mx-auto text-center mb-20">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.4em] text-xs text-gray-500 mb-6"
          >
            Vjenčanja
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="mb-10 leading-tight"
          >
            <span className="font-[var(--font-pinyon)] text-6xl md:text-7xl block mb-3">
              Priče
            </span>
            <span className="text-3xl md:text-5xl font-light">
              s vjenčanja
            </span>
          </motion.h2>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Svako vjenčanje ima svoju priču. Ovdje ih pričamo do kraja, od priprema do prvog plesa.
          </motion.p>
        </div>

        {/* Cards */}
        {stories.length === 1 ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/vjencanja/${first.slug}/`}
              className="group grid md:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              <div className="relative aspect-[4/5] md:aspect-[4/3] overflow-hidden">
                <Image
                  src={first.cover}
                  alt={first.coverAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4">
                  {first.city}
                </p>
                <h3 className="font-sans text-3xl md:text-4xl font-light leading-snug text-black mb-6">
                  {first.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {first.description}
                </p>
                <span className="relative inline-block uppercase tracking-[0.3em] text-xs">
                  Pročitajte priču
                  <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </span>
              </div>
            </Link>
          </motion.div>
        ) : (
          <StoryCards
            stories={stories}
            className={
              stories.length === 2
                ? "grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto"
                : undefined
            }
          />
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <Link
            href="/vjencanja/"
            className="inline-block uppercase tracking-[0.3em] text-sm border border-black px-8 py-3 hover:bg-black hover:text-white transition duration-500"
          >
            Sve priče
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
