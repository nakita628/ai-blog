<script lang="ts" setup>
import type { Ref } from 'vue'
import { ref } from 'vue'
import Pagination from '../components/Pagination.vue'
import { getPosts } from '../hooks/postsHooks.ts'
import type { Post } from '../types.ts'

const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
})

const posts: Ref<readonly Post[]> = ref(getPosts())
</script>

<template>
  <Pagination baseUrl="/ai-blog/posts" :posts="posts" :page="props.page" />
</template>
