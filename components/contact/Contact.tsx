"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [date, setDate] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name:     (form.elements.namedItem("name")     as HTMLInputElement).value,
      email:    (form.elements.namedItem("email")    as HTMLInputElement).value,
      date:     (form.elements.namedItem("date")     as HTMLInputElement).value,
      location: (form.elements.namedItem("location") as HTMLInputElement).value,
      message:  (form.elements.namedItem("message")  as HTMLTextAreaElement).value,
      website:  (form.elements.namedItem("website")  as HTMLInputElement).value, // honeypot
    };

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setFormState("success");
        form.reset();
        setDate("");
      } else {
        setFormState("error");
        setErrorMessage(json.message || "Nešto je pošlo po krivu. Pokušajte ponovo.");
      }
    } catch {
      setFormState("error");
      setErrorMessage("Nešto je pošlo po krivu. Pokušajte ponovo.");
    }
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

        {/* Success state */}
        {formState === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-20 text-center"
          >
            <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-6">
              Hvala vam
            </p>
            <p className="text-2xl font-light text-gray-700">
              Vaš upit je uspješno poslan.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Javit ćemo vam se što je prije moguće.
            </p>
          </motion.div>
        ) : (

          /* Form */
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-14 text-left"
          >

            {/* Honeypot — skriveno polje, botovi ga popune, ljudi ne */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            {/* Ime */}
            <div>
              <label className="uppercase tracking-[0.3em] text-xs text-gray-500">
                Ime i prezime
              </label>
              <input
                type="text"
                name="name"
                required
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
                name="email"
                required
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
                name="date"
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
                name="location"
                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition"
              />
            </div>

            {/* Poruka */}
            <div>
              <label className="uppercase tracking-[0.3em] text-xs text-gray-500">
                Vaša poruka
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition resize-none"
              />
            </div>

            {/* Error message */}
            {formState === "error" && (
              <p className="text-sm text-red-500 text-center">
                {errorMessage}
              </p>
            )}

            {/* CTA */}
            <div className="pt-10 text-center">
              <button
                type="submit"
                disabled={formState === "loading"}
                className="uppercase tracking-[0.3em] text-sm relative group disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {formState === "loading" ? "Šalje se..." : "Pošaljite upit"}
                <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </div>

          </motion.form>
        )}

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-gray-600 space-y-4 text-center"
        >
          <a href="mailto:alfavjencanja@gmail.com" className="block hover:text-black transition">
            alfavjencanja@gmail.com
          </a>
          <a href="tel:+38598660275" className="block hover:text-black transition">
            Mobitel: +385 98 660 275
          </a>
          <a href="tel:+38533553553" className="block hover:text-black transition">
            Telefon: +385 033 553 553
          </a>
          <div className="flex justify-center gap-6 pt-2 text-sm uppercase tracking-[0.2em]">
            <a
              href="https://www.facebook.com/p/ALFAVjenčanja-100063607212380/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/video.alfa/"
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