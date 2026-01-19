'use client'

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

export function HeroSection() {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    // Animate code lines appearing
    codeLines.forEach((_, index) => {
      setTimeout(
        () => {
          setVisibleLines((prev) => [...prev, index])
        },
        200 + index * 150,
      )
    })

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

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
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent animate-[scan_3s_ease-in-out_infinite]" />

      <div className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-sm font-mono text-cyan-500">
            <Sparkles size={16} className="animate-pulse" />
            <span>Technical Transparency</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-white leading-tight">
            <span className="text-amber-500">function</span>{' '}
            <span className="text-cyan-500">createExcellence</span>
            <span className="text-white">()</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed">
            We transform complex ideas into elegant digital solutions.
            <span className="text-cyan-500 font-mono">{' // creativity + process = results'}</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </div>

        {/* Right Content - Terminal/IDE Preview */}
        <div className="lg:col-span-6">
          <div className="rounded-xl border border-slate-700 bg-slate-900/80 shadow-2xl shadow-cyan-500/10 overflow-hidden">
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
          </div>

          {/* Stats below terminal */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { value: '< 200ms', label: 'Response Time' },
              { value: '99.9%', label: 'Uptime' },
              { value: 'A+', label: 'Performance' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-lg border border-slate-800 bg-slate-900/50"
              >
                <div className="font-mono text-xl font-bold text-cyan-500">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
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
