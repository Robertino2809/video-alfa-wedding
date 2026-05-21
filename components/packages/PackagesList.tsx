"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ─── SHARED TEXT ──────────────────────────────────────────────────────────────

const fotoShared = [
  "Kod wedding book-a se biraju fotografije, te računalo obrađuju i kreiraju stranice koje se printaju i stvaraju dojam knjige u kojoj se nalaze uspomene vašeg vjenčanog dana.",
  "Studio VIDEO ALFA zadržava pravo potpune kreativnosti prilikom izrade wedding book-a, kao i pravo stilskog izražaja prilikom fotografiranja na terenu.",
  "Ovaj paket se odnosi na fotografiranje i izradu wedding book-a te arhiviranje fotografija i stranica book-a na usb.",
];

const fotoSharedNote =
  "Svi mogući dogovori oko fotografiranja, izrade book-a, izbora korisnih stranica, lokacije i sl. dogovaramo isključivo u našem studiju VIDEO ALFA u Slatini, Braće Radić 13 (UZ PRETHODNI DOGOVOR).";

const videoShared = [
  "Odabir glazbe za uvod i spot po želji mladenaca.",
  "Ubacivanje u uvod fotografija iz djetinjstva (do 10 kom.)",
  "Snimanje na lokaciji za spot po izboru mladenaca.",
  "U full HD kvaliteti 16:9 (widescreen)",
  "Dodatna montaža ili želje mladenaca za izmjenom ili skraćivanjem snimke dodatno se naplaćuje ovisno o utrošenom vremenu.",
];

const videoSharedNote =
  "Foto studio Video Alfa zadržava pravo potpune kreativnosti prilikom izrade videosnimke, kao i pravo stilskog izražaja prilikom snimanja na terenu.";

// ─── DATA ────────────────────────────────────────────────────────────────────

const fotoPackages = [
  {
    id: 1,
    name: "Foto Paket 1",
    book: "Kožni wedding book 30×30 cm (20 listova / 40 stranica)",
    extra: null,
    coverage: "Fotografiranje se odnosi na fotografiranje na vjenčanju, te fotografiranje na lokaciji uz dogovor.",
    restriction: "Ovaj paket se ne odnosi na fotografiranje kod kuće na okupljanju, i ne odnosi se na fotografiranje u restoranu.",
  },
  {
    id: 2,
    name: "Foto Paket 2",
    book: "Kožni wedding book 30×30 cm (30 listova / 60 stranica)",
    extra: null,
    coverage: "Fotografiranje se odnosi na fotografiranje na vjenčanju, te fotografiranje na lokaciji uz dogovor.",
    restriction: "Ovaj paket se ne odnosi na fotografiranje kod kuće na okupljanju, i ne odnosi se na fotografiranje u restoranu.",
  },
  {
    id: 3,
    name: "Foto Paket 3",
    book: "Kožni wedding book 30×40 cm (20 listova / 40 stranica)",
    extra: null,
    highlight: true,
    coverage: "Fotografiranje se odnosi na fotografiranje na vjenčanju, te fotografiranje na lokaciji uz dogovor i u restoranu do večere.",
    restriction: "Ovaj paket se ne odnosi na fotografiranje poslije večere.",
  },
  {
    id: 4,
    name: "Foto Paket 4",
    book: "Kožni wedding book 30×40 cm (30 listova / 50 stranica)",
    extra: null,
    coverage: "Fotografiranje se odnosi na fotografiranje na vjenčanju, te fotografiranje na lokaciji uz dogovor i u restoranu do 3:00h ujutro.",
    restriction: null,
  },
  {
    id: 5,
    name: "Foto Paket 5",
    book: "Kožni wedding book 30×40 cm (40 listova / 80 stranica)",
    extra: null,
    coverage: "Fotografiranje se odnosi na fotografiranje na vjenčanju, te fotografiranje na lokaciji uz dogovor i u restoranu do 3:00h ujutro.",
    restriction: null,
  },
  {
    id: 6,
    name: "Foto Paket 6",
    book: "Kožni wedding book 30×40 cm (40 listova / 80 stranica)",
    extra: "te dodatna dva wedding book-a 15×20 cm",
    coverage: "Fotografiranje se odnosi na fotografiranje na vjenčanju, te fotografiranje na lokaciji uz dogovor i u restoranu do 3:30h ujutro.",
    restriction: null,
  },
];

