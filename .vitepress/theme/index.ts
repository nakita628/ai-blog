// https://vitepress.dev/guide/custom-theme

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import { h } from 'vue'
import 'virtual:group-icons.css'
import './style.css'

import NewPosts from '../components/NewPosts.vue'
import PagePosts from '../components/PagePosts.vue'
import PageTags from '../components/PageTags.vue'
import Tags from '../components/Tags.vue'
import X from '../components/X.vue'
import YouTube from '../components/YouTube.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
    app.component('YouTube', YouTube)
    app.component('X', X)
    app.component('PagePosts', PagePosts)
    app.component('Tags', Tags)
    app.component('PageTags', PageTags)
    app.component('NewPosts', NewPosts)
  },
} satisfies Theme
