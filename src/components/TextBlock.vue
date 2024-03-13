<script setup lang="ts">
defineProps<{
  background_img?: String
}>()

</script>

<template>
  <article class="text-white py-36 paragraph">
    <p class="px-20 py-10 tauri-regular text-xl">
      <slot></slot>
    </p>
  </article>
</template>