"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/about/about-1.jpg"
            alt="Studio"
            width={800}
            height={1000}
            className="object-cover w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 leading-relaxed space-y-6"
        >
          <p>
            Godinama pratimo parove kroz jedan od najvažnijih dana u njihovom životu.
            Naš pristup temelji se na mirnoći, diskreciji i osjećaju za pravi trenutak.
          </p>

          <p>
            Vjerujemo da fotografija mora zadržati emociju,
            ali i estetiku koja traje. Svaki kadar pažljivo gradimo
            kako bi ostao vrijedan i nakon mnogo godina.
          </p>

          <p>
            Naš cilj nije samo dokumentirati dan,
            već stvoriti vizualnu priču koja ima dubinu i karakter.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
