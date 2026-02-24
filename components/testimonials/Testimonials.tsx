"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Od prvog susreta znali smo da smo u pravim rukama. Fotografije su nadmašile sva naša očekivanja.",
      name: "Ana & Marko",
    },
    {
      text: "Diskretni, profesionalni i nevjerojatno talentirani. Svaki trenutak zabilježen je s osjećajem i stilom.",
      name: "Ivana & Luka",
    },
  ];

  return (
    <section className="bg-white py-40">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.4em] text-xs text-gray-500 mb-6"
        >
          Iskustva mladenaca
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
            Riječi
          </span>
          <span className="text-3xl md:text-5xl font-light">
            koje nam znače najviše
          </span>
        </motion.h2>

        {/* Testimonials */}
        <div className="space-y-24">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
                “{item.text}”
              </p>

              <div className="w-16 h-[1px] bg-black mx-auto mb-6"></div>

              <p className="uppercase tracking-[0.3em] text-xs">
                {item.name}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
