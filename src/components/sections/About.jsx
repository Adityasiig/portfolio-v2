import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Clock, Target } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { personal, proficiency } from '../../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

function SkillBar({ label, value, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-subtle text-xs font-medium">{label}</span>
        <span className="font-mono text-xs text-accent">{value}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #00FF9C, #00CC7A)' }}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.08 + 0.3, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

export default function About() {
  const facts = [
    { icon: MapPin, label: 'Location', value: 'India' },
    { icon: GraduationCap, label: 'Education', value: 'BSc IT, 3rd Year' },
    { icon: Clock, label: 'Status', value: 'Hireable now' },
    { icon: Target, label: 'Open to', value: 'Remote / Hybrid' },
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionHeader index={1} title="About Me" />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: bio */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <p className="text-subtle text-base leading-relaxed">
                I'm{' '}
                <span className="text-text font-semibold">Aditya Singh</span>, a
                passionate Web Developer and Security Researcher currently in my 3rd year
                of a BSc IT program.
              </p>
            </motion.div>

            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="border-l-2 border-accent pl-5 py-1"
            >
              <p className="font-mono text-accent text-lg italic">
                "{personal.tagline}"
              </p>
            </motion.blockquote>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="text-subtle text-base leading-relaxed"
            >
              My work sits at the intersection of{' '}
              <span className="text-text font-medium">web development</span> and{' '}
              <span className="text-text font-medium">offensive security</span>. I
              build practical, real-world tools — whether that's a modular Python
              vulnerability scanner or a polished task management app with drag-and-drop
              UX.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="text-subtle text-base leading-relaxed"
            >
              Currently building{' '}
              <span className="text-accent font-medium">WebVulnScanner v2</span> with
              AI-powered exploit suggestions, diving deeper into penetration testing, and
              exploring cloud security on AWS. I'm actively seeking opportunities to
              contribute and grow.
            </motion.p>

            {/* Quick facts grid */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              className="grid grid-cols-2 gap-3 pt-4"
            >
              {facts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 glass-card p-3 hover:border-accent/30 transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-muted text-xs">{label}</p>
                    <p className="text-text text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: cards */}
          <div className="lg:col-span-2 space-y-4">
            {/* Current focus */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Target size={15} className="text-accent" />
                </div>
                <h3 className="font-mono font-semibold text-text text-sm">
                  Current Focus
                </h3>
              </div>
              <ul className="space-y-2">
                {personal.currentFocus.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-subtle text-sm">
                    <span className="text-accent font-mono mt-0.5 flex-shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Proficiency bars */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <GraduationCap size={15} className="text-accent" />
                </div>
                <h3 className="font-mono font-semibold text-text text-sm">
                  CS Proficiency
                </h3>
              </div>
              <div className="space-y-4">
                {proficiency.map((item, i) => (
                  <SkillBar
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    index={i}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
