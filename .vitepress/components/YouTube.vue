<script setup lang="ts">
defineProps<{ videoId: string }>()
</script>

<template>
  <div class="relative w-full overflow-hidden bg-black aspect-video">
    <iframe class="absolute inset-0 w-full h-full" :src="`https://www.youtube.com/embed/${videoId}`"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen />
  </div>
</template>
