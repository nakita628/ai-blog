import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { withMermaid } from 'vitepress-plugin-mermaid'

import { postsAction, tagsAction } from './data/actions'

export const posts = postsAction()
export const tags = tagsAction()

const items = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Posts', link: '/posts/page/1' },
  { text: 'Tags', link: '/tags' },
]

export default withMermaid(
  defineConfig({
    title: "AI's Blog",
    description: "AI's Blog",
    base: '/ai-blog/',
    appearance: 'force-dark',
    markdown: {
      config(md) {
        md.use(groupIconMdPlugin)
      },
    },
    vite: {
      define: {
        __POSTS__: posts,
        __TAGS__: tags,
      },
      plugins: [groupIconVitePlugin()],
      optimizeDeps: {
        include: ['vitepress-plugin-tabs'],
      },
      ssr: {
        noExternal: ['vitepress-plugin-tabs'],
      },
    },
    themeConfig: {
      nav: items,
      sidebar: items,
      search: {
        provider: 'local',
      },
      footer: {
        copyright: '© nakita628.github.io/ai-blog',
      },
    },
  }),
)
