<script setup lang="ts">

// defineProps<{
//   phone?: String,
//   email?: String
// }>()
import uk_flag from '../assets/uk_flag.webp';
import EnvelopeIcon from "@/components/icons/EnvelopeIcon.vue";
</script>

<template>
<nav class="flex flex-col sm:flex-row bg-black text-white bg-origin-padding p-4 " style="height: 100%; text-align: center">
  <RouterLink to="/home" class="flex-auto amaranth-regular sm:text-3xl">Home</RouterLink>
  <RouterLink to="/services" class="flex-auto amaranth-regular sm:text-3xl">Landscaping Services</RouterLink>
  <RouterLink to="/gallery" class="flex-auto amaranth-regular sm:text-3xl">Gallery</RouterLink>
  <RouterLink to="/faq" class="flex-auto amaranth-regular sm:text-3xl">FAQ</RouterLink>
  <RouterLink to="/contact-us" class="flex-auto amaranth-regular sm:text-3xl">Contact Us</RouterLink>
</nav>
</template>