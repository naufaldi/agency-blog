import { Header } from '@/components/landing/header'
import { Footer } from '@/components/landing/footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Clock, FileText, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const allBlogPosts = [
  {
    id: 1,
    slug: 'building-scalable-react-architecture',
    title: 'Building Scalable React Architecture',
    excerpt:
      'Learn how to structure your React applications for maximum maintainability and performance. We cover folder structure, state management patterns, and component design principles.',
    date: '2026-01-15',
    readTime: '8 min',
    tags: ['React', 'Architecture', 'TypeScript'],
  },
  {
    id: 2,
    slug: 'modern-css-techniques-2026',
    title: 'Modern CSS Techniques for 2026',
    excerpt:
      'Explore the latest CSS features and how they can transform your web development workflow. From container queries to CSS layers.',
    date: '2026-01-10',
    readTime: '6 min',
    tags: ['CSS', 'Design', 'Web'],
  },
  {
    id: 3,
    slug: 'api-design-best-practices',
    title: 'API Design Best Practices',
    excerpt:
      'A deep dive into designing APIs that are intuitive, performant, and developer-friendly. RESTful patterns and beyond.',
    date: '2026-01-05',
    readTime: '10 min',
    tags: ['API', 'Backend', 'REST'],
  },
  {
    id: 4,
    slug: 'typescript-advanced-patterns',
    title: 'Advanced TypeScript Patterns',
    excerpt:
      'Master advanced TypeScript patterns including conditional types, mapped types, and template literal types.',
    date: '2025-12-28',
    readTime: '12 min',
    tags: ['TypeScript', 'Patterns', 'Advanced'],
  },
  {
    id: 5,
    slug: 'performance-optimization-nextjs',
    title: 'Performance Optimization in Next.js',
    excerpt:
      'Techniques for optimizing your Next.js applications for speed, including code splitting, image optimization, and caching strategies.',
    date: '2025-12-20',
    readTime: '9 min',
    tags: ['Next.js', 'Performance', 'Optimization'],
  },
  {
    id: 6,
    slug: 'testing-strategies-frontend',
    title: 'Testing Strategies for Frontend Applications',
    excerpt:
      'A comprehensive guide to testing React applications with Jest, Testing Library, and Playwright.',
    date: '2025-12-15',
    readTime: '11 min',
    tags: ['Testing', 'Jest', 'React'],
  },
]

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-900 min-h-screen pt-24">
        <div className="container mx-auto px-6 py-12">
          {/* Page Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-cyan-500 transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <Badge variant="outline" className="mb-4 font-mono border-slate-700 text-amber-500">
              {'// All Posts'}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
              <span className="text-cyan-500">blog</span>
              <span className="text-slate-500">.getAll()</span>
            </h1>
            <p className="text-slate-400 max-w-2xl">
              Technical insights, tutorials, and thoughts on building better software.
            </p>
          </div>

          {/* Terminal Window */}
          <div className="rounded-xl border border-slate-700 bg-slate-900 overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700 bg-slate-800/50">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-xs font-mono text-slate-500">~/blog $ ls -la --all</span>
            </div>

            {/* Blog Posts Grid */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allBlogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full border-slate-700 bg-slate-800/50 overflow-hidden transition-all duration-200 hover:border-cyan-500/50 hover:scale-[1.02] hover:-translate-y-1 cursor-pointer group">
                    <CardContent className="p-0">
                      {/* Post Preview Icon */}
                      <div className="relative h-32 bg-linear-to-br from-slate-700 to-slate-800 overflow-hidden flex items-center justify-center">
                        <FileText className="w-12 h-12 text-slate-600 group-hover:text-cyan-500/50 transition-colors" />
                      </div>

                      {/* Post Info */}
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-3 text-xs font-mono text-slate-500">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {formatDate(post.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {post.readTime}
                          </span>
                        </div>

                        <h2 className="font-mono font-semibold text-white mb-2 group-hover:text-cyan-500 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-sm text-slate-400 mb-4 line-clamp-3">{post.excerpt}</p>

                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
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
                </Link>
              ))}
            </div>

            {/* Terminal Footer */}
            <div className="px-6 py-4 border-t border-slate-700 bg-slate-800/30">
              <div className="font-mono text-sm text-slate-500">
                <span className="text-green-400">✓</span> {allBlogPosts.length} posts found
                <span className="text-slate-600 ml-4">|</span>
                <span className="ml-4">Click to read article</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
