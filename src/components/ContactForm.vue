<script setup lang="ts">
defineProps<{
  h1?: String,
  subtitle?: String
}>()
</script>

<template>
<section class=" bg-grass py-10 text-center">
  <form class="lg:rounded-3xl bg-white py-10" @submit="submitForm" id="contact-form">
    <!-- Use v-if to check for any associated errors -->
    <div role="alert" v-if="errorArray.length" class="justify-center md:w-1/3 inline-block mb-10">
      <div class="bg-orange-500 text-white font-bold rounded-t px-4 py-2">
        Please correct the following errors
      </div>
      <ul class="border border-t-0 border-orange-400 rounded-b bg-orange-100 px-4 py-3 text-orange-700">
        <!-- If errors found, loop through them and display to the user -->
        <li v-for="error in errorArray" :key="error">{{ error }}</li>
      </ul>
    </div>

    <label class="tauri-regular block pb-5"> Your name
      <input type="text" name="name" autocomplete="name" v-model="name" class="rounded-full border-olive border-4 col-span-2 w-1/2"/>
    </label>
    <label class="tauri-regular block pb-5"> Your email
      <input type="email" name="email" autocomplete="email" v-model="email" class="rounded-full border-olive border-4 col-span-2 w-1/2"/>
    </label>
    <label class="tauri-regular block pb-5 lg:mx-40"> Your message
      <textarea class="rounded-2xl border-olive border-4 col-span-2 w-full" v-model="message" rows="5" name="message"></textarea>
    </label>
    <button type="submit" id="submit" name="submit" class="block"></button>
    <button class="bg-black border-5 rounded-3xl sm:text-2xl py-2 px-10 border-4 border-olive mb-8 text-white">Submit</button>
  </form>
</section>
</template>

<script lang="ts">

import {computed, type Ref, ref} from 'vue'

let errors: Ref = ref([]);
// Specify form fields and their associated types
let name: string | null = null;
let email: string | null = null;
let message: string | null = null;
// Email regex finds matches valid email addresses
const email_regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

//Using computed values to allow for Vue's Virtual DOM reactivity
const errorArray = computed(() => {
  return errors.value
})

function submitForm(e: any) {
  e.preventDefault(); //Don't execute the form
  errors.value = []; //Clear the error array when the form is submitted so the user doesn't see past errors.

  if (!name) {
    errors.value.push('Name required');
  }
  if (!email) {
    errors.value.push('Email address required');
  }
  if (!message) {
    errors.value.push("Your message is required - we're great at landscaping, not mind reading!");
  }
  if (email && !email_regex.test(email)) { //RegEx test the email against the pattern above
    // The 'type=email' on the email input should render this code unnecessary but better safe than sorry.
    errors.value.push('The email address supplied is invalid');
  }
}
</script>