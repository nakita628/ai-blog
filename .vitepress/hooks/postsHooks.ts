import type { Post } from '../types'

declare const __POSTS__: readonly Post[]

export const getPosts = () => {
  return __POSTS__
}
