import type { Post } from '../types'

declare const __POSTS__: readonly Post[]

export const getNewPosts = (num: number) => {
  return [...__POSTS__]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, num)
}
