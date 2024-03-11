<script setup lang="ts">
import uk_flag from '../assets/uk_flag.webp';
import EnvelopeIcon from "@/components/icons/EnvelopeIcon.vue";
</script>

<template>
  <!-- content-center justify-items-center -->
<section class="grid  text-white img_9804 text-center align-middle h-1/2 space-y-4 place-items-center" style="height: 22.813vw; min-height: 20vw">
  <!-- 9804 -->
  <p class="text-4xl sm:text-4xl md:text-7xl tauri-regular" style="-webkit-text-stroke: 3px black;">UAE's leading landscapes</p>
  <button class="bg-black border-5 rounded-full sm:text-2xl md:text-3xl p-2 sm:p-5 border-4 border-olive mb-8"><RouterLink :to="{name: 'gallery'}">View our Gallery</RouterLink></button>
</section>
</template>