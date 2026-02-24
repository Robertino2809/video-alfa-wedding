"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Instagram() {
  const posts = [
    "/images/insta1.jpg",
    "/images/insta2.jpg",
    "/images/insta3.jpg",
    "/images/insta4.jpg",
    "/images/insta5.jpg",
    "/images/insta6.jpg",
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
          Instagram
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
              className="relative w-full h-60 overflow-hidden"
            >
              <Image
                src={src}
                alt="Instagram fotografija"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="https://instagram.com"
          target="_blank"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
          className="inline-block mt-16 uppercase tracking-[0.3em] text-xs relative group"
        >
          Zapratite nas

          <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
        </motion.a>

      </div>
    </section>
  );
}
