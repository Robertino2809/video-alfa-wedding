"use client";

import { motion } from "framer-motion";

export default function FadeIn({
  children,
  className,
  style,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay }}
      viewport={{ once: true, margin: "-80px" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
