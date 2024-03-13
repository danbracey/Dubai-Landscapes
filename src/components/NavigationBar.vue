<script setup lang="ts">
</script>

<template>
<!-- Navigation uses appropriate semantic nav tag with RouterLink, allowing for route paths to change without needing to edit this template/component -->
<!-- Uses a mobile-first approach with flex-col, then switches to flex-row above a small breakpoint -->
<nav class="flex flex-col sm:flex-row bg-black text-white bg-origin-padding p-4 " style="height: 100%; text-align: center">
  <RouterLink :to="{name: 'home'}" class="flex-auto amaranth-regular sm:text-3xl">Home</RouterLink>
  <RouterLink :to="{name: 'services'}" class="flex-auto amaranth-regular sm:text-3xl">Landscaping Services</RouterLink>
  <RouterLink :to="{name: 'gallery'}" class="flex-auto amaranth-regular sm:text-3xl">Gallery</RouterLink>
  <RouterLink :to="{name: 'faq'}" class="flex-auto amaranth-regular sm:text-3xl">FAQ</RouterLink>
  <RouterLink :to="{name: 'contact-us'}" class="flex-auto amaranth-regular sm:text-3xl">Contact Us</RouterLink>
</nav>
</template>