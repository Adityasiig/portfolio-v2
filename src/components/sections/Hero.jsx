import { motion } from 'framer-motion'
import { ArrowDown, Mail, ExternalLink } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import MatrixRain from '../ui/MatrixRain'
import AnimatedText from '../ui/AnimatedText'
import { personal, stats } from '../../data/portfolio'

const TerminalCard = () => (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
    className="glass-card overflow-hidden animate-float"
    style={{ boxShadow: '0 0 40px rgba(0,255,156,0.12), 0 20px 60px rgba(0,0,0,0.5)' }}
  >
    {/* Window chrome */}
    <div className="flex items-center gap-2 px-4 py-3 bg-surface/60 border-b border-border">
      <span className="w-3 h-3 rounded-full bg-red-500/80" />
      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
      <span className="w-3 h-3 rounded-full bg-accent/80" />
      <span className="font-mono text-xs text-muted ml-3">aditya@kali ~ %</span>
    </div>
    {/* Terminal body */}
    <div className="p-5 font-mono text-sm space-y-1.5 leading-relaxed">
      <p>
        <span className="text-accent">$</span>{' '}
        <span className="text-muted">cat profile.json</span>
      </p>
      <div className="text-subtle pl-2 space-y-1 pt-1">
        <p><span className="text-border-bright">{'{'}</span></p>
        <p className="pl-4">
          <span className="text-blue-400">"name"</span>
          <span className="text-subtle">: </span>
          <span className="text-accent">"Aditya Singh"</span>
          <span className="text-subtle">,</span>
        </p>
        <p className="pl-4">
          <span className="text-blue-400">"role"</span>
          <span className="text-subtle">: </span>
          <span className="text-accent">"Dev & Security Researcher"</span>
          <span className="text-subtle">,</span>
        </p>
        <p className="pl-4">
          <span className="text-blue-400">"degree"</span>
          <span className="text-subtle">: </span>
          <span className="text-accent">"BSc IT, 3rd Year"</span>
          <span className="text-subtle">,</span>
        </p>
        <p className="pl-4">
          <span className="text-blue-400">"certs"</span>
          <span className="text-subtle">: </span>
          <span className="text-yellow-400">9</span>
          <span className="text-subtle">,</span>
        </p>
        <p className="pl-4">
          <span className="text-blue-400">"status"</span>
          <span className="text-subtle">: </span>
          <span className="text-accent">"open_to_work"</span>
          <span className="text-subtle">,</span>
        </p>
        <p className="pl-4">
          <span className="text-blue-400">"location"</span>
          <span className="text-subtle">: </span>
          <span className="text-accent">"India"</span>
        </p>
        <p><span className="text-border-bright">{'}'}</span></p>
      </div>
      <div className="pt-2">
        <p>
          <span className="text-accent">$</span>{' '}
          <span className="text-muted">./run_scanner.py --target</span>
        </p>
        <p className="text-accent/70 pl-4">
          [+] Scanning for vulnerabilities...
        </p>
        <p className="text-accent pl-4">
          [✓] Ready. 7 modules loaded.
        </p>
        <p className="text-muted">
          <span className="text-accent">$</span>{' '}
          <span className="animate-blink">▋</span>
        </p>
      </div>
    </div>
  </motion.div>
)

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <MatrixRain opacity={0.12} />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/10 via-bg/40 to-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/8 cursor-default"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
            <span className="font-mono text-xs text-accent tracking-wide">
              Available for opportunities
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-mono text-accent text-sm mb-4 tracking-widest"
          >
            $ whoami
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="font-mono font-bold text-text leading-none mb-5"
            style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
          >
            Aditya
            <br />
            <span className="text-accent text-glow">Singh</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6 h-8"
          >
            <AnimatedText />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-subtle text-base leading-relaxed max-w-lg mb-8"
          >
            BSc IT student who builds real tools — from web vulnerability scanners to
            sleek task managers.{' '}
            <span className="text-accent font-medium">
              "I break things to learn how to fix them."
            </span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View Projects
            </button>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GitHubIcon size={18} />
              GitHub
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="btn-ghost"
            >
              <Mail size={18} />
              Email Me
            </a>
          </motion.div>

          {/* Social pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-4"
          >
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200 cursor-pointer text-sm"
            >
              <LinkedInIcon size={16} />
              <span className="font-mono">LinkedIn</span>
              <ExternalLink size={12} className="opacity-50" />
            </a>
            <span className="w-1 h-1 bg-border rounded-full" />
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200 cursor-pointer text-sm"
            >
              <GitHubIcon size={16} />
              <span className="font-mono">Adityasiig</span>
              <ExternalLink size={12} className="opacity-50" />
            </a>
          </motion.div>
        </div>

        {/* Right: terminal */}
        <div className="hidden lg:block">
          <TerminalCard />

          {/* Stats row below terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-4 gap-3 mt-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-4 text-center hover:border-accent/30 transition-colors duration-200"
              >
                <p className="font-mono text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-muted text-xs mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group focus:outline-none"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-xs text-muted group-hover:text-accent transition-colors duration-200">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-accent" />
        </motion.div>
      </motion.button>
    </section>
  )
}
