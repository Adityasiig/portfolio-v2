import { useEffect, useState } from 'react'

const PHRASES = [
  'Web Developer & Security Researcher',
  'Building WebVulnScanner v2...',
  'Penetration Tester',
  'BSc IT — 3rd Year',
  'Open Source Contributor',
]

export default function AnimatedText() {
  const [display, setDisplay] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = PHRASES[phraseIdx]
    let timeout

    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => setCharIdx((c) => c + 1), 65)
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000)
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx((c) => c - 1), 35)
      } else {
        setDeleting(false)
        setPhraseIdx((i) => (i + 1) % PHRASES.length)
      }
    }

    setDisplay(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx])

  return (
    <span className="font-mono text-subtle text-lg">
      {display}
      <span className="inline-block w-0.5 h-5 bg-accent ml-0.5 align-middle animate-blink" aria-hidden="true" />
    </span>
  )
}
