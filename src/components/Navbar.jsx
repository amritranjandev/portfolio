"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <motion.div
          data-cursor
          whileHover={{ scale: 1.1 }}
          className="font-bold text-xl text-white tracking-wide"
        >
          Ar
        </motion.div>

        {/* ICONS */}
        <div className="flex items-center gap-6 text-xl text-white/70">
          
          <motion.a
            data-cursor
            href="https://www.linkedin.com/in/amrit-ranjan-professional/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#0A66C2" }}
            className="transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            data-cursor
            href="https://medium.com/@amritranjanamc"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#ffffff" }}
            className="transition"
          >
            <FaMedium />
          </motion.a>

          <motion.a
            data-cursor
            href="https://github.com/amritranjandev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#ffffff" }}
            className="transition"
          >
            <FaGithub />
          </motion.a>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;