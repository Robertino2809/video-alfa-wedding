"use client";

import ResponsiveImage from "@/components/ResponsiveImage";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero({ image }: { image: string }) {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background image */}
      <ResponsiveImage src={image} alt="Mladenci na dan vjenčanja" priority />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-4xl text-white">

          <motion.h1
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2 }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight`}
          >
            Fotografiranje i video snimanje vjenčanja
          </motion.h1>

          <motion.p
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg md:text-xl font-light text-white/90"
          >
            Obiteljski studio iz Slatine, od 1998.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-[1px] bg-white mx-auto my-8"
          />

          <motion.p
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Snimamo vjenčanja od priprema do zadnjeg plesa. Od tog dana složimo
            wedding book i film koji ćete rado gledati i za dvadeset godina.
          </motion.p>

          <motion.div
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            <Link
              href="#kontakt"
              className="
                inline-flex items-center justify-center
                w-full sm:w-auto
                px-8 sm:px-10
                py-4
                text-sm
                uppercase tracking-[0.25em]
                bg-white text-black
                transition duration-500
                hover:bg-black hover:text-white
              "
            >
              <span className="mr-3">Provjerite slobodan datum</span>
              <span className="text-lg">→</span>
            </Link>
          </motion.div>

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
