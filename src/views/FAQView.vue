<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import {type Ref, ref, type UnwrapRef} from 'vue'

let item1: Ref<UnwrapRef<boolean>>;
let item2: Ref<UnwrapRef<boolean>>;
let item3: Ref<UnwrapRef<boolean>>;
let item4: Ref<UnwrapRef<boolean>>;

item1 = ref(false);
item2 = ref(false);
item3 = ref(false);
item4 = ref(false);

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
  <section class="bg-grass tauri-regular sm:px-10 lg:px-40 py-10">
    <article class="pb-5">
      <h2 class="bg-white rounded-full text-3xl px-10" @click='item1 = !item1'>Question</h2>
      <p class="bg-white mx-10 rounded-b-lg mb-5 px-10" v-show="!item1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada tincidunt diam at egestas.
        In blandit augue lorem, et euismod diam mollis id. Aliquam in sem velit.
        Morbi facilisis suscipit ex vel bibendum. Suspendisse consequat in sapien a fermentum.
        Morbi vel metus et ex ornare ultrices vitae luctus eros.
        Etiam lacinia gravida turpis, eu molestie mauris convallis vel.
      </p>
    </article>
    <article class="pb-5">
      <h2 class="bg-white rounded-full text-3xl px-10" @click="item2 = !item2">Question</h2>
      <p class="bg-white mx-10 rounded-b-lg mb-5 px-10" v-show="item2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada tincidunt diam at egestas.
        In blandit augue lorem, et euismod diam mollis id. Aliquam in sem velit.
        Morbi facilisis suscipit ex vel bibendum. Suspendisse consequat in sapien a fermentum.
        Morbi vel metus et ex ornare ultrices vitae luctus eros.
        Etiam lacinia gravida turpis, eu molestie mauris convallis vel.
      </p>
    </article>
    <article class="pb-5">
      <h2 class="bg-white rounded-full text-3xl px-10" @click="item3 = !item3">Question</h2>
      <p class="bg-white mx-10 rounded-b-lg mb-5 px-10" v-show="item3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada tincidunt diam at egestas.
        In blandit augue lorem, et euismod diam mollis id. Aliquam in sem velit.
        Morbi facilisis suscipit ex vel bibendum. Suspendisse consequat in sapien a fermentum.
        Morbi vel metus et ex ornare ultrices vitae luctus eros.
        Etiam lacinia gravida turpis, eu molestie mauris convallis vel.
      </p>
    </article>
    <article class="pb-5">
      <h2 class="bg-white rounded-full text-3xl px-10" @click="item4 = !item4">Question</h2>
      <p class="bg-white mx-10 rounded-b-lg mb-5 px-10" v-show="item4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada tincidunt diam at egestas.
        In blandit augue lorem, et euismod diam mollis id. Aliquam in sem velit.
        Morbi facilisis suscipit ex vel bibendum. Suspendisse consequat in sapien a fermentum.
        Morbi vel metus et ex ornare ultrices vitae luctus eros.
        Etiam lacinia gravida turpis, eu molestie mauris convallis vel.
      </p>
    </article>
  </section>
</template>
