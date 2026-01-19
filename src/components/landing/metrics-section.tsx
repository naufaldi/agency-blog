'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useEffect, useRef, useState } from 'react'
import { Users, Briefcase, Clock, Award } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'

interface Metric {
  id: string
  icon: React.ElementType
  value: number
  suffix: string
  label: string
  description: string
}

const metrics: Metric[] = [
  {
    id: 'projects',
    icon: Briefcase,
    value: 150,
    suffix: '+',
    label: 'projectsCompleted',
    description: 'Successful digital products delivered',
  },
  {
    id: 'clients',
    icon: Users,
    value: 85,
    suffix: '+',
    label: 'happyClients',
    description: 'Partners across industries',
  },
  {
    id: 'experience',
    icon: Clock,
    value: 8,
    suffix: '+',
    label: 'yearsExperience',
    description: 'Years of crafting excellence',
  },
  {
    id: 'awards',
    icon: Award,
    value: 25,
    suffix: '+',
    label: 'awardsWon',
    description: 'Industry recognitions',
  },
]

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, start])

  return count
}

function MetricCard({
  metric,
  isVisible,
  index,
}: {
  metric: Metric
  isVisible: boolean
  index: number
}) {
  const count = useCountUp(metric.value, 2000, isVisible)
  const Icon = metric.icon
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <motion.div
        whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="border-slate-700 bg-slate-800/50 transition-colors duration-200 hover:border-cyan-500/50">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <motion.div
                className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center"
                whileHover={{ rotate: prefersReducedMotion ? 0 : 5 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="w-6 h-6 text-cyan-500" />
              </motion.div>
              <Badge
                variant="outline"
                className="font-mono text-xs border-slate-600 text-slate-500"
              >
                live
              </Badge>
            </div>

            <div className="mb-2">
              <motion.span
                className="font-mono text-4xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {count}
              </motion.span>
              <span className="font-mono text-2xl font-bold text-cyan-500">{metric.suffix}</span>
            </div>

            <div className="font-mono text-sm text-amber-500 mb-1">{metric.label}</div>
            <p className="text-sm text-slate-500">{metric.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export function MetricsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="metrics"
      className="py-24 border-t border-slate-800"
      aria-label="Our Metrics"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-mono border-slate-700 text-amber-500">
            {'// Metrics that Matter'}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
            <span className="text-slate-500">{'{ '}</span>
            <span className="text-cyan-500">results</span>
            <span className="text-slate-500">{': '}</span>
            <span className="text-green-400">verified</span>
            <span className="text-slate-500">{' }'}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Numbers don&apos;t lie. Our track record speaks to our commitment to excellence and
            client success.
          </p>
        </FadeIn>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.id} metric={metric} isVisible={isVisible} index={index} />
          ))}
        </div>

        {/* Data Source Note */}
        <FadeIn delay={0.5} className="mt-12 text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="font-mono text-xs text-slate-500">
              Metrics updated in real-time • Last sync: just now
            </span>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
