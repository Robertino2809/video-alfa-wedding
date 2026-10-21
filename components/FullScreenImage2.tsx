"use client";

import ResponsiveImage from "@/components/ResponsiveImage";
import { motion } from "framer-motion";

export default function FullscreenImage() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Slow cinematic zoom */}
      <motion.div
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.08 }}
        transition={{ duration: 12, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <ResponsiveImage src="/images/webp/DSC_8883.webp" alt="Fotografija vjenčanja" />
      </motion.div>

      {/* Optional soft overlay */}
      <div className="absolute inset-0 bg-black/50" />
    </section>
  );
}