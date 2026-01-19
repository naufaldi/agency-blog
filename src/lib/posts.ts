import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Post, Media } from '@/payload-types'

export type PostWithMedia = Omit<Post, 'featuredImage'> & {
  featuredImage?: Media | null
}

/**
 * Get all published posts, sorted by publishedAt date
 */
export async function getPosts(): Promise<PostWithMedia[]> {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      status: {
        equals: 'published',
      },
    },
    sort: '-publishedAt',
    depth: 1,
  })

  return docs as PostWithMedia[]
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<PostWithMedia | null> {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
      status: {
        equals: 'published',
      },
    },
    depth: 1,
    limit: 1,
  })

  return (docs[0] as PostWithMedia) || null
}

/**
 * Get latest posts for homepage section
 */
export async function getLatestPosts(limit: number = 3): Promise<PostWithMedia[]> {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      status: {
        equals: 'published',
      },
    },
    sort: '-publishedAt',
    depth: 1,
    limit,
  })

  return docs as PostWithMedia[]
}

/**
 * Get all post slugs for static generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      status: {
        equals: 'published',
      },
    },
    depth: 0,
  })

  return docs.map((post) => post.slug)
}
