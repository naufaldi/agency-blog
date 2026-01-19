'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code2, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

const codeLines = [
  { text: 'const creativity = await imagine();', delay: 0 },
  { text: 'const strategy = analyze(requirements);', delay: 100 },
  { text: 'const design = craft(creativity, strategy);', delay: 200 },
  { text: 'const result = deliver(design);', delay: 300 },
  { text: '', delay: 400 },
  { text: '// Output: Digital Excellence ✨', delay: 500 },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
}

const terminalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
}

export function HeroSection() {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [showCursor, setShowCursor] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Animate code lines appearing
    const startDelay = prefersReducedMotion ? 0 : 1200
    codeLines.forEach((_, index) => {
      setTimeout(
        () => {
          setVisibleLines((prev) => [...prev, index])
        },
        startDelay + index * 150,
      )
    })

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [prefersReducedMotion])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1e293b 1px, transparent 1px),
              linear-gradient(to bottom, #1e293b 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Scanning Animation Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent animate-[scan_3s_ease-in-out_infinite]"
      />

      <div className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content - Staggered Animation */}
        <motion.div
          className="lg:col-span-6 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-sm font-mono text-cyan-500"
          >
            <Sparkles size={16} className="animate-pulse" />
            <span>Technical Transparency</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-white leading-tight"
          >
            <span className="text-amber-500">function</span>{' '}
            <span className="text-cyan-500">createExcellence</span>
            <span className="text-white">()</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed"
          >
            We transform complex ideas into elegant digital solutions.
            <span className="text-cyan-500 font-mono">{' // creativity + process = results'}</span>
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-mono font-semibold transition-all duration-200 group"
              >
                <a href="#work">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-cyan-500 font-mono transition-all duration-200"
              >
                <a href="#process">
                  <Code2 className="mr-2 h-5 w-5" />
                  Our Process
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content - Terminal/IDE Preview */}
        <motion.div
          className="lg:col-span-6"
          variants={terminalVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="rounded-xl border border-slate-700 bg-slate-900/80 shadow-2xl shadow-cyan-500/10 overflow-hidden"
            whileHover={{ boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.15)' }}
            transition={{ duration: 0.3 }}
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700 bg-slate-800/50">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-xs font-mono text-slate-500">solution.ts</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              <div className="text-slate-500 mb-4">
                {'// The Agency Creative Solution Equation'}
              </div>
              {codeLines.map((line, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-200 ${visibleLines.includes(index) ? 'opacity-100' : 'opacity-0'}`}
                >
                  {line.text ? (
                    <div className="flex">
                      <span className="text-slate-600 w-6 select-none">{index + 1}</span>
                      <span
                        className={line.text.includes('//') ? 'text-green-400' : 'text-slate-300'}
                      >
                        {line.text.split('').map((char, i) => {
                          if (
                            char === '=' ||
                            char === '(' ||
                            char === ')' ||
                            char === ';' ||
                            char === ','
                          ) {
                            return (
                              <span key={i} className="text-slate-500">
                                {char}
                              </span>
                            )
                          }
                          if (
                            ['const', 'await', 'async'].includes(line.text.substring(0, 5).trim())
                          ) {
                            if (i < 5)
                              return (
                                <span key={i} className="text-purple-400">
                                  {char}
                                </span>
                              )
                          }
                          return char
                        })}
                      </span>
                    </div>
                  ) : (
                    <div className="h-5" />
                  )}
                </div>
              ))}
              <div className="flex mt-2">
                <span className="text-slate-600 w-6 select-none">7</span>
                <span
                  className={`w-2 h-5 bg-cyan-500 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
            </div>
          </motion.div>

          {/* Stats below terminal */}
          <motion.div
            className="mt-6 grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {[
              { value: '< 200ms', label: 'Response Time' },
              { value: '99.9%', label: 'Uptime' },
              { value: 'A+', label: 'Performance' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 rounded-lg border border-slate-800 bg-slate-900/50"
                whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ transitionDelay: `${1.3 + index * 0.1}s` }}
              >
                <div className="font-mono text-xl font-bold text-cyan-500">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Custom CSS for scan animation */}
      <style jsx>{`
        @keyframes scan {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
