<script setup lang="ts">
defineProps<{
  h1?: String,
  subtitle?: String
}>()
</script>

<template>
<section class=" bg-grass py-10 text-center">
  <form class="lg:rounded-3xl bg-white py-10" @submit="submitForm" id="contact-form">
    <div role="alert" v-if="errorArray.length" class="justify-center md:w-1/3 inline-block mb-10">
      <div class="bg-orange-500 text-white font-bold rounded-t px-4 py-2">
        Please correct the following errors
      </div>
      <ul class="border border-t-0 border-orange-400 rounded-b bg-orange-100 px-4 py-3 text-orange-700">
        <li v-for="error in errorArray" :key="error">{{ error }}</li>
      </ul>
    </div>

    <label class="tauri-regular block pb-5"> Your name
      <input type="text" name="name" v-model="name" class="rounded-full border-olive border-4 col-span-2 w-1/2"/>
    </label>
    <label class="tauri-regular block pb-5"> Your email
      <input type="email" name="email" v-model="email" class="rounded-full border-olive border-4 col-span-2 w-1/2"/>
    </label>
    <label class="tauri-regular block pb-5 lg:mx-40"> Your message
      <textarea class="rounded-2xl border-olive border-4 col-span-2 w-full" v-model="message" rows="5"></textarea>
    </label>
    <button type="submit" id="submit" name="submit" class="block"></button>
    <button class="bg-black border-5 rounded-3xl sm:text-2xl py-2 px-10 border-4 border-olive mb-8 text-white">Submit</button>
  </form>
</section>
</template>

<script lang="ts">

import {computed, type Ref, ref, type UnwrapRef} from 'vue'

let errors: any = ref([]);
let name: string | any = null;
let email: string | any = null;
let message: any = null;
const email_regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const errorArray = computed(() => {
  return errors.value
})

function submitForm(e: any) {
  e.preventDefault();
  errors.value = [];

  if (!name) {
    errors.value.push('Name required');
  }
  if (!email) {
    errors.value.push('Email address required');
  }
  if (!message) {
    errors.value.push("Your message is required - we're great at landscaping, not mind reading!");
  }
  if (email && !email_regex.test(email)) {
    errors.value.push('The email address supplied is invalid');
  }
}
</script>