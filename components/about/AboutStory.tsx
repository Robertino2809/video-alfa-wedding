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
            src="/images/camera.webp"
            alt="Tim Video Alfa – profesionalni fotografi i snimatelji vjenčanja iz Slatine"
            width={800}
            height={1000}
            className="object-cover w-full h-auto rounded-4xl"
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
            Video Alfa postoji od 1998. godine i od tada snimamo vjenčanja.
          </p>

          <p>
            Sve dogovaramo uživo, u studiju u Slatini, Braće Radić 13.
            Prođemo s vama plan dana, lokacije za fotografiranje i snimanje te
            izgled wedding booka.
          </p>

          <p className="text-sm text-gray-500">
            Foto Studio Video Alfa · Braće Radić 13, Slatina
          </p>
        </motion.div>

      </div>
    </section>
  );
}