const videoPackages = [
  {
    id: 1,
    name: "Video Paket 1",
    spots: "Uvodna špica + 1 glavni spot",
    schedule: "OD 16:00 SATI na dan vjenčanja i ostaje u svatovima do 03:00 sata sljedećeg dana.",
    material: "Te na taj način kreira i snima ukupno 2,5 sata materijala koji se računalno obrađuje, dodaje uvod i spot i arhivira na usb stick.",
    cameras: null,
  },
  {
    id: 2,
    name: "Video Paket 2",
    spots: "Uvodna špica + 1 glavni spot",
    schedule: "OD 16:00 SATI na dan vjenčanja i ostaje u svatovima do 03:00 sata sljedećeg dana.",
    material: "Te na taj način kreira i snima ukupno 3 sata materijala koji se računalno obrađuje, dodaje uvod i spot i arhivira na usb stick.",
    cameras: null,
  },
  {
    id: 3,
    name: "Video Paket 3",
    spots: "Uvodna špica + 1 glavni spot",
    highlight: true,
    schedule: "OD 14:00 SATI na dan vjenčanja i ostaje u svatovima do 03:00 sata sljedećeg dana.",
    material: "Te na taj način kreira i snima ukupno 3,5 sata materijala koji se računalno obrađuje, dodaje uvod i spot i arhivira na usb stick.",
    cameras: null,
  },
  {
    id: 4,
    name: "Video Paket 4",
    spots: "Uvodna špica + 1 glavni spot",
    schedule: "OD 12:00 SATI na dan vjenčanja i ostaje u svatovima do 03:00 sata sljedećeg dana.",
    material: "Te na taj način kreira i snima ukupno 4 sata materijala koji se računalno obrađuje, dodaje uvod i spot i arhivira na usb stick.",
    cameras: null,
  },
  {
    id: 5,
    name: "Video Paket 5",
    spots: "Uvodna špica + 1 glavni spot",
    schedule: "OD 12:00 SATI na dan vjenčanja i ostaje u svatovima do 03:30 sata sljedećeg dana.",
    material: "Te na taj način kreira i snima ukupno 4,5 sata materijala koji se računalno obrađuje, dodaje uvod i spot i arhivira na usb stick.",
    cameras: "Ovaj paket se odnosi na videosnimanje sa dvije kamere.\nKamerman 1 ostaje od 12:00h do 03:30h\nKamerman 2 ostaje od 12:00h do 20:00h",
  },
  {
    id: 6,
    name: "Video Paket 6",
    spots: "Uvodna špica + 2 spota",
    schedule: "OD 12:00 SATI na dan vjenčanja i ostaje u svatovima do 03:30 sata sljedećeg dana.",
    material: "Te na taj način kreira i snima ukupno 4,5 sata materijala koji se računalno obrađuje, dodaje uvod i spot i arhivira na usb stick.",
    cameras: "Ovaj paket se odnosi na videosnimanje sa dvije kamere i dronom.\nKamerman 1 ostaje od 12:00h do 03:30h\nKamerman 2 ostaje od 12:00h do 20:00h\nSnimatelj sa dronom ostaje od 12:00h do ulaska u restoran",
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
                  : "text-gray-400 hover:text-gray-600"
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

          {/* ── FOTO ── */}
          {activeTab === "foto" ? (
            <motion.div
              key="foto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {fotoPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.07 }}
                  className="border-b border-gray-200 py-16 relative"
                >
                  {pkg.highlight && (
                    <span className="absolute top-16 right-0 uppercase tracking-[0.3em] text-[10px] text-gray-400">
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
                        {pkg.book}
                      </p>
                      {pkg.extra && (
                        <p className="text-sm text-gray-500 mt-1">
                          {pkg.extra}
                        </p>
                      )}
                    </div>

                    {/* Right */}
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">
                        Izgled vanjskih stranica po želji mladenaca
                      </p>
                      {fotoShared.map((line, i) => (
                        <p key={i} className="text-sm text-gray-600 leading-relaxed">
                          {line}
                        </p>
                      ))}
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {pkg.coverage}
                      </p>
                      {pkg.restriction && (
                        <p className="text-sm text-gray-500 italic leading-relaxed">
                          {pkg.restriction}
                        </p>
                      )}
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
              <p className="text-xs text-gray-400 leading-relaxed pt-8 max-w-2xl">
                {fotoSharedNote}
              </p>
            </motion.div>

          ) : (

            /* ── VIDEO ── */
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {videoPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.07 }}
                  className="border-b border-gray-200 py-16 relative"
                >
                  {pkg.highlight && (
                    <span className="absolute top-16 right-0 uppercase tracking-[0.3em] text-[10px] text-gray-400">
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
                        {pkg.spots}
                      </p>
                    </div>

                    {/* Right */}
                    <div className="space-y-4">
                      {videoShared.slice(0, 3).map((line, i) => (
                        <p key={i} className="text-sm text-gray-600 leading-relaxed">
                          {line}
                        </p>
                      ))}
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {pkg.schedule}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {pkg.material}
                      </p>
                      {videoShared.slice(3).map((line, i) => (
                        <p key={i} className="text-sm text-gray-600 leading-relaxed">
                          {line}
                        </p>
                      ))}
                      {pkg.cameras && (
                        <div className="pt-2">
                          {pkg.cameras.split("\n").map((line, i) => (
                            <p key={i} className="text-sm text-gray-600 leading-relaxed">
                              {line}
                            </p>
                          ))}
                        </div>
                      )}
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
              <p className="text-xs text-gray-400 leading-relaxed pt-8 max-w-2xl">
                {videoSharedNote}
              </p>
            </motion.div>

          )}
        </AnimatePresence>
      </div>

    </section>
  );
}