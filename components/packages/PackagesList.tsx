"use client";

import { useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ─── SHARED TEXT ──────────────────────────────────────────────────────────────

type Tab = "foto" | "video" | "light-show";

const tabs: { id: Tab; label: string }[] = [
  { id: "foto", label: "Foto paketi" },
  { id: "video", label: "Video paketi" },
  { id: "light-show", label: "Light show" },
];

// Zajednički tekst iznad paketa, po odlomcima.
const intro: Record<Tab, string[]> = {
  foto: [
    "Svaki foto paket uključuje fotografiranje na dan vjenčanja, photo session na lokaciji koju zajedno dogovorimo i izradu kožnog wedding booka. Fotografije za book odabiremo i obrađujemo mi, a zatim od njih slažemo stranice knjige koja ide u tisak. Izgled korica birate sami. Sve fotografije i stranice booka dobivate i na USB-u.",
    "Paketi se razlikuju po veličini booka, broju stranica i dokad ostajemo s vama na vjenčanju.",
  ],
  video: [
    "Snimamo dan prema terminu iz paketa i od snimljenog materijala montiramo film: uvodnu špicu, glavni spot snimljen na lokaciji koju odaberete i ostatak dana. Film je u Full HD rezoluciji i dobivate ga na USB-u.",
    "Paketi se razlikuju po tome kad počinjemo snimati, koliko traje montirani film i s koliko kamera snimamo.",
    "Dodatne izmjene ili skraćivanje filma naplaćujemo prema utrošenom vremenu.",
  ],
  "light-show": [
    "Light show radimo za prvi ples i za rezanje torte, a cijelu salu osvjetljavamo u bojama tijekom večeri.",
  ],
};

const sharedNote = [
  "Stil fotografiranja, montaže i izgled booka su naši, a vaše želje dogovaramo unaprijed.",
  "Sve detalje dogovaramo u studiju u Slatini, Braće Radić 13, uz prethodnu najavu.",
];

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
      "Wedding book 30×30 cm, 20 listova / 40 stranica",
      "Fotografiranje na vjenčanju i na lokaciji",
      "Ne uključuje fotografiranje okupljanja kod kuće ni u restoranu",
    ],
  },
  {
    id: 2,
    name: "Foto Paket 2",
    items: [
      "Wedding book 30×30 cm, 30 listova / 60 stranica",
      "Fotografiranje na vjenčanju i na lokaciji",
      "Ne uključuje fotografiranje okupljanja kod kuće ni u restoranu",
    ],
  },
  {
    id: 3,
    name: "Foto Paket 3",
    highlight: true,
    items: [
      "Wedding book 30×40 cm, 20 listova / 40 stranica",
      "Fotografiranje na vjenčanju, na lokaciji i u restoranu do večere",
      "Ne uključuje fotografiranje nakon večere",
    ],
  },
  {
    id: 4,
    name: "Foto Paket 4",
    items: [
      "Wedding book 30×40 cm, 30 listova / 50 stranica",
      "Fotografiranje na vjenčanju, na lokaciji i u restoranu do 03:00",
    ],
  },
  {
    id: 5,
    name: "Foto Paket 5",
    items: [
      "Wedding book 30×40 cm, 40 listova / 80 stranica",
      "Fotografiranje na vjenčanju, na lokaciji i u restoranu do 03:00",
    ],
  },
  {
    id: 6,
    name: "Foto Paket 6",
    items: [
      "Wedding book 30×40 cm, 40 listova / 80 stranica, uz dva dodatna booka 15×20 cm",
      "Fotografiranje na vjenčanju, na lokaciji i u restoranu do 03:30",
    ],
  },
];

const videoPackages: Package[] = [
  {
    id: 1,
    name: "Video Paket 1",
    items: ["Uvodna špica + 1 spot", "Snimamo od 16:00 do 03:00", "Montirani film od 2,5 sata"],
  },
  {
    id: 2,
    name: "Video Paket 2",
    items: ["Uvodna špica + 1 spot", "Snimamo od 16:00 do 03:00", "Montirani film od 3 sata"],
  },
  {
    id: 3,
    name: "Video Paket 3",
    highlight: true,
    items: ["Uvodna špica + 1 spot", "Snimamo od 14:00 do 03:00", "Montirani film od 3,5 sata"],
  },
  {
    id: 4,
    name: "Video Paket 4",
    items: ["Uvodna špica + 1 spot", "Snimamo od 12:00 do 03:00", "Montirani film od 4 sata"],
  },
  {
    id: 5,
    name: "Video Paket 5",
    items: [
      "Uvodna špica + 1 spot",
      "Snimamo od 12:00 do 03:30",
      "Montirani film od 4,5 sata",
      "Dvije kamere: prva od 12:00 do 03:30, druga od 12:00 do 20:00",
    ],
  },
  {
    id: 6,
    name: "Video Paket 6",
    items: [
      "Uvodna špica + 1 spot",
      "Snimamo od 12:00 do 03:30",
      "Montirani film od 4,5 sata",
      "Dvije kamere: prva od 12:00 do 03:30, druga od 12:00 do 20:00",
      "Dron od 12:00 do ulaska u restoran",
    ],
  },
];

const lightShowPackages: Package[] = [
  {
    id: 1,
    name: "Light show",
    items: [
      "Prvi ples: niski dim, 4 prskalice i balončići",
      "Rasvjeta i bojanje cijele sale",
      "Torta: niski dim i 2 prskalice",
    ],
  },
];

const packagesByTab: Record<Tab, Package[]> = {
  foto: fotoPackages,
  video: videoPackages,
  "light-show": lightShowPackages,
};

function isTab(value: string | null): value is Tab {
  return tabs.some((t) => t.id === value);
}

function subscribeToUrl(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function PackagesList() {
  // Kartica iz URL-a (/packages/?tab=video), npr. s gumba na početnoj.
  // Na serveru (statički HTML) uvijek je "foto".
  const urlTab = useSyncExternalStore(
    subscribeToUrl,
    () => new URLSearchParams(window.location.search).get("tab"),
    () => null
  );
  const [pickedTab, setPickedTab] = useState<Tab | null>(null);
  const activeTab: Tab = pickedTab ?? (isTab(urlTab) ? urlTab : "foto");

  const selectTab = (tab: Tab) => {
    setPickedTab(tab);
    const url = new URL(window.location.href);
    url.searchParams.set("tab", tab);
    window.history.replaceState(null, "", url);
  };

  return (
    <section className="bg-white">

      {/* ── TABS ── */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-center">
          {tabs.map(({ id: tab, label }) => (
            <button
              key={tab}
              onClick={() => selectTab(tab)}
              className={`relative flex-1 sm:flex-none px-2 sm:px-10 py-5 uppercase tracking-[0.25em] sm:tracking-[0.4em] text-xs transition-colors duration-300 ${
                activeTab === tab
                  ? "text-black"
                  : "text-gray-500 hover:text-gray-600"
              }`}
            >
              {label}
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
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                {intro[activeTab].map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {packagesByTab[activeTab].map((pkg, index) => (
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
            <div className="space-y-2 text-xs text-gray-500 leading-relaxed pt-8 max-w-2xl">
              {sharedNote.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}