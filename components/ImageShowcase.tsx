"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FinalShowcase() {
  const images = [
    "/images/webp/image55.webp",
  ];

  return (
    <section className="bg-white">

      {images.map((src, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative h-screen w-full overflow-hidden"
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover object-center"
          />

          {/* Subtle dark gradient for cinematic feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
      ))}

    </section>
  );
}