import { getAllMarkdownFiles, parseFileToPost } from '../service'

export function tagsAction(): string[] {
  try {
    const posts = getAllMarkdownFiles().map((filePath) => parseFileToPost(filePath))
    return Array.from(new Set(posts.flatMap((post) => post.tags))).sort()
  } catch (e) {
    console.error(e instanceof Error ? e.message : String(e))
    throw new Error('Failed to retrieve Tags')
  }
}
