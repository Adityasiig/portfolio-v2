import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import SectionHeader from '../ui/SectionHeader'
import { personal } from '../../data/portfolio'

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    value: 'github.com/Adityasiig',
    href: personal.github,
    icon: GitHubIcon,
    color: 'hover:border-white/30 hover:text-white',
  },
  {
    label: 'LinkedIn',
    value: 'singhaditya70',
    href: personal.linkedin,
    icon: LinkedInIcon,
    color: 'hover:border-blue-500/40 hover:text-blue-400',
  },
  {
    label: 'Email',
    value: 'adityaajaysingh0104@gmail.com',
    href: `mailto:${personal.email}`,
    icon: Mail,
    color: 'hover:border-accent/40 hover:text-accent',
  },
]

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    // Opens default mail client — no server needed for static GitHub Pages deployment
    const subject = encodeURIComponent(form.subject || `Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  const inputClass = (field) =>
    `w-full bg-card border rounded-xl px-4 py-3 text-text text-sm placeholder-muted
     focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50
     transition-colors duration-200 ${
       errors[field]
         ? 'border-red-500/60 bg-red-500/5'
         : 'border-border hover:border-border-bright'
     }`

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      noValidate
      className="glass-card p-6 md:p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-subtle text-xs font-medium mb-1.5 font-mono">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            autoComplete="name"
            className={inputClass('name')}
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-subtle text-xs font-medium mb-1.5 font-mono">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            autoComplete="email"
            className={inputClass('email')}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-subtle text-xs font-medium mb-1.5 font-mono">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          className={inputClass('subject')}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-subtle text-xs font-medium mb-1.5 font-mono">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project or opportunity..."
          className={`${inputClass('message')} resize-none`}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.message}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-muted text-xs">
          Opens your email client — no server required.
        </p>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary min-w-[130px] justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <Loader size={18} className="animate-spin" />
          ) : status === 'success' ? (
            <>
              <CheckCircle size={18} />
              Sent!
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </button>
      </div>
    </motion.form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <SectionHeader
          index={5}
          title="Contact"
          subtitle="I'm actively looking for internships, freelance projects, or full-time opportunities. Let's talk."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Right: social */}
          <div className="lg:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-subtle text-sm leading-relaxed mb-6">
                Whether you have a question, a project idea, a collaboration, or just want
                to say hi — my inbox is always open.
              </p>

              <div className="space-y-3">
                {SOCIAL_LINKS.map(({ label, value, href, icon: Icon, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 glass-card p-4 border border-border ${color} transition-all duration-200 cursor-pointer group`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors duration-200">
                      <Icon size={18} className="text-muted group-hover:text-accent transition-colors duration-200" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-muted text-xs font-mono">{label}</p>
                      <p className="text-text text-sm font-medium truncate">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Big email CTA */}
              <motion.a
                href={`mailto:${personal.email}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-3 mt-6 w-full py-4 rounded-2xl btn-primary text-base"
              >
                <Mail size={20} />
                Say Hello Directly
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
