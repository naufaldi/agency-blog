import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com', icon: Github, label: 'GitHub' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:hello@agency.creative', icon: Mail, label: 'Email' },
]

const footerLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/accessibility', label: 'Accessibility' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-900">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <a
              href="/"
              className="font-mono text-xl font-bold text-white hover:text-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
            >
              Agency<span className="text-cyan-500">_</span>Creative
            </a>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              Building digital experiences with technical transparency. Code is art. Architecture is
              beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h3 className="font-mono text-sm font-semibold text-amber-500 uppercase tracking-wider">
              {'// Navigation'}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#process"
                  className="text-sm text-slate-400 hover:text-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-sm text-slate-400 hover:text-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#metrics"
                  className="text-sm text-slate-400 hover:text-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                >
                  Metrics
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-slate-400 hover:text-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4">
            <h3 className="font-mono text-sm font-semibold text-amber-500 uppercase tracking-wider">
              {'// Connect'}
            </h3>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 text-slate-400 hover:text-cyan-500 hover:bg-slate-800 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-mono">
            © {currentYear} Agency_Creative. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-500 hover:text-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Accessibility Statement */}
        <div className="mt-8 p-4 border border-slate-800 rounded-lg bg-slate-900/50">
          <p className="text-xs text-slate-500 font-mono">
            <span className="text-amber-500">/* Accessibility */</span> This website is designed to
            be accessible to all users. We follow WCAG 2.1 AA guidelines. If you experience any
            accessibility issues, please{' '}
            <a
              href="mailto:accessibility@agency.creative"
              className="text-cyan-500 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
            >
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
