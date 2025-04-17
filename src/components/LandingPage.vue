<template>
 
    <div class="relative isolate">
      
      <!--top page image-->
      <img src="/src/assets/texture.png" alt="Pool surface detail" class="w-full h-[100px] lg:h-[300px] object-cover">
      
      
      
      <section>
        <!--Hero banner-->
        <div class="sm:py-6 md:py-16 lg:pb-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-5xl text-center">
            
            <!-- <img src="/src/assets/oasis.webp" alt="Backyard pool with lounge chairs" class="mx-auto mb-6 rounded-lg shadow-md w-full max-w-4xl object-cover"/> -->
            <h1 class="text-balance text-5xl font-semibold tracking-tight text-blue-500 sm:text-7xl">Welcome to Blueharbor</h1>
            <p class="mt-8 text-pretty text-lg font-medium text-gray-900 sm:text-xl/8">
             Blueharbor is a locally owned pool care company focused on honest service and clear pricing. 
             We’re committed to doing right by our clients and our community. 
             Our technicians bring a careful, respectful approach to every visit. 
             We deliver reliable care for all types of pools in both homes and businesses.  
            </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="/schedule" class="rounded-full bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Get started</a>
              <a href="/company" class="text-sm/6 font-semibold text-sky-600">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
          
        </div>
        </div>
      </section>
      
      <!-- Services Cards -->
      <section class="max-w-6xl mx-auto my-6 px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div
        v-for="(card, index) in cards"
        :key="index"
        :class="`rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 ${card.bg}`"
      >
        <img
          :src="card.img"
          alt=""
          class="w-full h-60 object-cover"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold text-blue-700 mb-3">{{ card.title }}</h2>
          <p class="text-gray-700 mb-6">{{ card.description }}</p>
          <router-link
            :to="card.link"
            class="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded-full transition"
          >
            {{ card.cta }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)

const cards = ref([
  {
    title: 'Schedule a Consultation',
    description:
      'Let’s talk about your pool needs. We’ll walk you through your options and get you on a maintenance plan that works for you.',
    cta: 'Book Now',
    link: '/About',
    bg: 'bg-white',
    img: './src/assets/poolview.webp', // replace with your asset path
  },
  {
    title: 'Pay Your Bill Online',
    description:
      'Safe, secure, and fast. Use our online portal to handle your payments anytime.',
    cta: 'Pay Now',
    link: '/Schedule',
    bg: 'bg-blue-50',
    img: './src/assets/781370.webp', // replace with your asset path
  },
])
</script>