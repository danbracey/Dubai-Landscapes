import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from "@/views/GalleryView.vue";
import ServicesView from "@/views/ServicesView.vue";
import FAQView from "@/views/FAQView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQView
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactView
    },
  ]
})

export default router
