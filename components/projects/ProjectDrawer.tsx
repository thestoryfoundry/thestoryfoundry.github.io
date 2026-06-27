"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/content";
import Badge from "../ui/Badge";
import { useLenisContext } from "@/providers/LenisProvider";

const PREVIEW_IMAGES: Record<string, string> = {
  travsy: "/travsy-preview.png",
  saarthi: "/saarthi-preview.png",
};

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDrawer({ project, isOpen, onClose }: ProjectDrawerProps) {
  const lenis = useLenisContext();

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [isOpen, lenis]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm cursor-pointer"
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed bottom-0 left-0 right-0 z-[110] h-[92vh] md:h-[88vh] bg-[#111] border-t border-border rounded-t-3xl flex flex-col overflow-hidden"
          >
            {/* ── Top bar: drag handle + close ── */}
            <div className="relative flex items-center justify-between px-6 md:px-10 pt-4 pb-3 flex-shrink-0 border-b border-border/40">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/10 rounded-full" />
              <span className="opacity-0 text-xs select-none">x</span>
              <button
                onClick={onClose}
                className="p-2 rounded-full border border-border text-text-muted hover:text-white hover:border-white/20 transition-colors"
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* ── Scrollable body — single scroll container, always works ── */}
            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
              <div className="max-w-5xl mx-auto px-6 md:px-10 py-8">

                {/* Title + year */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <h3 className="text-3xl md:text-4xl font-light text-white leading-tight">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-text-muted border border-border px-2 py-1 rounded-md flex-shrink-0 mt-1">
                    {project.year}
                  </span>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <Badge key={i} variant="mono">{t}</Badge>
                  ))}
                </div>

                {/* Two-column on desktop when preview exists, single on mobile */}
                <div className="flex flex-col md:flex-row gap-8 md:items-start">

                  {/* Preview image — left on desktop, full-width on mobile */}
                  {PREVIEW_IMAGES[project.id] && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.45 }}
                      className="relative w-full md:w-[44%] md:flex-shrink-0 rounded-2xl overflow-hidden border border-border"
                      style={{ aspectRatio: "16/10" }}
                    >
                      <Image
                        src={PREVIEW_IMAGES[project.id]}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 44vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111]/50 via-transparent to-transparent" />
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs font-mono text-white hover:bg-black/80 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Open live site ↗
                        </a>
                      )}
                    </motion.div>
                  )}

                  {/* Description + CTAs — right on desktop */}
                  <div className="flex-1 flex flex-col gap-6">
                    <p className="text-text-secondary leading-relaxed text-base md:text-lg whitespace-pre-wrap">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-1">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white/90 transition-colors flex items-center gap-2"
                        >
                          Live Demo
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="border border-border text-text-secondary px-6 py-2.5 rounded-full text-sm hover:bg-white/5 hover:text-white transition-colors flex items-center gap-2"
                        >
                          GitHub
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom padding so last item isn't flush with edge */}
                <div className="h-8" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
