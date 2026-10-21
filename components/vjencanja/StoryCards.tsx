"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type StoryCard = {
  slug: string;
  title: string;
  city: string;
  cover: string;
  coverAlt: string;
};

export default function StoryCards({
  stories,
  className = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
}: {
  stories: StoryCard[];
  className?: string;
}) {
  return (
    <div className={`grid ${className} gap-x-8 gap-y-16`}>
      {stories.map((story, index) => (
        <motion.div
          key={story.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: (index % 3) * 0.15 }}
          viewport={{ once: true }}
        >
          <Link href={`/vjencanja/${story.slug}/`} className="group block">
            <div className="relative aspect-[4/5] overflow-hidden mb-6">
              <Image
                src={story.cover}
                alt={story.coverAlt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-3">
              {story.city}
            </p>
            <h3 className="font-sans text-2xl font-light leading-snug text-black">
              {story.title}
            </h3>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
