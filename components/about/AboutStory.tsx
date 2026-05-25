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
            Video Alfa postoji od 1998. godine. Više od 28 godina pratimo parove
            kroz jedan od najvažnijih dana u njihovom životu — i svaki put
            pristupamo mu s jednakom pažnjom i odgovornošću.
          </p>

          <p>
            Naš tim radi iz studija u Slatini, Braće Radić 13,
            odakle pokrivamo vjenčanja po cijeloj Slavoniji i šire.
            Fotografija, video snimanje, dron i light show — sve pod jednim krovom,
            s jednim timom koji poznajete od prvog susreta do predaje materijala.
          </p>

          <p>
            Vjerujemo da dobra fotografija mora zadržati emociju,
            ali i estetiku koja traje. Naš cilj nije samo dokumentirati dan —
            već stvoriti vizualnu priču koju ćete gledati i za dvadeset godina.
          </p>

          <p className="text-sm text-gray-400">
            Foto Studio Video Alfa · Braće Radić 13, Slatina
          </p>
        </motion.div>

      </div>
    </section>
  );
}