"use client";

import { motion } from "framer-motion";
import { monsieur } from "@/app/fonts";
import Link from "next/link";

export default function StoryCTA() {
  return (
    <section className="bg-[#333] text-white py-32 text-center">
      <div className="max-w-4xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span
            className={`${monsieur.className} text-4xl md:text-6xl lg:text-7xl block mb-4`}
          >
            Planirate
          </span>

          <span className="text-3xl md:text-5xl font-light">
            vjenčanje?
          </span>
        </motion.h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/packages/"
            className="uppercase tracking-[0.3em] text-sm border border-white px-8 py-3 hover:bg-white hover:text-black transition duration-500"
          >
            Paketi
          </Link>
          <Link
            href="/contact/"
            className="uppercase tracking-[0.3em] text-sm border border-white bg-white text-black px-8 py-3 hover:bg-transparent hover:text-white transition duration-500"
          >
            Zatražite ponudu
          </Link>
        </div>

      </div>
    </section>
  );
}
