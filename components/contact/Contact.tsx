"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [date, setDate] = useState("");

  const formatDate = (value: string) => {
    let cleaned = value.replace(/\D/g, "");
    cleaned = cleaned.slice(0, 8);

    if (cleaned.length >= 5) {
      return `${cleaned.slice(0, 2)}.${cleaned.slice(2, 4)}.${cleaned.slice(4)}`;
    } else if (cleaned.length >= 3) {
      return `${cleaned.slice(0, 2)}.${cleaned.slice(2)}`;
    }

    return cleaned;
  };

  return (
    <section id="kontakt" className="bg-white py-40">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.4em] text-xs text-gray-500 mb-6"
        >
          Kontakt
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
            Započnimo
          </span>
          <span className="text-3xl md:text-5xl font-light">
            vašu priču zajedno
          </span>
        </motion.h2>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-14 text-left"
        >

          {/* Ime */}
          <div>
            <label className="uppercase tracking-[0.3em] text-xs text-gray-500">
              Ime i prezime
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="uppercase tracking-[0.3em] text-xs text-gray-500">
              Email
            </label>
            <input
              type="email"
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition"
            />
          </div>

          {/* Datum */}
          <div>
            <label className="uppercase tracking-[0.3em] text-xs text-gray-500">
              Datum vjenčanja
            </label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="DD.MM.GGGG"
              value={date}
              onChange={(e) => setDate(formatDate(e.target.value))}
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition"
            />
          </div>

          {/* Lokacija */}
          <div>
            <label className="uppercase tracking-[0.3em] text-xs text-gray-500">
              Lokacija vjenčanja
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition"
            />
          </div>

          {/* Poruka */}
          <div>
            <label className="uppercase tracking-[0.3em] text-xs text-gray-500">
              Vaša poruka
            </label>
            <textarea
              rows={4}
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition resize-none"
            />
          </div>

          {/* CTA */}
          <div className="pt-10 text-center">
            <button
              type="submit"
              className="uppercase tracking-[0.3em] text-sm relative group"
            >
              Pošaljite upit
              <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </button>
          </div>

        </motion.form>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-gray-600 space-y-4 text-center"
        >
          <a
            href="mailto:alfavjencanja@gmail.com"
            className="block hover:text-black transition"
          >
            alfavjencanja@gmail.com
          </a>

          <a
            href="tel:+38598660275"
            className="block hover:text-black transition"
          >
            Mobitel: +385 98 660 275
          </a>

          <a
            href="tel:+38533553553"
            className="block hover:text-black transition"
          >
            Telefon: +385 033 553 553
          </a>

          <div className="flex justify-center gap-6 pt-2 text-sm uppercase tracking-[0.2em]">
            <a
              href="https://www.facebook.com/profile.php?id=100063607212380"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/alfavjencanja"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              Instagram
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}