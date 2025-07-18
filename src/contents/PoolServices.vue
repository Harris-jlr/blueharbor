<template>
  <div>
    <div class="bg-sky-100 p-8">
      <!-- Title -->
      <h2 class="text-center mb-6 pt-12 text-sky-700 font-bold text-5xl leading-10 tracking-wider">
        Our Services
      </h2>

      <!-- Description & CTA -->
      <p class="text-center text-sky-700 max-w-3xl mx-auto mb-6 pb-6">
        Discover our range of services designed to optimize your pool's health. 
        Each service is carefully curated to enhance the quality and clarity of your pool. Explore our offerings 
        and schedule your appointment today. <a href="/history" class="text-sm/6 font-semibold text-sky-900">Learn more <span aria-hidden="true">→</span></a>
      </p>

      <!-- Services Cards -->
    <section class="max-w-6xl mx-auto mt-20 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10">
      <div
        v-for="(card, index) in cards"
        :key="index"
        :class="`flex flex-col h-full rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 ${card.bg}`"
      >
        <img
          :src="card.img"
          alt=""
          class="w-full h-60 object-cover"
        />
        <div class="flex flex-col p-6 flex-1">
          <h2 class="text-xl font-bold text-blue-700 mb-3">{{ card.title }}</h2>
          <p class="text-gray-700 mb-6">{{ card.description }}</p>

          <div class="mt-auto">
            <router-link
              :to="card.link"
              class="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded-full transition"
            >
              {{ card.cta }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

     
      <div class="mt-8 text-center py-12 mb-12">
         <a
      :href="mailtoLink"
      class="inline-block bg-blue-800 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded-full transition"
    >
      Contact Us to Schedule an Appointment
    </a>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import cleaning from '../assets/services/IMG_1712.jpg'
import filter from '../assets/services/filter.png'
import balancing from '../assets/services/th.jpg'
import sample from '../assets/services/oasis.webp'
import swabbing from '../assets/services/IMG_1814.jpg'
import startup from '../assets/services/testing.jpg'

const mailtoLink = 'mailto:blueharborpoolservices@gmail.com?subject=Blue Harbor Consultation Request&body=Hi, I’d like to schedule an appointment for pool services. Please get in touch with available times.';

const cards = ref([ 
  {
    title: 'Weekly & Bi-Weekly Cleaning',
    description: 'Regular cleaning schedules to keep your pool consistently sparkling and swim-ready.',
    cta: 'Sign me Up',
    link: '/Schedule',
    bg: 'bg-blue-50',
    img: cleaning,
  },
{
    title: 'Filter Maintenance',
    description: 'Routine checks and replacements to ensure optimal water circulation and clarity.',
    cta: 'Yes, Please',
    link:  '/Schedule',
    bg: 'bg-blue-50',
    img: filter,
},
{
    title: 'Salt & Chlorine Balancing',
    description: 'Precise chemical balancing for safe, comfortable swimming conditions.',
    cta: 'I need this!',
    link: '/Schedule',
    bg: 'bg-blue-50',
    img: balancing,
},
{
    title: 'Green Pool Recovery',
    description: 'Fast, effective treatments to turn your green pool clear and inviting again.',
    cta: 'Help my Pool!',
    link: '/Schedule',
    bg: 'bg-blue-50',
    img: sample,
  },
  {
    title: 'Swab the Deck',
    description:
      'This is a deep cleaning of your pool deck with our carefully adjusted pressure washer to give you the best possible clean.',
    cta: 'Schedule Now',
    link: '/Schedule',
    bg: 'bg-blue-50',
    img: swabbing,
  },
    {
    title: 'Seasonal Startup & Closing',
    description: 'Professional pool opening and closing services to protect your investment year-round.',
    cta: 'Lets Go!',
    link: '/Schedule',
    bg: 'bg-blue-50',
    img: startup,
  },
])
</script>
