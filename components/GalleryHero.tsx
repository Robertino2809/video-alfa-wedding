"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GalleryHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background image */}
      <Image
        src="/images/webp/image26.webp"
        alt="Galerija"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-4xl text-white">

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[0.4em] text-xs mb-6"
          >
            Galerija
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="leading-tight"
          >
            <span
              className="font-sans text-4xl md:text-6xl lg:text-8xl font-light block mb-4"
            >
              Trenuci
            </span>

            <span className="font-sans text-3xl md:text-5xl font-light">
              koji ostaju zauvijek
            </span>
          </motion.h1>

          {/* Separator line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-[1px] bg-white mx-auto my-8"
          />

          {/* Short description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Svako vjenčanje nosi svoju atmosferu, emociju i energiju.
            Ovdje izdvajamo trenutke koji pričaju priču o ljubavi,
            eleganciji i bezvremenskoj estetici.
          </motion.p>

        </div>
      </div>
      {/* 🔥 Bottom curved shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 160"
          className="w-full h-[140px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,96 C480,200 960,0 1440,120 L1440,160 L0,160 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

    </section>
  );
}