<script setup lang="ts">
defineProps<{
  h1?: String,
  subtitle?: String
}>()
</script>

<template>
<section class="flex bg-grass text-white" style="height: 100%; text-align: center">
  <h1>{{h1}}</h1>
  <i>{{subtitle}}</i>
</section>
</template>