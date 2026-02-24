"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { monsieur } from "@/app/fonts";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className={`font-sans text-4xl md:text-4xl lg:text-4xl mb-12`}
          >
            Započnimo vašu priču
          </h2>

          <Link
            href="#kontakt"
            className="uppercase tracking-[0.3em] text-sm border border-white px-8 py-3 hover:bg-white hover:text-black transition duration-500"
          >
            Rezervirajte termin
          </Link>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/20 mb-16"></div>

        {/* Bottom section */}
        <div className="grid md:grid-cols-3 gap-12 text-sm text-white/70">

          {/* Studio info */}
          <div>
            <h3 className="uppercase tracking-[0.3em] text-xs mb-6 text-white">
              Studio
            </h3>
            <p>Alfa Vjenčanja</p>
            <p>Bezvremenska fotografija</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="uppercase tracking-[0.3em] text-xs mb-6 text-white">
              Kontakt
            </h3>
            <a
              href="mailto:alfavjencanja@gmail.com"
              className="block hover:text-white transition"
            >
              alfavjencanja@gmail.com
            </a>
            <a
              href="tel:+38598660275"
              className="block hover:text-white transition"
            >
              +385 98 660 275
            </a>
          </div>

          {/* Social */}
          <div>
            <h3 className="uppercase tracking-[0.3em] text-xs mb-6 text-white">
              Pratite nas
            </h3>

            <div className="space-y-2">
              <a
                href="https://www.facebook.com/profile.php?id=100063607212380"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/alfavjencanja"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition"
              >
                Instagram
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-20 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Alfa Vjenčanja. Sva prava pridržana.
        </div>

      </div>
    </footer>
  );
}
