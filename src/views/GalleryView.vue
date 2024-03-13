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
  <section class="grid grid-cols-3 text-center text-3xl md:text-6xl tauri-regular text-white grid-height text-outline" id="services-grid">
    <img class="relative grid-height h-full w-full object-cover" :src="IMG_9804" alt="A detached house with landscaped garden">
    <img class="relative grid-height h-full w-full object-cover" :src="IMG_9413" alt="Our paving work with client's garage in background">
    <img class="relative grid-height h-full w-full object-cover" :src="IMG_9665" alt="A landscaped garden and gazebo in front of a house">
    <img class="relative grid-height h-full w-full object-cover" :src="IMG_9596" alt="A lovely outdoor barbecue area next to a pergola">
    <img class="relative grid-height h-full w-full object-cover" :src="IMG_9648" alt="Another view of the pergola/barbecue area">
    <img class="relative grid-height h-full w-full object-cover" :src="_016A3065" alt="Outdoor decking benches with fire pit">
    <img class="relative grid-height h-full w-full object-cover" :src="_016A3298" alt="Water feature in orange vase with seating in background">
    <img class="relative grid-height h-full w-full object-cover" :src="_016A3170" alt="Outdoor seating area in garden">
    <img class="relative grid-height h-full w-full object-cover" :src="IMG_9700" alt="Another view of the landscaped garden and gazebo in front of a house">
    <img class="relative grid-height h-full w-full object-cover" :src="IMG_9373" alt="Landscaped garden with arranged paving slabs creating a path">
    <img class="relative grid-height h-full w-full object-cover" :src="CM3_4146" alt="Outdoor seating area from the flora's viewpoint">
    <img class="relative grid-height h-full w-full object-cover" :src="IMG_9582" alt="Our landscaping services look impressive even in British wet weather!">
    <img class="relative grid-height h-full w-full object-cover" :src="_016A3289" alt="Another fire pit view with decking for seats">
    <img class="relative grid-height h-full w-full object-cover" :src="IMG_9725" alt="Front-of-house view of client's landscaped house">
    <img class="relative grid-height h-full w-full object-cover" :src="IMG_9497" alt="Front-of-house view of client's landscaped picturesque garden">
  </section>
</template>

<script lang="ts">
import IMG_9804 from '@/assets/IMG_9804.webp';
import IMG_9413 from '@/assets/IMG_9413.webp';
import IMG_9665 from '@/assets/IMG_9665.webp';
import IMG_9648 from '@/assets/IMG_9648.webp';
import IMG_9497 from '@/assets/IMG_9497.webp';
import IMG_9596 from '@/assets/IMG_9596.webp';
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