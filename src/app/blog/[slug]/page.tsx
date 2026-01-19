import { Header } from '@/components/landing/header'
import { Footer } from '@/components/landing/footer'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react'
import Link from 'next/link'
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { RichTextContent } from '@/components/rich-text-content'

type Props = {
  params: Promise<{ slug: string }>
}

function formatDate(dateString: string | null | undefined): string {
  if (!dateString) return 'No date'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const tags = post.tags?.map((t) => t.tag) || []

  return (
    <>
      <Header />
      <main className="bg-slate-900 min-h-screen pt-24">
        <article className="container mx-auto px-6 py-12 max-w-4xl">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-cyan-500 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs font-mono border-slate-600 text-amber-500"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <User size={14} />
                Agency Team
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {formatDate(post.publishedAt)}
              </span>
              {post.readTime && (
                <span className="flex items-center gap-2">
                  <Clock size={14} />
                  {post.readTime} read
                </span>
              )}
            </div>
          </header>

          {/* Featured Image */}
          {post.featuredImage?.url && (
            <div className="relative aspect-video mb-12 rounded-xl overflow-hidden border border-slate-700">
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-mono prose-headings:text-white prose-p:text-slate-300 prose-a:text-cyan-500 prose-a:no-underline hover:prose-a:underline prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-cyan-400 prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700 prose-blockquote:border-l-cyan-500 prose-blockquote:text-slate-400">
            {post.content && <RichTextContent data={post.content} />}
          </div>

          {/* Back to Blog */}
          <div className="mt-16 pt-8 border-t border-slate-700">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-mono text-cyan-500 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to all posts
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
