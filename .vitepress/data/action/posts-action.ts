import type { Post } from '../../types'
import { getAllMarkdownFiles, parseFileToPost } from '../service'

export function postsAction(): Post[] {
  try {
    return getAllMarkdownFiles().map((filePath) => parseFileToPost(filePath))
  } catch (e) {
    console.error(e)
    throw new Error('Failed to retrieve article')
  }
}
