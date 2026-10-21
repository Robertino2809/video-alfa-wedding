"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ─── SHARED TEXT ──────────────────────────────────────────────────────────────

const fotoIncluded = [
  "kožni wedding book, korice po vašem izboru",
  "fotografiranje ceremonije i photo session na lokaciji koju dogovorimo",
  "sve fotografije i stranice booka na USB-u",
];

const videoIncluded = [
  "uvodnu špicu s do 10 vaših fotografija iz djetinjstva",
  "glazbu za uvod i spot po vašem izboru",
  "snimanje spota na lokaciji koju odaberete",
  "montirani film u Full HD rezoluciji na USB-u",
];

const videoIncludedNote =
  "Dodatne izmjene ili skraćivanje filma naplaćujemo prema utrošenom vremenu.";

const sharedNote =
  "Sve detalje dogovaramo u studiju u Slatini, Braće Radić 13, uz prethodnu najavu.";

// ─── DATA ────────────────────────────────────────────────────────────────────
// Prva stavka (book / spotovi) ide ispod naziva, ostale u desni stupac.

type Package = {
  id: number;
  name: string;
  highlight?: boolean;
  items: string[];
};

const fotoPackages: Package[] = [
  {
    id: 1,
    name: "Foto Paket 1",
    items: [
      "Wedding book 30×30 cm, 40 stranica",
      "Fotografiranje na vjenčanju i na lokaciji",
      "Ne uključuje okupljanje kod kuće ni restoran",
    ],
  },
  {
    id: 2,
    name: "Foto Paket 2",
    items: [
      "Wedding book 30×30 cm, 60 stranica",
      "Fotografiranje na vjenčanju i na lokaciji",
      "Ne uključuje okupljanje kod kuće ni restoran",
    ],
  },
  {
    id: 3,
    name: "Foto Paket 3",
    highlight: true,
    items: [
      "Wedding book 30×40 cm, 40 stranica",
      "Fotografiranje na vjenčanju, na lokaciji i u restoranu do večere",
    ],
  },
  {
    id: 4,
    name: "Foto Paket 4",
    items: [
      "Wedding book 30×40 cm, 50 stranica",
      "Fotografiranje na vjenčanju, na lokaciji i u restoranu do 03:00",
    ],
  },
  {
    id: 5,
    name: "Foto Paket 5",
    items: [
      "Wedding book 30×40 cm, 80 stranica",
      "Fotografiranje na vjenčanju, na lokaciji i u restoranu do 03:00",
    ],
  },
  {
    id: 6,
    name: "Foto Paket 6",
    items: [
      "Wedding book 30×40 cm, 80 stranica + dva manja booka 15×20 cm",
      "Fotografiranje na vjenčanju, na lokaciji i u restoranu do 03:30",
    ],
  },
];

const videoPackages: Package[] = [
  {
    id: 1,
    name: "Video Paket 1",
    items: ["Uvodna špica + 1 spot", "Od 16:00 do 03:00", "2,5 sata montiranog materijala"],
  },
  {
    id: 2,
    name: "Video Paket 2",
    items: ["Uvodna špica + 1 spot", "Od 16:00 do 03:00", "3 sata montiranog materijala"],
  },
  {
    id: 3,
    name: "Video Paket 3",
    highlight: true,
    items: ["Uvodna špica + 1 spot", "Od 14:00 do 03:00", "3,5 sata montiranog materijala"],
  },
  {
    id: 4,
    name: "Video Paket 4",
    items: ["Uvodna špica + 1 spot", "Od 12:00 do 03:00", "4 sata montiranog materijala"],
  },
  {
    id: 5,
    name: "Video Paket 5",
    items: [
      "Uvodna špica + 1 spot",
      "Od 12:00 do 03:30",
      "4,5 sata montiranog materijala",
      "Dvije kamere (druga do 20:00)",
    ],
  },
  {
    id: 6,
    name: "Video Paket 6",
    items: [
      "Uvodna špica + 2 spota",
      "Od 12:00 do 03:30",
      "4,5 sata montiranog materijala",
      "Dvije kamere (druga do 20:00) i dron (do ulaska u restoran)",
    ],
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function PackagesList() {
  const [activeTab, setActiveTab] = useState<"foto" | "video">("foto");

  return (
    <section className="bg-white">

      {/* ── TABS ── */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex justify-center">
          {(["foto", "video"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-10 py-5 uppercase tracking-[0.4em] text-xs transition-colors duration-300 ${
                activeTab === tab
                  ? "text-black"
                  : "text-gray-500 hover:text-gray-600"
              }`}
            >
              {tab === "foto" ? "Foto paketi" : "Video paketi"}
              {activeTab === tab && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-black"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── PACKAGES ── */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Zajednički dio — jednom iznad paketa */}
            <div className="pb-8 border-b border-gray-200 max-w-2xl">
              <p className="text-sm font-medium text-gray-700 mb-4">
                {activeTab === "foto" ? "Svaki foto paket uključuje:" : "Svaki video paket uključuje:"}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 leading-relaxed">
                {(activeTab === "foto" ? fotoIncluded : videoIncluded).map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              {activeTab === "video" && (
                <p className="text-sm text-gray-500 leading-relaxed mt-4">
                  {videoIncludedNote}
                </p>
              )}
            </div>

            {(activeTab === "foto" ? fotoPackages : videoPackages).map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.07 }}
                className="border-b border-gray-200 py-16 relative"
              >
                {pkg.highlight && (
                  <span className="absolute top-16 right-0 uppercase tracking-[0.3em] text-[10px] text-gray-500">
                    Popularno
                  </span>
                )}

                <div className="grid md:grid-cols-[1fr_2fr] gap-12">

                  {/* Left */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light mb-4">
                      {pkg.name}
                    </h2>
                    <p className="text-sm font-medium text-gray-700 leading-relaxed">
                      {pkg.items[0]}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="space-y-4">
                    {pkg.items.slice(1).map((line, i) => (
                      <p key={i} className="text-sm text-gray-600 leading-relaxed">
                        {line}
                      </p>
                    ))}
                    <Link
                      href="/contact"
                      className="inline-block pt-4 uppercase tracking-[0.3em] text-sm border border-black px-8 py-3 hover:bg-black hover:text-white transition duration-500"
                    >
                      Zatraži ponudu
                    </Link>
                  </div>

                </div>
              </motion.div>
            ))}

            {/* Shared note — jednom na kraju */}
            <p className="text-xs text-gray-500 leading-relaxed pt-8 max-w-2xl">
              {sharedNote}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}