import { posts, tags } from '../../../.vitepress/config.mjs'

export default {
  async paths() {
    const paths = tags.flatMap((tag) => {
      const tagPosts = posts.filter((post) => post.tags.includes(tag))
      return Array.from({ length: Math.ceil(tagPosts.length / 20) }, (_, i) => ({
        params: { tag, page: i + 1 },
      }))
    })
    return paths
  },
}
