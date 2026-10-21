"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

type GalleryImage = {
  src: string;
  alt: string;
  location?: string;
};

export default function GalleryGrid() {
  const containerRef = useRef(null);

  const images: GalleryImage[] = [
    { src: "/images/webp/image1.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image2.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image3.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image5.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image6.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image7.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image8.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image9.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image10.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image12.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image13.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image17.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image19.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image20.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image21.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image22.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image23.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image24.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image26.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image27.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image28.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image29.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image30.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image31.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image32.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image34.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image35.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image36.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image38.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image39.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image41.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image44.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image46.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image48.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image49.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image50.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image52.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image53.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image55.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image57.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image58.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image59.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image61.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image62.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image63.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image64.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image67.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image70.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image72.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image73.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image74.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image75.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image76.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image79.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image80.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image81.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image83.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image84.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image85.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image86.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image87.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image88.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image90.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image92.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image94.webp", alt: "Fotografija vjenčanja" },
    { src: "/images/webp/image95.webp", alt: "Fotografija vjenčanja" },
  ];

  // 3 kolone raspored
  const columns = useMemo(() => {
    const col1: GalleryImage[] = [];
    const col2: GalleryImage[] = [];
    const col3: GalleryImage[] = [];

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
          {columns[0].map((image) => {
            const index = images.indexOf(image);
            return (
              <ParallaxImage
                key={index}
                image={image}
                onClick={() => setSelectedIndex(index)}
              />
            );
          })}
        </motion.div>

        <motion.div style={{ y: y2 }} className="space-y-2">
          {columns[1].map((image) => {
            const index = images.indexOf(image);
            return (
              <ParallaxImage
                key={index}
                image={image}
                onClick={() => setSelectedIndex(index)}
              />
            );
          })}
        </motion.div>

        <motion.div style={{ y: y3 }} className="space-y-2">
          {columns[2].map((image) => {
            const index = images.indexOf(image);
            return (
              <ParallaxImage
                key={index}
                image={image}
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
              aria-label="Zatvori sliku"
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
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
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

function ParallaxImage({
  image,
  onClick,
}: {
  image: GalleryImage;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={1000}
        height={1400}
        className="w-full h-auto object-cover"
      />
    </motion.div>
  );
}