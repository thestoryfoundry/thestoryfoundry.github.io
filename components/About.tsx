"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionLabel from "./ui/SectionLabel";

type LineType = "prompt" | "output" | "success" | "blank" | "cursor";

interface TerminalLine {
  type: LineType;
  text?: string;
}

const TERMINAL_LINES: TerminalLine[] = [
  { type: "prompt", text: "whoami" },
  { type: "output", text: "Dixit Kumar — Software Developer at Kimbal, Noida" },
  { type: "blank" },
  { type: "prompt", text: "cat background.txt" },
  { type: "output", text: "B.Tech ECE, NSUT Delhi (2021–2025). Started with" },
  { type: "output", text: "DSA and competitive programming, moved to full-stack," },
  { type: "output", text: "now building firmware and delivering end-to-end" },
  { type: "output", text: "applications at Kimbal and exploring everthing about SaaS." },
  { type: "blank" },
  { type: "prompt", text: "./achievements --list" },
  { type: "success", text: "[+] Amazon ML: top 0.5% of 80,000+ applicants" },
  { type: "success", text: "[+] 900+ DSA problems solved" },
  { type: "success", text: "[+] CodeChef 3★ · 1600+ rating" },
  { type: "blank" },
  { type: "prompt", text: "ls skills/" },
  { type: "output", text: "web/     embedded/     ml/     tools/" },
  { type: "blank" },
  { type: "prompt", text: "cat skills/web" },
  { type: "output", text: "React  Next.js  TypeScript  Node.js  Express" },
  { type: "output", text: "MongoDB  Firebase  Tailwind  Framer Motion" },
  { type: "blank" },
  { type: "prompt", text: "cat skills/embedded" },
  { type: "output", text: "C  C++  C#  .NET  WPF  RTOS  UART  RL78" },
  { type: "blank" },
  { type: "prompt", text: "cat skills/ml" },
  { type: "output", text: "Python  PyTorch  Scikit-learn  Flask  AWS SageMaker" },
  { type: "blank" },
  { type: "prompt", text: "cat skills/tools" },
  { type: "output", text: "Git  GitHub  Docker  Postman  Vercel  Figma" },
  { type: "cursor" },
];

export default function About() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (terminalRef.current) {
      const lines = terminalRef.current.querySelectorAll(".term-line");
      gsap.fromTo(
        lines,
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.08,
          duration: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: terminalRef.current,
            start: "top 60%",
            end: "bottom 20%",
            scrub: false,
          },
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-16 md:py-32 px-6 md:px-12 max-w-6xl mx-auto flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start relative">

        {/* LEFT COLUMN */}
        <div className="md:sticky md:top-32 order-2 md:order-1 flex flex-col">
          <SectionLabel number="02">About</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mt-6">
            Who I Am
          </h2>
          <p className="text-text-muted text-lg leading-relaxed max-w-sm mt-6">
            Engineer by trade, builder by nature. I work across the stack &mdash; web products, embedded systems, and ML pipelines.
          </p>

          <div className="flex flex-col gap-3 mt-10">
            {["📍 Noida, India", "🎓 B.Tech ECE — NSUT 2025", "⚡ Currently at Kimbal"].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-surface border border-border rounded-full px-4 py-2 text-sm font-mono text-text-muted w-fit"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — TERMINAL */}
        <div className="order-1 md:order-2 w-full">
          <div className="md:hidden text-text-muted text-xs font-mono uppercase tracking-widest mb-4">
            &larr; Scroll to explore
          </div>

          <div
            ref={terminalRef}
            className="bg-[#0d0d0d] border border-border rounded-2xl overflow-hidden min-h-[300px] md:min-h-[520px] relative shadow-2xl"
          >
            {/* TERMINAL TITLEBAR */}
            <div className="bg-[#161616] px-4 py-3 flex items-center border-b border-border relative z-10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-xs text-text-muted ml-4">
                dixit@portfolio ~
              </span>
            </div>

            {/* TERMINAL BODY */}
            <div className="p-4 md:p-6 font-mono text-xs md:text-sm leading-6 md:leading-7 text-[#d4d4d4] relative z-10 overflow-x-auto">
              {TERMINAL_LINES.map((line, i) => (
                <div key={i} className="term-line opacity-0 flex whitespace-pre-wrap">
                  {line.type === "prompt" && (
                    <span className="mr-2 shrink-0">
                      <span className="text-[#4ec9b0]">dixit</span>
                      <span className="text-text-muted">@portfolio</span>
                      <span className="text-text-muted"> ~ </span>
                      <span className="text-[#dcdcaa]">$</span>
                    </span>
                  )}
                  {line.type === "prompt" && <span className="text-white">{line.text}</span>}

                  {line.type === "output" && <span className="text-[#9cdcfe]">{line.text}</span>}

                  {line.type === "success" && <span className="text-[#4ec9b0]">{line.text}</span>}

                  {line.type === "blank" && <div className="min-h-[1.5rem]" />}

                  {line.type === "cursor" && (
                    <span className="w-2.5 h-4 bg-white animate-[pulse_1s_ease-in-out_infinite] inline-block ml-1 mt-1" />
                  )}
                </div>
              ))}
            </div>

            {/* SCANLINE OVERLAY */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03] z-20"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
