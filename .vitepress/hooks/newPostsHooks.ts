import type { Post } from '../types'

declare const __POSTS__: Post[]

export const getNewPosts = (num: number) => {
  const posts = __POSTS__
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return posts.slice(0, num)
}
