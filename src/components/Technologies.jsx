import React from 'react'
import { motion } from 'motion/react'

const techs = [
  { name:'Python', icon:'🐍', sub:'Primary language', bar:'sm-gold', w:'92%', bg:'rgba(232,160,32,0.1)' },
  { name:'Flask', icon:'Fl', sub:'Web framework', bar:'sm-gold', w:'88%', bg:'rgba(232,160,32,0.08)' },
  { name:'Pandas', icon:'Pd', sub:'Data manipulation', bar:'sm-teal', w:'90%', bg:'rgba(13,148,136,0.1)' },
  { name:'PySpark', icon:'✦', sub:'Big data processing', bar:'sm-ember', w:'78%', bg:'rgba(194,65,12,0.1)' },
  { name:'Node.js', icon:'⬡', sub:'Learning · Backend', bar:'sm-teal', w:'60%', bg:'rgba(20,184,166,0.1)' },
  { name:'JavaScript', icon:'JS', sub:'Scripting', bar:'sm-gold', w:'65%', bg:'rgba(232,160,32,0.08)' },
]
const infra = [
  { name:'MongoDB', icon:'🍃', sub:'NoSQL database', bar:'sm-teal', w:'85%', bg:'rgba(13,148,136,0.1)' },
  { name:'MySQL', icon:'🗃', sub:'Relational DB', bar:'sm-gold', w:'88%', bg:'rgba(232,160,32,0.08)' },
  { name:'Cassandra', icon:'◈', sub:'Distributed DB', bar:'sm-teal', w:'70%', bg:'rgba(13,148,136,0.08)' },
  { name:'Docker', icon:'🐳', sub:'Containerization', bar:'sm-teal', w:'80%', bg:'rgba(59,130,246,0.1)' },
  { name:'Kubernetes', icon:'☸', sub:'Orchestration', bar:'sm-ember', w:'65%', bg:'rgba(59,130,246,0.08)' },
  { name:'Azure', icon:'☁', sub:'Cloud platform', bar:'sm-teal', w:'72%', bg:'rgba(59,130,246,0.08)' },
]

const SkillRow = ({ s, i }) => (
  <motion.div className="skill-row" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05,duration:0.5}}>
    <div className="skill-icon-box" style={{background:s.bg}}>{s.icon}</div>
    <div className="skill-info"><div className="skill-name">{s.name}</div><div className="skill-sub">{s.sub}</div></div>
    <div className="skill-meter"><div className="skill-meter-bg"><div className={s.bar} style={{width:s.w}} /></div></div>
  </motion.div>
)

const Technologies = () => (
  <section id="skills" className="section-base">
    <div className="section-header">
      <span className="section-number">02</span>
      <h2 className="section-title">Technologies</h2>
      <span className="section-rule" />
    </div>
    <div className="skills-layout">
      <div>
        <div className="skill-col-title">Core Stack</div>
        <div className="skill-list">{techs.map((s,i) => <SkillRow key={s.name} s={s} i={i} />)}</div>
      </div>
      <div>
        <div className="skill-col-title">Infra &amp; Data</div>
        <div className="skill-list">{infra.map((s,i) => <SkillRow key={s.name} s={s} i={i+6} />)}</div>
      </div>
    </div>
  </section>
)
export default Technologies
