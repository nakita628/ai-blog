import type { Matter, Post } from '../../types'

export function buildPost(matter: Matter, link: string): Post {
  return {
    title: matter.title,
    description: matter.description,
    date: formatDate(matter.date),
    tags: matter.tags,
    link: `/ai-blog/posts/${link}`,
  }
}

export function formatDate(dateStr: string): `${string}-${string}-${string}` {
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function relativeMd(str: string): string {
  return str.replace(/\.md$/, '')
}

export function fileFilter(file: string): boolean {
  return file.endsWith('.md') && file !== 'index.md' && file !== '[page].md'
}

export function isMarkdownFile(value: string): value is `${string}.md` {
  return value.endsWith('.md')
}
