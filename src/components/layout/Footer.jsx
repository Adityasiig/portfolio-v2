import { Mail, Terminal } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import { personal } from '../../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-accent" />
          <span className="font-mono text-sm text-muted">
            &copy; {new Date().getFullYear()} Aditya Singh
          </span>
        </div>

        <p className="font-mono text-xs text-muted/60 text-center">
          <span className="text-accent">"</span>
          I break things to learn how to fix them.
          <span className="text-accent">"</span>
        </p>

        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent/10 transition-colors duration-200 cursor-pointer"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent/10 transition-colors duration-200 cursor-pointer"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent/10 transition-colors duration-200 cursor-pointer"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
