'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Search, PenTool, Layout, Code, Rocket } from 'lucide-react'
import { useState } from 'react'
import { FadeIn } from '@/components/motion/fade-in'

const processSteps = [
  {
    id: 1,
    icon: Search,
    title: 'Discovery',
    description: 'Deep dive into your vision, audience, and objectives.',
    tech: ['Research', 'Analytics', 'User Interviews'],
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
  },
  {
    id: 2,
    icon: PenTool,
    title: 'Strategy',
    description: 'Crafting the blueprint for your digital success.',
    tech: ['Wireframes', 'User Flows', 'Architecture'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
  },
  {
    id: 3,
    icon: Layout,
    title: 'Design',
    description: 'Pixel-perfect interfaces that captivate and convert.',
    tech: ['UI/UX', 'Prototyping', 'Design Systems'],
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
  },
  {
    id: 4,
    icon: Code,
    title: 'Develop',
    description: 'Clean, modular code built for scale and performance.',
    tech: ['React', 'TypeScript', 'Next.js'],
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
  },
  {
    id: 5,
    icon: Rocket,
    title: 'Launch',
    description: 'Deploy with confidence. Monitor. Iterate. Succeed.',
    tech: ['CI/CD', 'Monitoring', 'Optimization'],
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/30',
  },
]

const cardVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -5,
    transition: { duration: 0.2 },
  },
}

export function ProcessSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="process" className="py-24 border-t border-slate-800" aria-label="Our Process">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-mono border-slate-700 text-amber-500">
            {'// The Architecture'}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
            <span className="text-slate-500">class</span>{' '}
            <span className="text-cyan-500">CreativeProcess</span>{' '}
            <span className="text-slate-500">{'{'}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our systematic approach to transforming ideas into exceptional digital experiences.
            Every step is transparent, collaborative, and results-driven.
          </p>
        </FadeIn>

        {/* Process Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-700 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <FadeIn key={step.id} delay={index * 0.1}>
                <motion.div
                  className="relative group"
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  variants={prefersReducedMotion ? undefined : cardVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {/* Step Card */}
                  <motion.div
                    className={`
                      relative p-6 rounded-xl border transition-colors duration-200
                      ${hoveredStep === step.id ? `${step.borderColor} ${step.bgColor}` : 'border-slate-800 bg-slate-900/50'}
                    `}
                  >
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-mono text-sm text-slate-400">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <motion.div
                      className={`w-12 h-12 rounded-lg ${step.bgColor} flex items-center justify-center mb-4`}
                      whileHover={{ rotate: prefersReducedMotion ? 0 : 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </motion.div>

                    {/* Content */}
                    <h3 className={`font-mono font-semibold text-lg mb-2 ${step.color}`}>
                      {step.title}()
                    </h3>
                    <p className="text-sm text-slate-400 mb-4">{step.description}</p>

                    {/* Tech Tags - Under the Hood */}
                    <motion.div
                      className="space-y-2 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: hoveredStep === step.id ? 'auto' : 0,
                        opacity: hoveredStep === step.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-xs font-mono text-slate-600 mb-2">
                        {'// Under the hood:'}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {step.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className={`text-xs font-mono ${step.bgColor} ${step.color} border-none`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Arrow to next step (hidden on last and mobile) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 w-6 h-6 items-center justify-center text-slate-600 z-10">
                      →
                    </div>
                  )}
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Closing bracket */}
        <FadeIn delay={0.6} className="text-center mt-16">
          <span className="font-mono text-3xl text-slate-500">{'}'}</span>
        </FadeIn>
      </div>
    </section>
  )
}
