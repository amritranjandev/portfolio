"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorTrail() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 rounded-full bg-blue-500/20 blur-xl pointer-events-none z-[9998]"
      animate={{
        x: pos.x - 20,
        y: pos.y - 20,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
      }}
    />
  );
}