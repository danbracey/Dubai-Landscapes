<script setup lang="ts">
defineProps<{
  h1?: String,
  subtitle?: String
}>()
</script>

<template>
<!-- This Hero banner is used on every page bar the home page, and allows customisation via associated prop data -->
<section class="bg-grass text-white py-10 text-center">
  <h1 class="text-7xl text-center pt-5 font-bold tauri-regular pb-10">{{h1}}</h1>
  <i class="text-2xl poppins-light-italic pb-10">{{subtitle}}</i>
</section>
</template>