<template>
  <div>
    <div class="bg-sky-100 p-8">
      <!-- Title -->
      <h2 class="text-center mb-6 pt-12 text-sky-700 font-bold text-5xl leading-10 tracking-wider">
        Our Services
      </h2>

      <!-- Description & CTA -->
      <p class="text-center text-sky-700 max-w-3xl mx-auto mb-6 pb-6">
        Discover our range of ozone therapy services designed to promote wellness, detoxification, and healing. 
        Each service is carefully curated to enhance your overall health and vitality. Explore our offerings 
        and schedule your appointment today. <a href="/history" class="text-sm/6 font-semibold text-sky-900">Learn more <span aria-hidden="true">→</span></a>
      </p>

      <!-- Services Cards -->
    <section class="max-w-6xl mx-auto mt-20 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10">
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
     
      <div class="mt-8 text-center py-12 mb-12">
          <a href="/contact" target="_blank" class="bg-sky-600 hover:bg-sky-700 text-white py-2 px-12 rounded-full text-lg font-semibold transition shadow-lg">
            Contact Us to Schedule an Appointment
          </a>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cards = ref([
  
  {
    title: 'Pay Your Bill Online',
    description:
      'Safe, secure, and fast. Use our online portal to handle your payments anytime.',
    cta: 'Pay Now',
    link: '/Schedule',
    bg: 'bg-blue-50',
    img: './src/assets/781370.webp', // replace with your asset path
  },
  {
    title: 'Weekly & Bi-Weekly Cleaning',
    description: 'Regular cleaning schedules to keep your pool consistently sparkling and swim-ready.',
    cta: 'Pay Now',
    link: '/Schedule',
    bg: 'bg-blue-50',
    img: './src/assets/781370.webp',
  },
{
    title: 'Filter Maintenance',
    description: 'Routine checks and replacements to ensure optimal water circulation and clarity.',
    cta: 'Pay Now',
    link: '/Schedule',
    bg: 'bg-blue-50',
    img: './src/assets/781370.webp',
},
{
    title: 'Salt & Chlorine Balancing',
    description: 'Precise chemical balancing for safe, comfortable swimming conditions.',
    cta: 'Pay Now',
    link: '/Schedule',
    bg: 'bg-blue-50',
    img: './src/assets/781370.webp',
},
{
    title: 'Green Pool Recovery',
    description: 'Fast, effective treatments to turn your green pool clear and inviting again.',
    cta: 'Pay Now',
    link: '/Schedule',
    bg: 'bg-blue-50',
    img: './src/assets/781370.webp',
  },
    {
    title: 'Seasonal Startup & Closing',
    description: 'Professional pool opening and closing services to protect your investment year-round.',
    cta: 'Pay Now',
    link: '/Schedule',
    bg: 'bg-blue-50',
    img: './src/assets/781370.webp',
  },
])
</script>
