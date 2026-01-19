'use client'

import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { href: '#process', label: 'Process' },
  { href: '#work', label: 'Work' },
  { href: '#metrics', label: 'Metrics' },
  { href: '/blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="font-mono text-xl font-bold text-white transition-colors hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="Agency Creative Home"
          >
            Agency<span className="text-cyan-500">_</span>Creative
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8" role="navigation">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-sm text-slate-300 transition-colors hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                asChild
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-mono text-sm font-semibold transition-all duration-200"
              >
                <a href="#contact">Start Project</a>
              </Button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul
            className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-slate-800 pt-4"
            role="navigation"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block font-mono text-sm text-slate-300 transition-colors hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded px-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                asChild
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-mono text-sm font-semibold"
              >
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Start Project
                </a>
              </Button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}
