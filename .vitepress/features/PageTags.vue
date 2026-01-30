<script lang="ts" setup>
import { ref } from 'vue'
import Pagination from '../components/Pagination.vue'
import { getPosts } from '../hooks/postsHooks.ts'

const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
  page: {
    type: Number,
    required: true,
  },
})

const posts = ref(getPosts().filter((post) => post.tags.includes(props.tag)))
</script>

<template>
  <Pagination :baseUrl="`/ai-blog/tags/${props.tag}`" :posts="posts" :page="props.page" />
</template>
