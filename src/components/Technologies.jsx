import React from 'react'
import { motion } from "motion/react"
import { SiPython, SiPandas, SiMysql, SiFlask, SiMongodb, SiKubernetes, SiApachecassandra } from 'react-icons/si'
import { DiSpark, DiDocker } from 'react-icons/di'
import { FaGitAlt, FaNode } from 'react-icons/fa'
import { BiLogoGithub } from 'react-icons/bi'
import { VscAzure } from 'react-icons/vsc'
import { IoLogoJavascript } from 'react-icons/io5'

const tech = [
  { name: "Python", icon: <SiPython />, color: "#3b82f6", glow: "#3b82f630" },
  { name: "Flask", icon: <SiFlask />, color: "#e2e8f0", glow: "#e2e8f020" },
  { name: "Pandas", icon: <SiPandas />, color: "#4ade80", glow: "#4ade8030" },
  { name: "PySpark", icon: <DiSpark />, color: "#f97316", glow: "#f9731630" },
  { name: "MySQL", icon: <SiMysql />, color: "#38bdf8", glow: "#38bdf830" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#22c55e", glow: "#22c55e30" },
  { name: "Docker", icon: <DiDocker />, color: "#60a5fa", glow: "#60a5fa30" },
  { name: "Kubernetes", icon: <SiKubernetes />, color: "#818cf8", glow: "#818cf830" },
  { name: "Cassandra", icon: <SiApachecassandra />, color: "#67e8f9", glow: "#67e8f930" },
  { name: "Azure", icon: <VscAzure />, color: "#a78bfa", glow: "#a78bfa30" },
  { name: "Git", icon: <FaGitAlt />, color: "#f87171", glow: "#f8717130" },
  { name: "GitHub", icon: <BiLogoGithub />, color: "#e2e8f0", glow: "#e2e8f020" },
  { name: "Node.js", icon: <FaNode />, color: "#86efac", glow: "#86efac30" },
  { name: "JavaScript", icon: <IoLogoJavascript />, color: "#fde047", glow: "#fde04730" },
]

const TechCard = ({ item, index }) => (
  <motion.div
    className="tech-card"
    style={{ '--glow': item.glow, '--accent': item.color }}
    initial={{ opacity: 0, scale: 0.7, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ scale: 1.12, y: -8 }}
    animate={{
      y: [0, -5, 0],
    }}
    // stagger float animation
    style={{
      '--glow': item.glow,
      '--accent': item.color,
      animationDelay: `${index * 0.3}s`,
    }}
  >
    <div className="tech-icon" style={{ color: item.color }}>{item.icon}</div>
    <div className="tech-name">{item.name}</div>
  </motion.div>
)

const Technologies = () => {
  return (
    <section id="skills" className="section-base">
      <div className="container mx-auto px-8">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-number">02</span>
          <h2 className="section-title">Technologies</h2>
        </motion.div>

        <div className="tech-grid">
          {tech.map((item, i) => (
            <TechCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
