'use client'

import type { Post } from '@/payload-types'

type RichTextProps = {
  data: Post['content'] | null | undefined
}

/**
 * Simple rich text renderer for Lexical content.
 * Renders paragraph text from the serialized editor state.
 */
export function RichTextContent({ data }: RichTextProps) {
  if (!data?.root?.children) {
    return null
  }

  return (
    <div className="rich-text-content">
      {data.root.children.map((node, index) => {
        return <RichTextNode key={index} node={node} />
      })}
    </div>
  )
}

function RichTextNode({ node }: { node: Record<string, unknown> }) {
  // Handle paragraph nodes
  if (node.type === 'paragraph') {
    const text = getTextContent(node)
    if (!text) return <p className="mb-4">&nbsp;</p>
    return <p className="mb-4 leading-relaxed">{text}</p>
  }

  // Handle heading nodes
  if (node.type === 'heading') {
    const text = getTextContent(node)
    const tag = node.tag as string
    const headingStyles: Record<string, string> = {
      h1: 'text-3xl font-bold mb-6 mt-8',
      h2: 'text-2xl font-bold mb-4 mt-6',
      h3: 'text-xl font-bold mb-3 mt-4',
      h4: 'text-lg font-bold mb-2 mt-3',
      h5: 'text-base font-bold mb-2 mt-2',
      h6: 'text-sm font-bold mb-1 mt-2',
    }
    const style = headingStyles[tag] || ''
    switch (tag) {
      case 'h1':
        return <h1 className={style}>{text}</h1>
      case 'h2':
        return <h2 className={style}>{text}</h2>
      case 'h3':
        return <h3 className={style}>{text}</h3>
      case 'h4':
        return <h4 className={style}>{text}</h4>
      case 'h5':
        return <h5 className={style}>{text}</h5>
      case 'h6':
        return <h6 className={style}>{text}</h6>
      default:
        return <h2 className={style}>{text}</h2>
    }
  }

  // Handle list nodes
  if (node.type === 'list') {
    const ListTag = node.listType === 'number' ? 'ol' : 'ul'
    const listStyle = node.listType === 'number' ? 'list-decimal' : 'list-disc'
    return (
      <ListTag className={`${listStyle} pl-6 mb-4 space-y-1`}>
        {(node.children as Record<string, unknown>[])?.map((child, idx) => (
          <RichTextNode key={idx} node={child} />
        ))}
      </ListTag>
    )
  }

  // Handle list item nodes
  if (node.type === 'listitem') {
    const text = getTextContent(node)
    return <li>{text}</li>
  }

  // Handle quote/blockquote nodes
  if (node.type === 'quote') {
    const text = getTextContent(node)
    return (
      <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-slate-300 my-4">
        {text}
      </blockquote>
    )
  }

  // Handle code blocks
  if (node.type === 'code') {
    const text = getTextContent(node)
    return (
      <pre className="bg-slate-800 border border-slate-700 rounded-lg p-4 mb-4 overflow-x-auto">
        <code className="text-sm text-cyan-400">{text}</code>
      </pre>
    )
  }

  // Default: try to get text content
  const text = getTextContent(node)
  if (text) {
    return <p className="mb-4">{text}</p>
  }

  return null
}

function getTextContent(node: Record<string, unknown>): string {
  if (typeof node.text === 'string') {
    return node.text
  }
  if (Array.isArray(node.children)) {
    return node.children.map((child) => getTextContent(child as Record<string, unknown>)).join('')
  }
  return ''
}
