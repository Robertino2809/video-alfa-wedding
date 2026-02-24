"use client";

import { motion } from "framer-motion";
import { monsieur } from "@/app/fonts";

export default function GalleryIntro() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.4em] text-xs text-gray-500 mb-6"
        >
          Galerija
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="leading-tight mb-10"
        >
          <span className={`font-sans text-6xl md:text-7xl block mb-4`}>
            Trenutci
          </span>

          <span className="font-sans text-3xl md:text-5xl font-light">
            koji ostaju zauvijek
          </span>
        </motion.h1>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 leading-relaxed max-w-2xl mx-auto"
        >
          Svako vjenčanje nosi svoju atmosferu, emociju i energiju.
          Ovdje izdvajamo odabrane trenutke koji pričaju priču o
          ljubavi, eleganciji i bezvremenskoj estetici.
        </motion.p>

      </div>
    </section>
  );
}
