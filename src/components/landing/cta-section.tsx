'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Mail, Calendar, MessageSquare } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import { MagneticButton } from '@/components/motion/magnetic-button'

export function CTASection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="contact" className="py-24 border-t border-slate-800" aria-label="Contact section">
      <div className="container mx-auto px-6">
        <FadeIn>
          <motion.div
            className="relative rounded-2xl border border-slate-700 bg-linear-to-br from-slate-800/50 to-slate-900 overflow-hidden"
            whileHover={prefersReducedMotion ? {} : { borderColor: 'rgba(6, 182, 212, 0.3)' }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #06b6d4 1px, transparent 1px),
                    linear-gradient(to bottom, #06b6d4 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            {/* Content */}
            <div className="relative p-8 md:p-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="outline" className="mb-6 font-mono border-slate-700 text-amber-500">
                  {'// Technical CTA'}
                </Badge>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-5xl font-mono font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="text-cyan-500">async</span>{' '}
                <span className="text-amber-500">function</span>{' '}
                <span className="text-white">startProject</span>
                <span className="text-slate-500">()</span>
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Ready to transform your vision into digital reality?
                <br />
                <span className="font-mono text-cyan-500">
                  {"// Let's write the next chapter together"}
                </span>
              </motion.p>

              {/* CTA Buttons with Magnetic Effect */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <MagneticButton
                  as="a"
                  href="mailto:hello@agency.creative"
                  className="inline-flex items-center justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-mono font-semibold rounded-md transition-colors duration-200 text-base"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="#schedule"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-cyan-500 font-mono rounded-md transition-colors duration-200 text-base"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Call
                </MagneticButton>
              </motion.div>

              {/* Quick Contact Options */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {[
                  {
                    icon: MessageSquare,
                    color: 'text-cyan-500',
                    title: 'Quick Chat',
                    desc: 'Response in < 2 hours',
                  },
                  {
                    icon: Calendar,
                    color: 'text-amber-500',
                    title: 'Discovery Call',
                    desc: '30-min video session',
                  },
                  {
                    icon: Mail,
                    color: 'text-green-500',
                    title: 'Detailed Brief',
                    desc: 'Send your project specs',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="p-4 rounded-lg border border-slate-700 bg-slate-800/30 transition-colors duration-200 hover:border-cyan-500/50"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -3 }}
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <item.icon className={`w-6 h-6 ${item.color} mx-auto mb-2`} />
                    <h3 className="font-mono text-sm font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Terminal-style prompt */}
              <motion.div
                className="mt-12 mx-auto max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.div
                  className="rounded-lg border border-slate-700 bg-slate-900/80 p-4 font-mono text-sm text-left"
                  whileHover={prefersReducedMotion ? {} : { borderColor: 'rgba(6, 182, 212, 0.5)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-slate-500 mb-2">$ agency_creative --help</div>
                  <div className="text-slate-400">
                    <span className="text-cyan-500">Available commands:</span>
                    <br />
                    <span className="text-amber-500 ml-2">--start-project</span>
                    <span className="text-slate-500 ml-2">Begin your journey</span>
                    <br />
                    <span className="text-amber-500 ml-2">--view-portfolio</span>
                    <span className="text-slate-500 ml-2">See our work</span>
                    <br />
                    <span className="text-amber-500 ml-2">--contact</span>
                    <span className="text-slate-500 ml-2">Get in touch</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <span className="text-green-400">$</span>
                    <motion.span
                      className="ml-2 w-2 h-4 bg-cyan-500"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
