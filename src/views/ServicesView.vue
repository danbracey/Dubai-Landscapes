<script setup lang="ts">
import Hero from "@/components/HeroBanner.vue";
import TextBlock from "@/components/TextBlock.vue";
import GreenBanner from "@/components/GreenBanner.vue";
</script>

<template>
  <Hero h1="Landscaping Services" subtitle="For your personal oasis in the UAE"></Hero>
  <TextBlock :style="{ 'background-image': `url(${IMG_9413})` }">
    Dubai-Landscapes is one of the most experienced and reliable garden landscaping companies in the UAE.
    Experts in both soft and hard landscaping, we’re able to do it all, from providing perfect paving to enhancing
    gardens with flowers and plants that are able to withstand the UAE’s unique climate. Our team is full of local
    experts who have extensive knowledge of the type of plants that will work best for your outdoor space.
  </TextBlock>
  <GreenBanner>Our range of landscaping services includes:</GreenBanner>
  <section class="grid grid-cols-3 text-center text-3xl md:text-6xl tauri-regular text-white grid-height text-outline" id="services-grid">
    <div class="relative grid-height" :style="{ 'background-image': `url(${IMG_9772})` }">
      <div class="absolute inset-0 flex items-center justify-center">Gazebos</div>
    </div>
    <div class="relative grid-height" :style="{ 'background-image': `url(${IMG_9413})` }">
      <div class="absolute inset-0 flex items-center justify-center">Paving</div>
    </div>
    <div class="relative grid-height" :style="{ 'background-image': `url(${IMG_9648})` }">
      <div class="absolute inset-0 flex items-center justify-center">Pergola</div>
    </div>
    <div class="relative grid-height" :style="{ 'background-image': `url(${_016A3065})` }">
      <div class="absolute inset-0 flex items-center justify-center">Decking</div>
    </div>
    <div class="relative grid-height" :style="{ 'background-image': `url(${_016A3298})` }">
      <div class="absolute inset-0 flex items-center justify-center">Water Features</div>
    </div>
    <div class="relative grid-height" :style="{ 'background-image': `url(${_016A3170})` }">
      <div class="absolute inset-0 flex items-center justify-center">Barbecue Areas</div>
    </div>
  </section>

  <GreenBanner>and much more!</GreenBanner>
  <TextBlock :style="{ 'background-image': `url(${IMG_9685})` }">
    Our team can transform every garden or outdoor space, taking on board the unique requirements of our customers.
    We never take a ‘one size fits all’ approach, instead tailoring our services specifically to the needs of our clients
  </TextBlock>
  <TextBlock :style="{ 'background-image': `url(${uk_flag})` }">
    A British-owned company, whose entire team is English managed, we always use products that have been manufactured
    using the highest quality materials. This includes award-winning artificial turf from Easigrass,
    a product that is 100% British designed as well as child and pet safe.
  </TextBlock>
  <TextBlock :style="{ 'background-image': `url(${IMG_9596})` }">
    Operating across the entirety of Dubai and Abu Dhabi, whatever landscaping services you require, Dubai-Landscapes
    is here to help. Contact us by WhatsApp, on the phone or by filling out our online form,
    and a member of our team will be able to help.
  </TextBlock>
</template>
<script lang="ts">
  import IMG_9772 from '@/assets/IMG_9772.webp';
  import IMG_9413 from '@/assets/IMG_9413.webp';
  import IMG_9648 from '@/assets/IMG_9648.webp';
  import IMG_9685 from '@/assets/IMG_9685.webp';
  import IMG_9596 from '@/assets/IMG_9596.webp';
  import _016A3065 from '@/assets/016A3065.webp';
  import _016A3298 from '@/assets/016A3298.webp';
  import _016A3170 from '@/assets/016A3170.webp';
  import uk_flag from '@/assets/uk_flag.webp';
</script>