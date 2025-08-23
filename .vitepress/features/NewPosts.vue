<script lang="ts" setup>
import { getNewPosts } from '../hooks'

const newPosts = getNewPosts(5)
</script>

<template>
  <div v-for="post in newPosts" :key="post.link" class="border-b border-gray-600">
    <p>{{ post.date }}</p>
    <a :href="post.link" class="!no-underline">
      {{ post.title }} 
    </a>
    <p>{{ post.description }}</p>
  </div>
</template>
