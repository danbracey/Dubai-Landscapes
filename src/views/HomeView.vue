<script setup lang="ts">
import Carousel from "@/components/Carousel.vue";
import { ref } from 'vue';

/** Setting default values for the Carousel **/
let banner_text = ref("UAE's leading landscapes");
let button_text = ref("View our Gallery!")
let route_name = ref("gallery")

const carousel_options = [
    // ["banner text", "button text", "route path", "background image"]
    ['Got Questions?','Contact Us!','contact-us', 'IMG_9665.webp'],
    ['Our Services','View our services','services', 'IMG_9648.webp'],
    ["UAE's leading landscapes", 'View our Gallery!', 'gallery', 'IMG_9804.webp']
]

let i = 0;
//Update carousel every 5 seconds
window.setInterval(function(){
  if(i < carousel_options.length) {
    banner_text.value = carousel_options[i][0]
    button_text.value = carousel_options[i][1]
    route_name.value = carousel_options[i][2]
    let carousel = document.getElementById('carousel');
    carousel!.style.backgroundImage = "url('/src/assets/" + carousel_options[i][3] + "')";

    i++;
  } else {
    i = 0; //Reset counter to go through the carousel again
  }
}, 5000);
</script>

<template>
  <Carousel :banner_text="banner_text" :button_text="button_text" :route_name="route_name" id="carousel"></Carousel>
  <section class="bg-grass text-white">
    <h1 class="text-7xl text-center pt-5 font-bold">Garden Landscaping</h1>
    <p class="px-20 py-10">
      Your garden or outdoor space is an extension of your entire home. A place where you can relax after a long day, entertain friends and family or socialise with loved ones. At Dubai-Landscapes, we’ve spent a decade in the UAE, crafting bespoke outdoor living spaces that achieve exactly what our clients desire.
    </p>
    <ul class="px-20 mb-10">
      <li>A British company with more than 30 years in the industry, our UAE offering extends across the country, including Abu Dhabi, Dubai and the surrounding areas. </li>
      <li>Providing our customers with leading British design and installation services for a whole host of outdoor living elements, we always create customised spaces and bespoke gardens that perfectly match the unique specifications of our clients’ outdoor spaces, and align with your vision.</li>
    </ul>
  </section>
</template>