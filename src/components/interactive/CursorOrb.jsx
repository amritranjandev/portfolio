"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorOrb() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setIsHovering(true);
      setTimeout(() => setIsHovering(false), 150);
    };

    const addHoverEvents = () => {
      document.querySelectorAll("[data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", handleClick);

    addHoverEvents();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 rounded-full bg-blue-400 pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: pos.x - 10,
        y: pos.y - 10,
        scale: isHovering ? 2 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
    />
  );
}