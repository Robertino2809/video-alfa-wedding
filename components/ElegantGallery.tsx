"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/webp/image5.webp",  // zamijeni s vertikalnim fotkama
  "/images/webp/image64.webp",
  "/images/webp/image75.webp",
];

export default function ElegantGallery() {
  return (
    <section className="bg-white py-24">
      <div className="w-full">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative w-full aspect-[3/4] overflow-hidden"
            >
              <Image
                src={src}
                alt="Wedding fotografija"
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Subtle gradient bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}