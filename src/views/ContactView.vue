<script setup lang="ts">
import Hero from "@/components/Hero.vue";
</script>

<template>
  <Hero h1="Contact Us" subtitle="Get in touch today"></Hero>
  <!-- Can't use TextBlock component here due to multi-paragraphs -->
  <article class="text-white py-36 paragraph" :style="{ backgroundImage: 'url(/src/assets/016A3298.webp)' }">
    <p class="px-20 py-10 tauri-regular text-xl">
      If you need any more information on the range of services Dubai-Landscapes offers,
      or want to hire our team to carry out work on your property in the UAE, we’re always here to help.
    </p>
    <p class="px-20 py-5 tauri-regular text-xl">
      We place customer service at the forefront of everything we do and strive to bring British service to the
      UAE market.
    </p>
    <p class="px-20 py-5 tauri-regular text-xl">
      To find out more information about how we can enhance your outdoor living experience,
      drop us a message on WhatsApp or give us a call. Alternatively,you can complete the online form and a member of
      our team will get in touch with you.
    </p>
  </article>
</template>
