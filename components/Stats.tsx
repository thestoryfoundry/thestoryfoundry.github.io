"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { stats } from "@/data/content";

function StatCounter({ value, label }: { value: string, label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);

  const isDecimal = value.includes(".");
  const suffix = value.replace(/[\d.]/g, "");
  const numValue = parseFloat(value.replace(/[^\d.]/g, ""));

  const rounded = useTransform(count, (latest) => {
    return (isDecimal ? latest.toFixed(1) : Math.round(latest)) + suffix;
  });

  useEffect(() => {
    if (isInView) {
      animate(count, numValue, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, numValue]);

  return (
    <div ref={ref} className="flex flex-col items-center md:items-start text-center md:text-left">
      <motion.div className="text-4xl md:text-6xl font-light tracking-tight text-white">
        {rounded}
      </motion.div>
      <div className="text-text-muted text-sm font-mono mt-2 tracking-wider uppercase">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="bg-surface border-y border-border py-10 md:py-16 px-6"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
        {stats.map((stat, i) => (
          <StatCounter key={i} value={stat.value} label={stat.label} />
        ))}
      </div>
    </motion.section>
  );
}
