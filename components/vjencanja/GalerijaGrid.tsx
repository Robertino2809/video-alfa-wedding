"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type GalerijaImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function GalerijaGrid({ images }: { images: GalerijaImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const next = () =>
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
  const prev = () =>
    setSelectedIndex((prev) =>
      prev === null ? null : prev === 0 ? images.length - 1 : prev - 1
    );

  // ESC + arrow keys
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      <div className="my-16 md:my-20 columns-1 sm:columns-2 md:columns-3 gap-2">
        {images.map((image, index) => (
          <motion.button
            key={image.src + index}
            type="button"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: (index % 3) * 0.15 }}
            viewport={{ once: true }}
            onClick={() => setSelectedIndex(index)}
            aria-label={`Povećaj sliku: ${image.alt}`}
            className="block w-full mb-2 break-inside-avoid overflow-hidden cursor-pointer"
          >
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.6 }}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.button>
        ))}
      </div>

      {/* FULLSCREEN SLIDER */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-8 text-white text-4xl z-50 hover:opacity-70 transition"
              aria-label="Zatvori sliku"
            >
              ×
            </button>

            <div
              className="absolute left-0 top-0 w-1/2 h-full cursor-w-resize z-40"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            />
            <div
              className="absolute right-0 top-0 w-1/2 h-full cursor-e-resize z-40"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            />

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
