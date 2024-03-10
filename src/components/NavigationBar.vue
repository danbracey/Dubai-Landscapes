<script setup lang="ts">

// defineProps<{
//   phone?: String,
//   email?: String
// }>()
import uk_flag from '../assets/uk_flag.webp';
import EnvelopeIcon from "@/components/icons/EnvelopeIcon.vue";
</script>

<template>
<nav class="flex bg-black text-white" style="height: 100%; text-align: center">
  <RouterLink to="/home" class="flex-auto">Home</RouterLink>
  <RouterLink to="/services" class="flex-auto">Landscaping Services</RouterLink>
  <RouterLink to="/gallery" class="flex-auto">Gallery</RouterLink>
  <RouterLink to="/faq" class="flex-auto">FAQ</RouterLink>
  <RouterLink to="/contact-us" class="flex-auto">Contact Us</RouterLink>
</nav>
</template>