<script setup lang="ts">
defineProps<{ videoId: string }>()
</script>

<template>
  <div class="relative aspect-video w-full overflow-hidden bg-black">
    <iframe
      class="absolute inset-0 h-full w-full"
      :src="`https://www.youtube.com/embed/${videoId}`"
      title="YouTube video player"
      frameborder="0"
      allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
      "
      allowfullscreen
    />
  </div>
</template>
