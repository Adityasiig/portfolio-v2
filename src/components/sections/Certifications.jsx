import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { certifications } from '../../data/portfolio'

const COLOR_STYLES = {
  accent:  { bg: 'bg-accent/10',      border: 'border-accent/20',      icon: 'text-accent',      label: 'text-accent/70' },
  blue:    { bg: 'bg-blue-500/10',    border: 'border-blue-500/20',    icon: 'text-blue-400',    label: 'text-blue-400/70' },
  purple:  { bg: 'bg-purple-500/10',  border: 'border-purple-500/20',  icon: 'text-purple-400',  label: 'text-purple-400/70' },
  yellow:  { bg: 'bg-yellow-500/10',  border: 'border-yellow-500/20',  icon: 'text-yellow-400',  label: 'text-yellow-400/70' },
  orange:  { bg: 'bg-orange-500/10',  border: 'border-orange-500/20',  icon: 'text-orange-400',  label: 'text-orange-400/70' },
  teal:    { bg: 'bg-teal-500/10',    border: 'border-teal-500/20',    icon: 'text-teal-400',    label: 'text-teal-400/70' },
  pink:    { bg: 'bg-pink-500/10',    border: 'border-pink-500/20',    icon: 'text-pink-400',    label: 'text-pink-400/70' },
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-surface/30">
      <div className="container-max">
        <SectionHeader
          index={4}
          title="Certifications"
          subtitle="9 certifications spanning security, programming, infrastructure, databases, and networking."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => {
            const style = COLOR_STYLES[cert.color]
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ scale: 1.02 }}
                className={`glass-card flex items-center gap-4 p-4 cursor-default ${style.border} hover:border-opacity-50 transition-all duration-200`}
              >
                <div className={`w-11 h-11 ${style.bg} border ${style.border} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Award size={20} className={style.icon} />
                </div>
                <div className="min-w-0">
                  <p className="text-text text-sm font-semibold truncate">{cert.title}</p>
                  <p className={`text-xs font-mono mt-0.5 ${style.label}`}>{cert.category}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
