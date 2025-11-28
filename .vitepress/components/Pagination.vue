<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { Post } from '../types'

const { posts, baseUrl, page } = defineProps<{
  posts: readonly Post[]
  baseUrl: string
  page: number
}>()

const PER_PAGE = 20 as const

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

  <div v-for="post in viewPosts" :key="post.link" class="border-b border-gray-600">
    <p>{{ post.date }}</p>
    <a :href="post.link" class="!no-underline">
      {{ post.title }} 
    </a>
    <p>{{ post.description }}</p>
  </div>

  <div class="flex justify-between items-center mt-4">
    <a v-if="current > 1" :href="pageLink(current - 1)" class="!no-underline">← Prev</a>
    <span v-else class="invisible">← Prev</span>
    <span>{{ current }} / {{ total }}</span>
    <a v-if="current < total" :href="pageLink(current + 1)" class="!no-underline">Next →</a>
    <span v-else class="invisible">Next →</span>
  </div>
</template>
