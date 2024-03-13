<script setup lang="ts">
import Hero from "@/components/HeroBanner.vue";
import GreenBanner from "@/components/GreenBanner.vue";
import TextBlock from "@/components/TextBlock.vue";
</script>

<template>
  <Hero h1="Our Projects" subtitle="Grab a glimpse of our work"></Hero>
  <TextBlock :style="{ 'background-image': `url(${IMG_9804})` }">
    Over the years, the team here at Dubai-Landscapes has worked on a whole host of projects throughout the UAE,
    helping to enhance the outdoor space of numerous clients in the region. While we could tell you about our best work,
    we thought it would be better to show you instead. On this page, you’ll find our projects gallery where you can
    browse through some of our recent projects.
  </TextBlock>
  <GreenBanner>Projects Gallery</GreenBanner>
  <section class="grid grid-cols-6 text-center text-3xl md:text-6xl tauri-regular text-white grid-height text-outline" id="services-grid">
    <div class="relative grid-height" :style="{ 'background-image': `url(${IMG_9804})` }"></div>
    <div class="relative grid-height" :style="{ 'background-image': `url(${IMG_9413})` }"></div>
    <div class="relative grid-height" :style="{ 'background-image': `url(${IMG_9648})` }"></div>
    <div class="relative grid-height" :style="{ 'background-image': `url(${_016A3065})` }"></div>
    <div class="relative grid-height" :style="{ 'background-image': `url(${_016A3298})` }"></div>
    <div class="relative grid-height" :style="{ 'background-image': `url(${_016A3170})` }"></div>
    <div class="relative grid-height" :style="{ 'background-image': `url(${IMG_9700})` }"></div>
    <div class="relative grid-height" :style="{ 'background-image': `url(${IMG_9373})` }"></div>
    <div class="relative grid-height" :style="{ 'background-image': `url(${CM3_4146})` }"></div>
    <div class="relative grid-height" :style="{ 'background-image': `url(${IMG_9582})` }"></div>
    <div class="relative grid-height" :style="{ 'background-image': `url(${_016A3289})` }"></div>
    <div class="relative grid-height" :style="{ 'background-image': `url(${IMG_9725})` }"></div>
  </section>
</template>

<script lang="ts">
import IMG_9804 from '@/assets/IMG_9804.webp';
import IMG_9413 from '@/assets/IMG_9413.webp';
import IMG_9648 from '@/assets/IMG_9648.webp';
import _016A3065 from '@/assets/016A3065.webp';
import _016A3298 from '@/assets/016A3298.webp';
import _016A3170 from '@/assets/016A3170.webp';
import IMG_9700 from '@/assets/IMG_9700.webp';
import IMG_9373 from '@/assets/IMG_9373.webp';
import CM3_4146 from '@/assets/CM3_4146.webp';
import IMG_9582 from '@/assets/IMG_9582.webp';
import _016A3289 from '@/assets/016A3289.webp';
import IMG_9725 from '@/assets/IMG_9725.webp';
</script>