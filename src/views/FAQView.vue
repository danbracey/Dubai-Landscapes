<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import TextBlock from "@/components/TextBlock.vue";
</script>

<template>
  <Hero h1="Frequently Asked Questions" subtitle=""></Hero>
  <!-- Can't use TextBlock component here due to multi-paragraphs -->
  <article class="text-white py-36 paragraph" :style="{ backgroundImage: 'url(/src/assets/016A3298.webp)' }">
    <p class="px-20 py-10 tauri-regular text-xl">
      Want to know more about the services we offer?
      Maybe you have specific questions about our processes that you’d like to learn more about?
      Or perhaps you just need clarification on a few details.
    </p>
    <p class="px-20 py-2 tauri-regular text-xl">
      Whatever the case, the team at Dubai-Landscapes is on hand to help answer any questions you have.
      Check out our list of frequently asked questions below;
      if your question is not covered feel free to contact our team directly.
      Drop us a message on WhatsApp or give us a call.
    </p>
  </article>
</template>
