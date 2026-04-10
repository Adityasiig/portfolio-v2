import { motion } from 'framer-motion'

export default function SectionHeader({ index, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-16"
    >
      <p className="font-mono text-accent text-sm tracking-widest mb-3">
        // {String(index).padStart(2, '0')}. {title.toLowerCase()}
      </p>
      <h2 className="font-mono font-bold text-4xl md:text-5xl text-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-subtle text-base max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
