import { motion } from 'framer-motion'
import { Code2, Globe, Shield, Wrench } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { skillCategories } from '../../data/portfolio'

const ICON_MAP = { Code2, Globe, Shield, Wrench }

const COLOR_MAP = {
  accent: {
    icon: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
    hoverBorder: 'hover:border-accent/40',
    tag: 'bg-accent/8 border-accent/20 text-accent',
  },
  blue: {
    icon: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    hoverBorder: 'hover:border-blue-500/40',
    tag: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  },
  red: {
    icon: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    hoverBorder: 'hover:border-red-500/40',
    tag: 'bg-red-500/10 border-red-500/20 text-red-400',
  },
  purple: {
    icon: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    hoverBorder: 'hover:border-purple-500/40',
    tag: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  },
}

function SkillCard({ category, index }) {
  const Icon = ICON_MAP[category.icon]
  const c = COLOR_MAP[category.color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`glass-card p-6 ${c.hoverBorder} transition-all duration-250`}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center`}>
          <Icon size={20} className={c.icon} />
        </div>
        <h3 className="font-mono font-semibold text-text text-sm">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={`font-mono text-xs px-2.5 py-1 rounded-md border ${c.tag}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="container-max">
        <SectionHeader
          index={2}
          title="Skills"
          subtitle="A full-stack arsenal spanning languages, frameworks, security tools, and cloud infrastructure."
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
