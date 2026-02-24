"use client";

import { motion } from "framer-motion";

export default function AboutValues() {
  const values = [
    {
      title: "Diskrecija",
      text: "Prisustvo bez nametanja, kako bi trenuci ostali prirodni i iskreni."
    },
    {
      title: "Estetika",
      text: "Pažljivo birana kompozicija, svjetlo i detalji u svakom kadru."
    },
    {
      title: "Povjerenje",
      text: "Gradimo odnos koji omogućuje opuštenost i autentičnost."
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
