"use client";

import ResponsiveImage from "@/components/ResponsiveImage";
import { motion } from "framer-motion";

export default function PackagesHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background image */}
      <ResponsiveImage src="/images/webp/image21.webp" alt="Mladenci s vjenčanim albumom" priority />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-4xl text-white">

          {/* Subtitle */}
          <motion.p
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[0.4em] text-xs mb-6"
          >
            Paketi
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2 }}
            className="leading-tight"
          >
            <span className="font-sans text-4xl md:text-6xl lg:text-8xl font-light block mb-4">
              Odaberite savršeni paket
            </span>{" "}
            <span className="font-sans text-3xl md:text-5xl font-light">
              za vaš dan
            </span>
          </motion.h1>

          {/* Separator line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-[1px] bg-white mx-auto my-8"
          />

          {/* Description */}
          <motion.p
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Svaki paket pažljivo je osmišljen kako bi odgovarao različitim
            željama, stilovima i budžetima, uz istu razinu elegancije i
            profesionalnosti.
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