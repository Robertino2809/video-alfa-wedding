"use client";

import { motion } from "framer-motion";

export default function AboutValues() {
  const values = [
    {
      title: "Sve na jednom mjestu",
      text: "Fotograf, snimatelj, dron i light show iz istog studija. Jedan dogovor za cijeli dan."
    },
    {
      title: "Dogovor uživo",
      text: "Prije vjenčanja se nađemo u studiju i prođemo cijeli dan, od priprema do ulaska u restoran."
    },
    {
      title: "Isti tim do kraja",
      text: "Ljudi s kojima dogovarate isti su ljudi koji snimaju i koji vam predaju book i film."
    }
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <div className="grid md:grid-cols-3 gap-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="uppercase tracking-[0.3em] text-sm mb-6">
                {value.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {value.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
