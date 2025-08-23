import type { Post } from '../types'

declare const __POSTS__: Post[]

export const getPosts = () => {
  return __POSTS__
}
