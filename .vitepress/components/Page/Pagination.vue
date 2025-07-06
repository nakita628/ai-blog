<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { Post } from '../../types'
import Posts from '../Posts/Posts.vue'

const { posts, baseUrl, page } = defineProps<{
  posts: Post[]
  baseUrl: string
  page: number
}>()

const PER_PAGE = 20

const current = ref(page || 1)
const asc = ref(false)
const viewPosts = computed(() =>
  [...posts]
    .sort((a, b) =>
      asc.value ? +new Date(a.date) - +new Date(b.date) : +new Date(b.date) - +new Date(a.date),
    )
    .slice((current.value - 1) * PER_PAGE, current.value * PER_PAGE),
)

const total = computed(() => Math.ceil(posts.length / PER_PAGE))
const pageLink = (p: number) => `${baseUrl}/page/${p}`
</script>

<template>
  <div class="flex justify-center mb-4">
    <a class="!no-underline" @click="asc = !asc">
      Sort By Date {{ asc ? 'Desc' : 'Asc' }}
    </a>
  </div>

  <Posts v-for="post in viewPosts" :key="post.link" :post="post" />

  <div class="flex justify-between items-center mt-4">
    <a v-if="current > 1" :href="pageLink(current - 1)" class="!no-underline">← Prev</a>
    <span v-else class="invisible">← Prev</span>
    <span>{{ current }} / {{ total }}</span>
    <a v-if="current < total" :href="pageLink(current + 1)" class="!no-underline">Next →</a>
    <span v-else class="invisible">Next →</span>
  </div>
</template>
