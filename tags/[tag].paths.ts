import { tags } from '../.vitepress/config'

export default {
  paths() {
    return tags.map((tag) => ({
      params: { tag },
    }))
  },
}
