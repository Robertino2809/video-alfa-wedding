"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Pricing() {
  const services = [
    {
      name: "Fotografija",
      features: [
        "Kožni wedding book po izboru",
        "Fotografiranje ceremonije i photo sessiona",
        "Fotografije arhivirane na USB",
      ],
    },
    {
      name: "Video snimanje",
      features: [
        "Uvodna špica i glavni spot",
        "Odabir glazbe po želji mladenaca",
        "Full HD 16:9 (widescreen)",
        "Snimanje dronom dostupno uz odabrane pakete",
        "Arhivirano na USB stick",
      ],
    },
    {
      name: "Light Show",
      features: [
        "Ambijentalna rasvjeta prostora",
        "Niski dim za prvi ples",
        "Prskalice za prvi ples i tortu",
        "Osvjetljavanje po mjeri vašeg prostora",
      ],
    },
  ];

  return (
    <section id="paketi" className="bg-white py-40">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.4em] text-xs text-gray-500 mb-6"
        >
          Što nudimo
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-[var(--font-pinyon)] text-6xl md:text-7xl block mb-3">
            Usluge
          </span>
          <span className="text-3xl md:text-5xl font-light">
            prilagođene vašoj priči
          </span>
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-12 border ${
                service.highlight ? "border-black" : "border-gray-200"
              }`}
            >
              <h3 className="uppercase tracking-[0.3em] text-sm mb-8">
                {service.name}
              </h3>

              <ul className="space-y-4 text-gray-600 mb-12">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <Link
                href="/packages"
                className="relative uppercase tracking-[0.3em] text-xs group"
              >
                Istražite pakete
                <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <Link
            href="/packages"
            className="relative inline-block uppercase tracking-[0.3em] text-sm group"
          >
            Pogledajte sve pakete i ponude
            <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}