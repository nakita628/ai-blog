import { posts } from '../../.vitepress/config.mjs'

export default {
  paths() {
    return Array.from({ length: Math.ceil(posts.length / 20) }, (_, i: number) => ({
      params: {
        page: i + 1,
      },
    }))
  },
}
