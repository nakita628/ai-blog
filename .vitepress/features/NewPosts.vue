<script lang="ts" setup>
import { getNewPosts } from '../hooks'
import Posts from './Posts/Posts.vue'

const newPosts = getNewPosts(5)
</script>

<template>
  <Posts v-for="post in newPosts" :key="post.link" :post="post" />
</template>
