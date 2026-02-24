"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section id="onama" className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative w-full h-[500px] md:h-[650px]"
        >
          <Image
            src="/images/webp/image13.webp"
            alt="Naš tim"
            fill
            className="object-cover rounded-4xl"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <p className="uppercase tracking-[0.4em] text-xs mb-6 text-gray-500">
            O nama
          </p>

          <h2 className="text-3xl md:text-5xl leading-tight mb-8">
            <span className="font-[var(--font-pinyon)] text-5xl md:text-6xl block mb-2">
              Strast
            </span>
            <span className="font-light">
              prema bezvremenskoj eleganciji
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Godinama fotografiramo vjenčanja s naglaskom na
            autentične emocije, profinjenu estetiku i detalje
            koji čine razliku.
          </p>

          <p className="text-gray-600 leading-relaxed mb-10">
            Naš pristup temelji se na smirenosti, diskreciji i
            osjećaju za trenutak. Vjerujemo da prava ljepota
            nastaje spontano – a naš zadatak je zabilježiti je
            s mjerom i stilom.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/about"
              className="relative inline-block uppercase tracking-[0.3em] text-sm group border-black"
            >
              Saznajte više

              <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
