<script setup lang="ts">
import Hero from "@/components/HeroBanner.vue";
import GreenBanner from "@/components/GreenBanner.vue";
import TextBlock from "@/components/TextBlock.vue";
</script>

<template>
  <Hero h1="Our Projects" subtitle="Grab a glimpse of our work"></Hero>
  <TextBlock background_img="IMG_9804.webp">
    Over the years, the team here at Dubai-Landscapes has worked on a whole host of projects throughout the UAE,
    helping to enhance the outdoor space of numerous clients in the region. While we could tell you about our best work,
    we thought it would be better to show you instead. On this page, you’ll find our projects gallery where you can
    browse through some of our recent projects.
  </TextBlock>
  <GreenBanner>Projects Gallery</GreenBanner>
  <section class="grid grid-cols-6 text-center text-3xl md:text-6xl tauri-regular text-white grid-height text-outline" id="services-grid">
    <div class="relative grid-height" style="background-image: url('/src/assets/IMG_9772.webp');"></div>
    <div class="relative grid-height" style="background-image: url('/src/assets/IMG_9413.webp');"></div>
    <div class="relative grid-height" style="background-image: url('/src/assets/IMG_9648.webp');"></div>
    <div class="relative grid-height" style="background-image: url('/src/assets/016A3065.webp');"></div>
    <div class="relative grid-height" style="background-image: url('/src/assets/016A3298.webp');"></div>
    <div class="relative grid-height" style="background-image: url('/src/assets/016A3170.webp');"></div>
    <div class="relative grid-height" style="background-image: url('/src/assets/IMG_9700.webp');"></div>
    <div class="relative grid-height" style="background-image: url('/src/assets/IMG_9373.webp');"></div>
    <div class="relative grid-height" style="background-image: url('/src/assets/CM3_4146.webp');"></div>
    <div class="relative grid-height" style="background-image: url('/src/assets/IMG_9582.webp');"></div>
    <div class="relative grid-height" style="background-image: url('/src/assets/016A3289.webp');"></div>
    <div class="relative grid-height" style="background-image: url('/src/assets/IMG_9725.webp');"></div>
  </section>
</template>
