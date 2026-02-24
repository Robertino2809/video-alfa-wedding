"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  "/images/webp/image23.webp",
  "/images/webp/image50.webp",
  "/images/webp/image87.webp",
];

export default function ScrollRevealGallery() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Fade timing za 3 slike (raspoređeno kroz scroll)
  const opacity1 = useTransform(scrollYProgress, [0, 0.33], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Slika 1 */}
        <motion.div style={{ opacity: opacity1 }} className="absolute inset-0">
          <Image
            src={images[0]}
            alt=""
            fill
            className="object-cover object-top"
            priority
          />
        </motion.div>

        {/* Slika 2 */}
        <motion.div style={{ opacity: opacity2 }} className="absolute inset-0">
          <Image
            src={images[1]}
            alt=""
            fill
            className="object-cover object-top"
          />
        </motion.div>

        {/* Slika 3 */}
        <motion.div style={{ opacity: opacity3 }} className="absolute inset-0">
          <Image
            src={images[2]}
            alt=""
            fill
            className="object-cover object-top"
          />
        </motion.div>

        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/20" />

      </div>
    </section>
  );
}