"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Social() {
  const posts = [
    "/images/webp/image73.webp",
    "/images/webp/image58.webp",
    "/images/webp/image85.webp",
    "/images/webp/image49.webp",
    "/images/webp/image2.webp",
    "/images/webp/image7.webp",
  ];

  return (
    <section className="bg-white py-40">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.4em] text-xs text-gray-500 mb-6"
        >
          Društvene mreže
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="font-[var(--font-pinyon)] text-6xl md:text-7xl block mb-3">
            Trenuci
          </span>
          <span className="text-3xl md:text-5xl font-light">
            koje dijelimo svakodnevno
          </span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative w-full h-60 overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                alt="Social fotografija"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-12 mt-20"
        >
          <a
            href="https://www.instagram.com/video.alfa/"
            target="_blank"
            className="flex items-center gap-3 uppercase tracking-[0.2em] text-sm hover:text-gray-600 transition"
          >
            <Instagram size={18} />
            Instagram
          </a>

          <a
            href="https://www.facebook.com/p/ALFAVjenčanja-100063607212380/?locale=hr_HR"
            target="_blank"
            className="flex items-center gap-3 uppercase tracking-[0.2em] text-sm hover:text-gray-600 transition"
          >
            <Facebook size={18} />
            Facebook
          </a>

          <a
            href="https://www.youtube.com/@VIDEOALFA.?app=desktop"
            target="_blank"
            className="flex items-center gap-3 uppercase tracking-[0.2em] text-sm hover:text-gray-600 transition"
          >
            <Youtube size={18} />
            YouTube
          </a>
        </motion.div>

      </div>
    </section>
  );
}