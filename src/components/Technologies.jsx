import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { RiJavascriptLine } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiPython, SiPandas } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'
import { SiMysql } from "react-icons/si";
import { BiLogoGithub } from 'react-icons/bi'  // For GitHub
import { FaGitAlt } from "react-icons/fa"; // For Git
import { DiDocker } from 'react-icons/di'      // For Docker
import { SiKubernetes } from 'react-icons/si'   // For Kubernetes
import { VscAzure } from "react-icons/vsc";
import { DiSpark } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { SiApachecassandra } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


import { motion } from "motion/react"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
      y: [10, -10],
      transition: {
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
      },
  }
})

const Technologies = () => {
// Define all unique technologies in a single array
const technologyIcons = [
  { name: "Python", icon: <SiPython className="text-7xl text-blue-500" />, duration: 2.0 },
  { name: "Pandas", icon: <SiPandas className="text-7xl text-green-600" />, duration: 2.2 },
  { name: "MySQL", icon: <SiMysql className="text-7xl text-blue-500" />, duration: 2.4 },
  { name: "PySpark", icon: <DiSpark className="text-7xl text-cyan-400" />, duration: 2.6 },
  { name: "Flask", icon: <SiFlask className="text-7xl text-gray-600" />, duration: 2.8 },
  { name: "MongoDB", icon: <SiMongodb className="text-7xl text-green-500" />, duration: 2.2 },
  { name: "Docker", icon: <DiDocker className="text-7xl text-blue-700" />, duration: 2.4 },
  { name: "Kubernetes", icon: <SiKubernetes className="text-7xl text-blue-600" />, duration: 2.6 },
  { name: "Git", icon: <FaGitAlt className="text-7xl text-black" />, duration: 2.8 },
  { name: "GitHub", icon: <BiLogoGithub className="text-7xl text-black" />, duration: 2.0 },
  { name: "Azure", icon: <VscAzure className="text-7xl text-blue-500" />, duration: 2.2 },
  { name: "Cassandra", icon: <SiApachecassandra className="text-7xl text-cyan-400" />, duration: 2.4 },
  { name: "Node.js", icon: <FaNode className="text-7xl text-green-500" />, duration: 2.6 },
  { name: "JavaScript", icon: <IoLogoJavascript className="text-7xl text-yellow-400" />, duration: 2.8 },
];

return (
  <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="flex flex-wrap items-center justify-center gap-4">
          {technologyIcons.map((tech, index) => (
              <motion.div 
                  key={index}
                  variants={iconVariants(tech.duration)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                  {tech.icon}
              </motion.div>
          ))}
      </motion.div>
  </div>
)
}

export default Technologies