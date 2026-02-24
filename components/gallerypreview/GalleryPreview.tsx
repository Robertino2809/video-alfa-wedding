"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GalleryPreview() {
  return (
    <section id="portfolio" className="bg-white py-40">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.4em] text-xs text-gray-500 mb-6"
        >
          Portfolio
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
            koje traju zauvijek
          </span>
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Svako vjenčanje za nas je jedinstvena priča.
          Istražite odabrane trenutke ispunjene emocijom,
          elegancijom i bezvremenskom estetikom.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/gallery"
            className="relative inline-block uppercase tracking-[0.3em] text-sm group"
          >
            Pogledajte galeriju

            <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
