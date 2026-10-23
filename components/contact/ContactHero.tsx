"use client";

import ResponsiveImage from "@/components/ResponsiveImage";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background image */}
      <ResponsiveImage src="/images/webp/image53.webp" alt="Mladenci na dan vjenčanja" priority />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-4xl text-white">

          {/* Heading */}
          <motion.h1
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2 }}
            className="leading-tight"
          >
            <span className="font-sans text-4xl md:text-6xl lg:text-8xl font-light block mb-4">
              Kontakt
            </span>
          </motion.h1>

          {/* Separator line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-[1px] bg-white mx-auto my-8"
          />

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