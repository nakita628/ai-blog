import type { Theme } from 'vitepress'

import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import 'virtual:group-icons.css'
import './custom.css'
import NewPosts from '../features/NewPosts.vue'
import PagePosts from '../features/PagePosts.vue'
import PageTags from '../features/PageTags.vue'
import Tags from '../features/Tags.vue'
import X from '../features/X.vue'
import YouTube from '../features/YouTube.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {})
  },
  enhanceApp({ app }) {
    app.component('YouTube', YouTube)
    app.component('X', X)
    app.component('PagePosts', PagePosts)
    app.component('Tags', Tags)
    app.component('PageTags', PageTags)
    app.component('NewPosts', NewPosts)
  },
} satisfies Theme
