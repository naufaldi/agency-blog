'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Folder } from 'lucide-react'
import { useState } from 'react'
import { FadeIn } from '@/components/motion/fade-in'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Modern headless commerce solution with real-time inventory.',
    image: '/api/placeholder/600/400',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    type: 'Web App',
    metrics: { performance: 98, accessibility: 100, seo: 95 },
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    description: 'Analytics platform with real-time data visualization.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'D3.js', 'WebSocket'],
    type: 'Dashboard',
    metrics: { performance: 95, accessibility: 98, seo: 90 },
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 3,
    title: 'Mobile App',
    description: 'Cross-platform fitness tracking with AI recommendations.',
    image: '/api/placeholder/600/400',
    tags: ['React Native', 'TensorFlow', 'Firebase'],
    type: 'Mobile',
    metrics: { performance: 97, accessibility: 95, seo: 88 },
    github: 'https://github.com',
    live: 'https://example.com',
  },
]

export function ShowcaseSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="work"
      className="py-24 border-t border-slate-800 bg-slate-900/50"
      aria-label="Our Work"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-mono border-slate-700 text-amber-500">
            {'// The Live Preview'}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
            <span className="text-cyan-500">showcase</span>
            <span className="text-slate-500">.map(</span>
            <span className="text-amber-500">project</span>
            <span className="text-slate-500">{' => '}</span>
            <span className="text-green-400">{'<Excellence />'}</span>
            <span className="text-slate-500">)</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real projects. Real results. Hover to inspect the code quality metrics.
          </p>
        </FadeIn>

        {/* Terminal Window */}
        <FadeIn delay={0.2}>
          <motion.div
            className="rounded-xl border border-slate-700 bg-slate-900 overflow-hidden shadow-2xl"
            whileHover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
            transition={{ duration: 0.3 }}
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700 bg-slate-800/50">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-xs font-mono text-slate-500">
                ~/projects $ ls -la --showcase
              </span>
            </div>

            {/* Projects Grid */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card
                      className="border-slate-700 bg-slate-800/50 overflow-hidden transition-colors duration-200 hover:border-cyan-500/50"
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <CardContent className="p-0">
                        {/* Project Preview */}
                        <div className="relative h-48 bg-linear-to-br from-slate-700 to-slate-800 overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Folder className="w-16 h-16 text-slate-600" />
                          </div>

                          {/* Hover Overlay - Metrics */}
                          <motion.div
                            className="absolute inset-0 bg-slate-900/95 p-4 flex flex-col justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="font-mono text-xs text-slate-500 mb-3">
                              {'// Performance Metrics'}
                            </div>
                            <div className="space-y-2">
                              {Object.entries(project.metrics).map(([key, value]) => (
                                <div key={key} className="flex items-center justify-between">
                                  <span className="text-xs font-mono text-slate-400 capitalize">
                                    {key}
                                  </span>
                                  <div className="flex items-center gap-2">
                                    <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                                      <motion.div
                                        className={`h-full rounded-full ${
                                          value >= 95
                                            ? 'bg-green-500'
                                            : value >= 90
                                              ? 'bg-amber-500'
                                              : 'bg-red-500'
                                        }`}
                                        initial={{ width: 0 }}
                                        animate={{
                                          width: hoveredProject === project.id ? `${value}%` : '0%',
                                        }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                      />
                                    </div>
                                    <span
                                      className={`text-xs font-mono ${
                                        value >= 95
                                          ? 'text-green-500'
                                          : value >= 90
                                            ? 'text-amber-500'
                                            : 'text-red-500'
                                      }`}
                                    >
                                      {value}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </div>

                        {/* Project Info */}
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <Badge
                              variant="secondary"
                              className="text-xs font-mono bg-slate-700 text-cyan-500"
                            >
                              {project.type}
                            </Badge>
                            <div className="flex gap-2">
                              <motion.a
                                href={project.github}
                                className="p-1 text-slate-500 hover:text-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                                aria-label={`${project.title} GitHub`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Github size={16} />
                              </motion.a>
                              <motion.a
                                href={project.live}
                                className="p-1 text-slate-500 hover:text-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                                aria-label={`${project.title} Live Demo`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <ExternalLink size={16} />
                              </motion.a>
                            </div>
                          </div>

                          <h3 className="font-mono font-semibold text-white mb-1">
                            {project.title}
                          </h3>
                          <p className="text-sm text-slate-400 mb-3">{project.description}</p>

                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs font-mono border-slate-600 text-slate-400"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Terminal Footer */}
            <div className="px-6 py-4 border-t border-slate-700 bg-slate-800/30">
              <div className="font-mono text-sm text-slate-500">
                <span className="text-green-400">✓</span> 3 projects loaded
                <span className="text-slate-600 ml-4">|</span>
                <span className="ml-4">Hover to inspect metrics</span>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
