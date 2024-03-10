<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ContactBanner from "@/components/ContactBanner.vue";
</script>

<template>
  <header>
    <ContactBanner phone="0118 999 881 999 119 7253" email="customer-services@dubai-landscapes.com"></ContactBanner>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style src="./assets/tailwind.css"></style>