"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* =========================
   Counter Component
========================= */

function Counter({
  value,
  duration = 2000,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const progress = Math.min(
              (currentTime - startTime) / duration,
              1
            );

            const currentValue = Math.floor(progress * value);
            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{count}</span>;
}

/* =========================
   Stats Section
========================= */

export default function StatsSection() {
  const stats = [
    { value: 25, suffix: "+", label: "godina iskustva" },
    { value: 700, suffix: "+", label: "zadovoljnih mladenaca" },
    { value: 1, suffix: " cilj", label: "savršeno zabilježen trenutak" },
    { value: "∞", suffix: "", label: "uhvaćenih iskrenih trenutaka" },
  ];

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
            Naše brojke
          </p>
          <h2 className="text-4xl md:text-5xl font-light">
            Povjerenje koje traje godinama
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-center">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="text-5xl md:text-6xl font-light mb-4">
                {typeof stat.value === "number" ? (
                  <>
                    <Counter value={stat.value} />
                    {stat.suffix}
                  </>
                ) : (
                  stat.value
                )}
              </h3>

              <p className="uppercase tracking-[0.2em] text-xs text-gray-500">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}