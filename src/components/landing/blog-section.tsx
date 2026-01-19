'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calendar, Clock, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FadeIn } from '@/components/motion/fade-in'
import Image from 'next/image'
import type { PostWithMedia } from '@/lib/posts'

type BlogSectionProps = {
  posts: PostWithMedia[]
}

function formatDate(dateString: string | null | undefined): string {
  if (!dateString) return 'No date'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="py-24 border-t border-slate-800 bg-slate-900" aria-label="Blog">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-mono border-slate-700 text-amber-500">
            {'// Latest Insights'}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
            <span className="text-cyan-500">blog</span>
            <span className="text-slate-500">.filter(</span>
            <span className="text-amber-500">latest</span>
            <span className="text-slate-500">{' => '}</span>
            <span className="text-green-400">{'<Insights />'}</span>
            <span className="text-slate-500">)</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technical insights, tutorials, and thoughts on building better software.
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
                ~/blog $ cat --latest posts.md
              </span>
            </div>

            {/* Blog Posts Grid */}
            {posts.length > 0 ? (
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => {
                  const tags = post.tags?.map((t) => t.tag) || []
                  return (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link href={`/blog/${post.slug}`}>
                          <article className="h-full border border-slate-700 bg-slate-800/50 overflow-hidden transition-colors duration-200 hover:border-cyan-500/50 cursor-pointer group rounded-lg">
                            <div className="p-0">
                              {/* Post Preview Image or Icon */}
                              <div className="relative h-32 bg-linear-to-br from-slate-700 to-slate-800 overflow-hidden flex items-center justify-center">
                                {post.featuredImage?.url ? (
                                  <Image
                                    src={post.featuredImage.url}
                                    alt={post.featuredImage.alt || post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                ) : (
                                  <FileText className="w-12 h-12 text-slate-600 group-hover:text-cyan-500/50 transition-colors" />
                                )}
                              </div>

                              {/* Post Info */}
                              <div className="p-4">
                                <div className="flex items-center gap-3 mb-3 text-xs font-mono text-slate-500">
                                  <span className="flex items-center gap-1">
                                    <Calendar size={12} />
                                    <time dateTime={post.publishedAt || undefined}>
                                      {formatDate(post.publishedAt)}
                                    </time>
                                  </span>
                                  {post.readTime && (
                                    <span className="flex items-center gap-1">
                                      <Clock size={12} />
                                      {post.readTime}
                                    </span>
                                  )}
                                </div>

                                <h3 className="font-mono font-semibold text-white mb-2 group-hover:text-cyan-500 transition-colors">
                                  {post.title}
                                </h3>
                                <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                                  {post.excerpt}
                                </p>

                                {tags.length > 0 && (
                                  <div className="flex flex-wrap gap-2">
                                    {tags.map((tag) => (
                                      <Badge
                                        key={tag}
                                        variant="outline"
                                        className="text-xs font-mono border-slate-600 text-slate-400"
                                      >
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </article>
                        </Link>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            ) : (
              <div className="p-12 text-center">
                <FileText className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400 font-mono">No posts yet. Check back soon!</p>
              </div>
            )}

            {/* Terminal Footer with View All */}
            <div className="px-6 py-4 border-t border-slate-700 bg-slate-800/30 flex items-center justify-between">
              <div className="font-mono text-sm text-slate-500">
                <span className="text-green-400">✓</span> {posts.length} posts loaded
                <span className="text-slate-600 ml-4">|</span>
                <span className="ml-4">Click to read more</span>
              </div>
              <Button
                asChild
                variant="ghost"
                className="font-mono text-sm text-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10"
              >
                <Link href="/blog" className="flex items-center gap-2">
                  View All Posts
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
