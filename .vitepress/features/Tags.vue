<script lang="ts" setup>
import { getTags } from '../hooks'

const tags = getTags()
</script>

<template>
  <div class="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-4">
    <a v-for="tag in tags" :key="tag" :href="`/ai-blog/tags/${tag}/page/1`" class="!no-underline">
      {{ tag }}
    </a>
  </div>
</template>
