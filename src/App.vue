<script setup lang="ts">
import { RouterView } from 'vue-router'
import ContactBanner from "@/components/ContactBanner.vue";
import NavigationBar from "@/components/NavigationBar.vue";
</script>

<!-- This main template serves as an entry point to all pages, and components here are shared amongst all pages -->
<template>
  <header>
    <!-- Include contact banner with associated details (props) that can be changed here -->
    <ContactBanner phone="0118 999 881 999 119 7253" email="customer-services@dubai-landscapes.com"></ContactBanner>
    <!-- Insert the horizontal navigation bar -->
    <NavigationBar></NavigationBar>
  </header>
  <main>
    <!-- This SPA loads the necessary components from the Vue router -->
    <RouterView />
  </main>
  <!-- The client has not specified a footer requirement, instead contact details are included in the top Contact banner, as this matches their competition -->
</template>

<style src="./assets/tailwind.css"></style>