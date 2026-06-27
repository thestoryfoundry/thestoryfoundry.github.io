"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { skills } from "@/data/content";
import SectionLabel from "./ui/SectionLabel";

const SkillCloud = dynamic(() => import("./three/SkillCloud"), { ssr: false });

const flattenSkills = () => {
  const flattened: { name: string; category: "web" | "systems" | "ml" | "tools" }[] = [];
  Object.entries(skills).forEach(([cat, list]) => {
    list.forEach(name => {
      flattened.push({ name, category: cat as "web" | "systems" | "ml" | "tools" });
    });
  });
  return flattened;
};

export default function Skills() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [mounted, setMounted] = useState(false);
  const allSkills = flattenSkills();

  useEffect(() => {
    setMounted(true);
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="skills" className="py-16 md:py-32 px-6 md:px-12 max-w-6xl mx-auto flex flex-col justify-center border-t border-border">
      <SectionLabel number="03">Expertise</SectionLabel>
      <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mt-6 mb-10 md:mb-16">
        What I Work With
      </h2>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Canvas Wrapper */}
        <div className="w-full h-[300px] sm:h-[380px] md:h-[600px] md:w-2/3 relative">
          {mounted && isDesktop ? (
            <Canvas camera={{ position: [0, 0, 9], fov: 60 }}>
              <SkillCloud skills={allSkills} />
            </Canvas>
          ) : (
            <div className="flex flex-wrap gap-3 h-full content-center">
              {allSkills.map((s, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-border bg-surface"
                  style={{
                    color: s.category === 'web' ? '#60a5fa' :
                           s.category === 'systems' ? '#a78bfa' :
                           s.category === 'ml' ? '#34d399' : '#fb923c'
                  }}
                >
                  {s.name}
                </motion.span>
              ))}
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="w-full md:w-1/3 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-6">
          {[
            { color: "#60a5fa", label: "Web & Full Stack", count: skills.web.length },
            { color: "#a78bfa", label: "Low Latency Systems", count: skills.systems.length },
            { color: "#34d399", label: "Machine Learning", count: skills.ml.length },
            { color: "#fb923c", label: "Tools & Cloud", count: skills.tools.length },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-3 md:p-4 rounded-xl border border-border bg-surface">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full flex-shrink-0" style={{ background: item.color }} />
              <div className="min-w-0">
                <div className="text-white text-xs md:text-sm truncate">{item.label}</div>
                <div className="text-text-muted text-[10px] md:text-xs font-mono mt-0.5">{item.count} Skills</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
