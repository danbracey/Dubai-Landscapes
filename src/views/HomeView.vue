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
    carousel.style.backgroundImage = "url('/src/assets/" + carousel_options[i][3] + "')";

    i++;
  } else {
    i = 0; //Reset counter to go through the carousel again
  }
}, 5000);
</script>

<template>
  <Carousel :banner_text="banner_text" :button_text="button_text" :route_name="route_name" id="carousel"></Carousel>
</template>