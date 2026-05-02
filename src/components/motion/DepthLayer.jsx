"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function DepthLayer({ children, speed = 0.5 }) {
  const { scrollY } = useScroll();

  // transform scroll into movement
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);

  return (
    <motion.div style={{ y }} className="relative w-full">
      {children}
    </motion.div>
  );
}