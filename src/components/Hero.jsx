"use client";

import React, { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants/index.js";
import tech from "../assets/undraw_ai_agent_pdkp.svg";
import resume from "../assets/amrit_ranjan_res.pdf";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: delay,
    },
  },
});

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="relative border-b border-neutral-900 pb-4 lg:mb-35 overflow-hidden">
      
      {/* 🌊 BACKGROUND (ALIVE) */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, #1a1a40, #000)",
            "radial-gradient(circle at 80% 60%, #2a0a5e, #000)",
            "radial-gradient(circle at 40% 80%, #0a1f44, #000)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="flex flex-wrap">
        
        {/* LEFT */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            
            {/* 👇 Add interaction */}
            <motion.h1
              data-cursor
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white"
              animate={{
                y: [0, -5, 0], // subtle breathing
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Amrit Ranjan
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Python Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-white/70"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col items-center">

            <motion.div
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
              }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col items-center"
            >
              
              {/* 🧊 FLOATING IMAGE */}
              <motion.img
                src={tech}
                alt="Backend Developer"
                className="rounded-xl w-3/4 h-auto"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* BUTTON */}
              <motion.button
                data-cursor
                onClick={() => setIsOpen(true)}
                className="mt-6 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold py-3 px-5 rounded-lg shadow-md flex items-center space-x-2"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Resume</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative z-10 bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-4 text-black text-3xl"
            >
              &times;
            </button>

            <iframe
              src={resume}
              title="Resume"
              className="w-full h-[600px] rounded-lg"
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;