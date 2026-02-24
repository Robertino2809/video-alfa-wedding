"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { monsieur } from "@/app/fonts";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background image */}
      <Image
        src="/images/webp/image94.webp"
        alt="Vjenčanje"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-4xl text-white">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className={`text-4xl md:text-6xl lg:text-6xl font-light leading-tight`}
          >
            Dobrodošli u naš studio – <br />
            gdje trenuci postaju uspomene
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-[1px] bg-white mx-auto my-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Stvaramo bezvremensku fotografiju vjenčanja koja bilježi
            emocije, atmosferu i detalje vašeg najposebnijeg dana.
            Svaka priča je jedinstvena – a naš cilj je ispričati je s elegancijom.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            <Link
              href="#kontakt"
              className="bg-white text-black px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-black hover:text-white transition duration-500"
            >
              Rezervirajte svoj datum →
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
