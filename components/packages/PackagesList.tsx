"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PackagesList() {
  const packages = [
    {
      name: "Essential",
      description: "Idealno za intimna vjenčanja i kraće ceremonije.",
      features: [
        "Do 6 sati fotografiranja",
        "300+ obrađenih fotografija",
        "Online galerija",
        "Dostava unutar 30 dana"
      ]
    },
    {
      name: "Signature",
      description: "Najpopularniji izbor za cjelodnevno vjenčanje.",
      features: [
        "Do 10 sati fotografiranja",
        "600+ obrađenih fotografija",
        "Premium foto album",
        "Online galerija",
        "Dostava unutar 30 dana"
      ]
    },
    {
      name: "Exclusive",
      description: "Potpuno iskustvo bez kompromisa.",
      features: [
        "Cjelodnevno fotografiranje",
        "800+ obrađenih fotografija",
        "Luksuzni album",
        "Video snimanje",
        "Drone snimke",
        "Personalizirana ponuda"
      ]
    }
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-6xl mx-auto px-6 space-y-24">

        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="border-b border-gray-200 pb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              {pkg.name}
            </h2>

            <p className="text-gray-600 mb-8">
              {pkg.description}
            </p>

            <ul className="space-y-3 text-gray-600 mb-10">
              {pkg.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>

            <Link
              href="/kontakt"
              className="uppercase tracking-[0.3em] text-sm border border-black px-8 py-3 hover:bg-black hover:text-white transition duration-500"
            >
              Zatraži ponudu
            </Link>
          </motion.div>
        ))}

      </div>
    </section>
  );
}