import markdownItPlantuml from 'markdown-it-plantuml'
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { postsAction } from './data/actions/postsAction'
import { tagsAction } from './data/actions/tagsAction'
import type { Post } from './types'

export const posts: Post[] = postsAction()
export const tags: string[] = tagsAction()

const items = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Posts', link: '/posts/page/1' },
  { text: 'Tags', link: '/tags' },
]

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "AI's Blog",
    description: "AI's Blog",
    base: '/ai-blog/',
    // head: [["link", { rel: "icon", type: "image/svg+xml", href: "*.svg" }]],
    appearance: 'force-dark',
    markdown: {
      config(md) {
        md.use(groupIconMdPlugin)
        md.use(markdownItPlantuml)
        md.use(tabsMarkdownPlugin)
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
      // https://vitepress.dev/reference/default-theme-config
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
