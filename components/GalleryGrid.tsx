"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export default function GalleryGrid() {
  const containerRef = useRef(null);

  const images = Array.from({ length: 50 }, (_, i) =>
    `/images/webp/image${i + 1}.webp`
  );

  // 3 kolone raspored
  const columns = useMemo(() => {
    const col1: string[] = [];
    const col2: string[] = [];
    const col3: string[] = [];

    images.forEach((img, i) => {
      if (i % 3 === 0) col1.push(img);
      else if (i % 3 === 1) col2.push(img);
      else col3.push(img);
    });

    return [col1, col2, col3];
  }, [images]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // ESC + arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      }

      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev === null
            ? null
            : (prev + 1) % images.length
        );
      }

      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === null
            ? null
            : prev === 0
            ? images.length - 1
            : prev - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <>
      <div
        ref={containerRef}
        className="max-w-[2000px] mx-auto px-8 py-40 grid grid-cols-1 md:grid-cols-3 gap-2"
      >
        <motion.div style={{ y: y1 }} className="space-y-2">
          {columns[0].map((src) => {
            const index = images.indexOf(src);
            return (
              <ParallaxImage
                key={index}
                src={src}
                onClick={() => setSelectedIndex(index)}
              />
            );
          })}
        </motion.div>

        <motion.div style={{ y: y2 }} className="space-y-2">
          {columns[1].map((src) => {
            const index = images.indexOf(src);
            return (
              <ParallaxImage
                key={index}
                src={src}
                onClick={() => setSelectedIndex(index)}
              />
            );
          })}
        </motion.div>

        <motion.div style={{ y: y3 }} className="space-y-2">
          {columns[2].map((src) => {
            const index = images.indexOf(src);
            return (
              <ParallaxImage
                key={index}
                src={src}
                onClick={() => setSelectedIndex(index)}
              />
            );
          })}
        </motion.div>
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
            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-8 text-white text-4xl z-50 hover:opacity-70 transition"
            >
              ×
            </button>

            {/* Left click zone */}
            <div
              className="absolute left-0 top-0 w-1/2 h-full cursor-w-resize z-40"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  selectedIndex === 0
                    ? images.length - 1
                    : selectedIndex - 1
                );
              }}
            />

            {/* Right click zone */}
            <div
              className="absolute right-0 top-0 w-1/2 h-full cursor-e-resize z-40"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  (selectedIndex + 1) % images.length
                );
              }}
            />

            {/* Image */}
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
                src={images[selectedIndex]}
                alt="Fullscreen"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ParallaxImage({ src, onClick }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={src}
        alt=""
        width={1000}
        height={1400}
        className="w-full h-auto object-cover"
      />
    </motion.div>
  );
}