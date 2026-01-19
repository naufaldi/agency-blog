'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Mail, Calendar, MessageSquare } from 'lucide-react'

export function CTASection() {
  return (
    <section id="contact" className="py-24 border-t border-slate-800" aria-label="Contact section">
      <div className="container mx-auto px-6">
        <div className="relative rounded-2xl border border-slate-700 bg-linear-to-br from-slate-800/50 to-slate-900 overflow-hidden">
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
            <Badge variant="outline" className="mb-6 font-mono border-slate-700 text-amber-500">
              {'// Technical CTA'}
            </Badge>

            <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-6 leading-tight">
              <span className="text-cyan-500">async</span>{' '}
              <span className="text-amber-500">function</span>{' '}
              <span className="text-white">startProject</span>
              <span className="text-slate-500">()</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
              Ready to transform your vision into digital reality?
              <br />
              <span className="font-mono text-cyan-500">
                {"// Let's write the next chapter together"}
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-mono font-semibold transition-all duration-200 group text-base"
              >
                <a href="mailto:hello@agency.creative">
                  <Mail className="mr-2 h-5 w-5" />
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-cyan-500 font-mono transition-all duration-200 text-base"
              >
                <a href="#schedule">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Call
                </a>
              </Button>
            </div>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="p-4 rounded-lg border border-slate-700 bg-slate-800/30 hover:border-cyan-500/50 transition-colors">
                <MessageSquare className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
                <h3 className="font-mono text-sm font-semibold text-white mb-1">Quick Chat</h3>
                <p className="text-xs text-slate-500">Response in &lt; 2 hours</p>
              </div>
              <div className="p-4 rounded-lg border border-slate-700 bg-slate-800/30 hover:border-cyan-500/50 transition-colors">
                <Calendar className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                <h3 className="font-mono text-sm font-semibold text-white mb-1">Discovery Call</h3>
                <p className="text-xs text-slate-500">30-min video session</p>
              </div>
              <div className="p-4 rounded-lg border border-slate-700 bg-slate-800/30 hover:border-cyan-500/50 transition-colors">
                <Mail className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <h3 className="font-mono text-sm font-semibold text-white mb-1">Detailed Brief</h3>
                <p className="text-xs text-slate-500">Send your project specs</p>
              </div>
            </div>

            {/* Terminal-style prompt */}
            <div className="mt-12 mx-auto max-w-lg">
              <div className="rounded-lg border border-slate-700 bg-slate-900/80 p-4 font-mono text-sm text-left">
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
                  <span className="ml-2 w-2 h-4 bg-cyan-500 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
