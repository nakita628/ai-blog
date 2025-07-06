<script lang="ts" setup>
import type { Ref } from 'vue'
import { ref } from 'vue'

import { getPosts } from '../hooks/postsHooks.ts'
import Pagination from './Page/Pagination.vue'
import type { Post } from '../types.ts'

const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
})

const _posts: Ref<Post[]> = ref(getPosts())
</script>

<template>
    <Pagination baseUrl="/ai-blog/posts" :posts="_posts" :page="props.page" />
</template>