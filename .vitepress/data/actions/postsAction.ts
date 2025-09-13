import type { Post } from '../../types'
import { getAllMarkdownFiles, parseFileToPost } from '../services'

export function postsAction(): Post[] {
  try {
    return getAllMarkdownFiles().map((filePath) => parseFileToPost(filePath))
  } catch (e) {
    console.error(e instanceof Error ? e.message : String(e))
    throw new Error('Failed to retrieve article')
  }
}
