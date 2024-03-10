<script setup lang="ts">
import uk_flag from '../assets/uk_flag.webp';
import EnvelopeIcon from "@/components/icons/EnvelopeIcon.vue";
</script>

<template>
<section class="grid content-center justify-items-center text-white img_9804 text-center align-middle h-1/2 space-y-4 items-center" style="height: 22.813vw; min-height: 20vw">
  <!-- 9804 -->
  <p class="text-4xl sm:text-4xl md:text-7xl tauri-regular" style="-webkit-text-stroke: 3px black;">UAE's leading landscapes</p>
  <button class="bg-black border-5 rounded-full sm:text-2xl md:text-3xl p-5 border-4 border-olive mb-8 w-1/6"><RouterLink :to="{name: 'gallery'}">View our Gallery</RouterLink></button>
</section>
</template>