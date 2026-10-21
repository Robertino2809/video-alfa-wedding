"use client";

import { motion } from "framer-motion";

export default function Citat({ children }: { children: React.ReactNode }) {
  return (
    <motion.figure
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto my-20 md:my-28 text-center"
    >
      <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-black [&>p]:inline">
        “{children}”
      </blockquote>
      <div className="w-16 h-[1px] bg-black mx-auto mt-8" />
    </motion.figure>
  );
}
