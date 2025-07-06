import type { Post } from '../types'

// POSTS
declare const __POSTS__: Post[]

export const getPosts = () => {
  return __POSTS__
}
