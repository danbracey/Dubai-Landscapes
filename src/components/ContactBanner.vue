<script setup lang="ts">
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import uk_flag from '../assets/uk_flag.webp';
import EnvelopeIcon from "@/components/icons/EnvelopeIcon.vue";

defineProps<{
  phone?: String,
  email?: String
}>()
</script>

<template>
<section class="flex bg-olive text-white" style="height: 100%; text-align: center">
  <span class="basis-1/3 text-base hidden sm:block">
    <img :src="uk_flag" alt="Flag of the United Kingdom" class="british inline rounded-full">
    British company
  </span>
  <span class="sm:basis-3/3 text-base self-center content-center basis-full" id="phone_number">
    <!-- Including Phone and Envelope icons as SVGs in their own components so they can be re-used later by the client -->
    <PhoneIcon width="30"></PhoneIcon>
    {{phone}}
  </span>
  <span class="basis-1/3 text-base self-center hidden sm:block">
    <EnvelopeIcon width="30"></EnvelopeIcon>
    {{email}}
  </span>
</section>
</template>