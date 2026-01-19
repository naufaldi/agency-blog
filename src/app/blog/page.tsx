import { Header } from '@/components/landing/header'
import { Footer } from '@/components/landing/footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Clock, FileText, ArrowLeft, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { getPosts, type PostWithMedia } from '@/lib/posts'
import Image from 'next/image'

function formatDate(dateString: string | null | undefined): string {
  if (!dateString) return 'No date'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function PostCard({ post }: { post: PostWithMedia }) {
  const tags = post.tags?.map((t) => t.tag) || []

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full border-slate-700 bg-slate-800/50 overflow-hidden transition-all duration-200 hover:border-cyan-500/50 hover:scale-[1.02] hover:-translate-y-1 cursor-pointer group">
        <CardContent className="p-0">
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
                {formatDate(post.publishedAt)}
              </span>
              {post.readTime && (
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              )}
            </div>

            <h2 className="font-mono font-semibold text-white mb-2 group-hover:text-cyan-500 transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-slate-400 mb-4 line-clamp-3">{post.excerpt}</p>

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
        </CardContent>
      </Card>
    </Link>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <AlertCircle className="w-16 h-16 text-slate-600 mb-4" />
      <h3 className="font-mono text-xl text-white mb-2">No posts yet</h3>
      <p className="text-slate-400 max-w-md">
        Blog posts will appear here once they are published. Check back soon!
      </p>
    </div>
  )
}

export default async function BlogPage() {
  const posts = await getPosts()

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

            {/* Blog Posts Grid or Empty State */}
            {posts.length > 0 ? (
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="p-6">
                <EmptyState />
              </div>
            )}

            {/* Terminal Footer */}
            <div className="px-6 py-4 border-t border-slate-700 bg-slate-800/30">
              <div className="font-mono text-sm text-slate-500">
                <span className="text-green-400">✓</span> {posts.length} posts found
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
