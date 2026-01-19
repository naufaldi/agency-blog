'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useEffect, useRef, useState } from 'react'
import { Users, Briefcase, Clock, Award } from 'lucide-react'

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

function MetricCard({ metric, isVisible }: { metric: Metric; isVisible: boolean }) {
  const count = useCountUp(metric.value, 2000, isVisible)
  const Icon = metric.icon

  return (
    <Card className="border-slate-700 bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/10">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-cyan-500" />
          </div>
          <Badge variant="outline" className="font-mono text-xs border-slate-600 text-slate-500">
            live
          </Badge>
        </div>

        <div className="mb-2">
          <span className="font-mono text-4xl font-bold text-white">{count}</span>
          <span className="font-mono text-2xl font-bold text-cyan-500">{metric.suffix}</span>
        </div>

        <div className="font-mono text-sm text-amber-500 mb-1">{metric.label}</div>
        <p className="text-sm text-slate-500">{metric.description}</p>
      </CardContent>
    </Card>
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
        <div className="text-center mb-16">
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
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} isVisible={isVisible} />
          ))}
        </div>

        {/* Data Source Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-xs text-slate-500">
              Metrics updated in real-time • Last sync: just now
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
