export const personal = {
  name: 'Aditya Singh',
  title: 'Web Developer & Security Researcher',
  tagline: 'I break things to learn how to fix them.',
  bio: "I'm a BSc IT student (3rd year) who builds real tools — from web vulnerability scanners to sleek task managers. My work sits at the intersection of web development and offensive security. I'm actively seeking internships, freelance, and full-time opportunities.",
  location: 'India',
  email: 'adityaajaysingh0104@gmail.com',
  github: 'https://github.com/Adityasiig',
  linkedin: 'https://linkedin.com/in/singhaditya70',
  portfolio: 'https://adityasiig.github.io/Portfolio/',
  available: true,
  currentFocus: [
    'Building WebVulnScanner v2 with AI-powered exploit suggestions',
    'Advanced penetration testing & cloud security (AWS)',
    'Open-source security tooling',
  ],
}

export const stats = [
  { value: '8+', label: 'Repositories' },
  { value: '9', label: 'Certifications' },
  { value: '3', label: 'Featured Projects' },
  { value: '3rd', label: 'Year BSc IT' },
]

export const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'Code2',
    color: 'accent',
    skills: ['Python', 'JavaScript', 'C++', 'Java', 'Bash', 'SQL', 'R'],
  },
  {
    id: 'web',
    title: 'Web & Backend',
    icon: 'Globe',
    color: 'blue',
    skills: ['React', 'Node.js', 'Express', 'Flask', 'MongoDB', 'HTML5', 'CSS3'],
  },
  {
    id: 'security',
    title: 'Security & Offensive',
    icon: 'Shield',
    color: 'red',
    skills: ['Kali Linux', 'Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'sqlmap', 'Hydra'],
  },
  {
    id: 'tools',
    title: 'Tools & Cloud',
    icon: 'Wrench',
    color: 'purple',
    skills: ['Git', 'Docker', 'Linux', 'AWS', 'VS Code', 'Postman'],
  },
]

export const proficiency = [
  { label: 'Data Structures', value: 85 },
  { label: 'Web Security', value: 80 },
  { label: 'Linux Administration', value: 80 },
  { label: 'Networking', value: 75 },
  { label: 'Web Development', value: 78 },
  { label: 'Python / Scripting', value: 88 },
]

export const projects = [
  {
    id: 'webvulnscanner',
    title: 'WebVulnScanner',
    subtitle: 'Automated web vulnerability scanner',
    description:
      'Modular Python scanner with 7 attack modules: SQL Injection, XSS, Security Headers, SSL/TLS analysis, Directory Traversal, Open Redirects, and Sensitive File detection. Features an auto web crawler, colorized CLI output, and HTML/JSON reporting.',
    status: 'active',
    statusLabel: 'v2 in dev',
    accent: '#00FF9C',
    tags: ['Python', 'BeautifulSoup4', 'Requests', 'Jinja2', 'Colorama'],
    category: 'Security',
    github: 'https://github.com/Adityasiig/WebVulnScanner',
    live: null,
    highlights: [
      '7 vulnerability modules',
      'Auto web crawler',
      'HTML & JSON reports',
      'AI exploit suggestions (v2)',
    ],
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    subtitle: 'Feature-rich task management app',
    description:
      'Clean and powerful task manager with priority levels, due dates, drag-and-drop reordering, dark/light theme toggle, and full keyboard shortcut support. Backed by a Node.js REST API.',
    status: 'live',
    statusLabel: 'live',
    accent: '#3B82F6',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    category: 'Web App',
    github: 'https://github.com/Adityasiig/TODO-list',
    live: 'https://adityasiig.github.io/TODO-list/',
    highlights: [
      'Drag-and-drop reordering',
      'Dark / Light theme',
      'Keyboard shortcuts',
      'Priority & due dates',
    ],
  },
  {
    id: 'terminal-portfolio',
    title: 'Terminal Portfolio',
    subtitle: 'macOS terminal-style interactive portfolio',
    description:
      'An interactive portfolio built to look and feel like a real macOS terminal. Supports custom CLI commands, directory navigation, ls output, and styled text responses — all in React and TypeScript.',
    status: 'complete',
    statusLabel: 'complete',
    accent: '#A855F7',
    tags: ['React', 'TypeScript', 'CSS Modules'],
    category: 'Portfolio',
    github: 'https://github.com/Adityasiig/terminal-portfolio',
    live: null,
    highlights: [
      'Simulated CLI experience',
      'Custom command parser',
      'React + TypeScript',
      'macOS window chrome',
    ],
  },
]

export const certifications = [
  { title: 'Ethical Hacking', category: 'Security', color: 'accent' },
  { title: 'Kali Linux OS', category: 'Linux / Security', color: 'accent' },
  { title: 'Intro to Cybersecurity', category: 'Security', color: 'accent' },
  { title: 'C++ Programming', category: 'Programming', color: 'blue' },
  { title: 'PL/SQL Database', category: 'Database', color: 'purple' },
  { title: 'R Programming', category: 'Data Science', color: 'yellow' },
  { title: 'Ubuntu Network Server', category: 'Infrastructure', color: 'orange' },
  { title: 'Computer Networking', category: 'Networking', color: 'teal' },
  { title: 'Computer Architecture', category: 'CS Fundamentals', color: 'pink' },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
]
