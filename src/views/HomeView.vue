<script setup lang="ts">
import Carousel from "@/components/Carousel.vue";
import { ref } from 'vue';

/** Setting default values for the Carousel **/
let banner_text = ref("UAE's leading landscapes");
let button_text = ref("View our Gallery!")
let route_name = ref("gallery")

const carousel_options = [
    ['Got Questions?','Contact Us!','contact-us'],
    ['Our Services','View our services','services'],
    ["UAE's leading landscapes", 'View our Gallery!', 'gallery']
]

let i = 0;
//Update carousel every 5 seconds
window.setInterval(function(){
  if(i < carousel_options.length) {
    banner_text.value = carousel_options[i][0]
    button_text.value = carousel_options[i][1]
    route_name.value = carousel_options[i][2]

    i++;
  } else {
    i = 0; //Reset counter to go through the carousel again
  }
}, 5000);
</script>

<template>
  <Carousel :banner_text="banner_text" :button_text="button_text" :route_name="route_name"></Carousel>
</template>