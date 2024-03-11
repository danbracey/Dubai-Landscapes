<script setup lang="ts">
defineProps<{
  background_img?: String
}>()

</script>

<template>
  <article class="text-white py-10 paragraph" :style="{ backgroundImage: 'url(/src/assets/' + background_img + ')' }">
    <p class="px-20 py-10 tauri-regular text-xl">
      <slot></slot>
    </p>
  </article>
</template>