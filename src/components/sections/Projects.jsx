import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronRight, Zap } from 'lucide-react'
import { GitHubIcon } from '../ui/BrandIcons'
import SectionHeader from '../ui/SectionHeader'
import { projects } from '../../data/portfolio'

const STATUS_CONFIG = {
  active: { label: 'active dev', dot: 'bg-accent animate-pulse-slow', text: 'text-accent', bg: 'bg-accent/10 border-accent/25' },
  live: { label: 'live', dot: 'bg-blue-400', text: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/25' },
  complete: { label: 'complete', dot: 'bg-purple-400', text: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/25' },
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const status = STATUS_CONFIG[project.status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass-card flex flex-col overflow-hidden group transition-all duration-250"
      style={hovered ? { boxShadow: `0 20px 50px rgba(0,0,0,0.6), 0 0 25px ${project.accent}22` } : {}}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full transition-all duration-300"
        style={{ background: hovered ? project.accent : 'transparent', boxShadow: hovered ? `0 0 12px ${project.accent}80` : 'none' }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200"
            style={{ background: `${project.accent}18`, border: `1px solid ${project.accent}30` }}
          >
            <Zap size={22} style={{ color: project.accent }} />
          </div>
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-mono ${status.bg} ${status.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
            {status.label}
          </span>
        </div>

        {/* Title & subtitle */}
        <div className="mb-3">
          <h3 className="font-mono font-bold text-text text-xl mb-1 group-hover:text-glow transition-all duration-200"
              style={{ '--glow-color': project.accent }}>
            {project.title}
          </h3>
          <p className="text-muted text-xs font-mono">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-subtle text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs text-muted">
              <ChevronRight size={12} style={{ color: project.accent }} className="flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2.5 py-1 rounded-md border"
              style={{ background: `${project.accent}0D`, borderColor: `${project.accent}30`, color: project.accent }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 border border-border text-subtle text-sm font-medium py-2.5 rounded-xl hover:border-border-bright hover:text-text transition-all duration-200 cursor-pointer"
          >
            <GitHubIcon size={16} />
            Source
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 cursor-pointer border"
              style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}0D` }}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          ) : (
            <span className="flex-1 flex items-center justify-center gap-2 border border-border text-muted text-sm py-2.5 rounded-xl cursor-not-allowed opacity-50">
              No live demo
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeader
          index={3}
          title="Projects"
          subtitle="Real tools built for real problems — all open source and production-ready."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Adityasiig"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <GitHubIcon size={18} />
            View All Repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
