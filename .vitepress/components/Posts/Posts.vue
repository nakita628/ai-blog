<script lang="ts" setup>
import type { Post } from '../../types.ts'

defineProps({
  post: {
    type: Object as () => Post,
    required: true,
  },
})
</script>

<template>
  <div class="border-b border-gray-600">
    <p>{{ post.date }}</p>
    <a :href="post.link" class="!no-underline">
      {{ post.title }}
    </a>
    <p>{{ post.description }}</p>
  </div>
</template>