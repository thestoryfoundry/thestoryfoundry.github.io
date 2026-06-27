"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "text" | "click">("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const dotX = useSpring(cursorX, { stiffness: 2000, damping: 80 });
  const dotY = useSpring(cursorY, { stiffness: 2000, damping: 80 });
  const ringX = useSpring(cursorX, { stiffness: 300, damping: 40 });
  const ringY = useSpring(cursorY, { stiffness: 300, damping: 40 });

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window;
    if (!isTouchDevice && window.innerWidth > 768 && window.matchMedia("(pointer: fine)").matches) {
      setIsDesktop(true);
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setCursorState("click");
    const handleMouseUp = () => setCursorState("default");

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorType = target.closest("[data-cursor]")?.getAttribute("data-cursor");

      if (cursorType === "hover") setCursorState("hover");
      else if (cursorType === "text") setCursorState("text");
      else setCursorState("default");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isDesktop) return null;

  const dotVariants = {
    default: { scale: 1 },
    hover: { scale: 1 },
    text: { scale: 0.5 },
    click: { scale: 0.8 },
  };

  const ringVariants = {
    default: { scale: 1, opacity: 1, mixBlendMode: "difference" as const },
    hover: { scale: 2.5, opacity: 0.6, mixBlendMode: "difference" as const },
    text: { scale: 4, opacity: 0.3, mixBlendMode: "normal" as const },
    click: { scale: 1, opacity: 0.8, mixBlendMode: "difference" as const },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={dotVariants}
        animate={cursorState}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={ringVariants}
        animate={cursorState}
        transition={{ type: "spring", stiffness: 300, damping: 40 }}
      />
    </>
  );
}
