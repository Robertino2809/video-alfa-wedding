"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { monsieur } from "@/app/fonts";

export default function GalleryStatement() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden my-40"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/webp/image12.webp"
          alt="Statement"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-20 flex items-center justify-center h-full text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
          className="text-white leading-tight"
        >
          <span
            className={`${monsieur.className} text-5xl md:text-7xl lg:text-9xl block mb-6`}
          >
            Ljubav
          </span>
          <span className="text-2xl md:text-4xl font-light tracking-wide">
            u svom najljepšem obliku
          </span>
        </motion.h2>
      </div>
    </section>
  );
}