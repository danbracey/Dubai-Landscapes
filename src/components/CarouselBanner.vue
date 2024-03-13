<script setup lang="ts">
import type {RouteRecordName} from "vue-router";

defineProps<{
  banner_text?: String,
  button_text?: String,
  route_name?: RouteRecordName
}>()

</script>

<template>
<!-- This carousel allows customisation of the banner text, button text and route the button uses by passing associated prop data -->
<section class="grid text-white bg-center text-center align-middle h-1/2 space-y-4 place-items-center border-olive border-b-8" style="height: 22.813vw; min-height: 20vw" id="carousel">
  <p class="text-4xl sm:text-4xl md:text-7xl tauri-regular" style="-webkit-text-stroke: 3px black;">{{banner_text}}</p>
  <button class="bg-black border-5 rounded-full sm:text-2xl md:text-3xl p-2 sm:p-5 border-4 border-olive mb-8"><RouterLink :to="{name: route_name}">{{ button_text }}</RouterLink></button>
</section>
</template>

