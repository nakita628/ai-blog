import { tags } from '../.vitepress/config.mjs'

export default {
  paths() {
    return tags.map((tag) => ({
      params: { tag },
    }))
  },
}
