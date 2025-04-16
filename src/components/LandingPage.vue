<template>
  <div class="bg-sky-100 py-30">
    <div class="relative isolate">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-800 to-blue-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="sm:py-32 md:py-4 lg:pb-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-5xl text-center">
            
            <h1 class="text-balance text-5xl font-semibold tracking-tight text-blue-500 sm:text-7xl">Welcome to Blueharbor</h1>
            <p class="mt-8 text-pretty text-lg font-medium text-gray-900 sm:text-xl/8">
              Blueharbor is a locally-owned, community-first pool care company that believes in honesty, clear pricing, and doing things the right way. Our technicians are trained, courteous, and passionate about pool safety and cleanliness. We provide expert pool cleaning and maintenance for residential and commercial clients. Whether it’s saltwater, chlorine, above-ground, or in-ground—we’ve got it covered.</p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="/schedule" class="rounded-full bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Get started</a>
              <a href="/company" class="text-sm/6 font-semibold text-sky-600">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>

    <section class="w-full">
      <!-- Schedule Consultation & Pay Bill Online as Two Columns -->
    <div class="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Schedule Consultation -->
      <div class="bg-white rounded shadow p-8" id="schedule">
        <h2 class="text-2xl font-semibold text-blue-700 mb-4">Schedule a Consultation</h2>
        <p class="text-gray-700 mb-6">Let’s talk about your pool needs. We’ll walk you through your options and get you on a maintenance plan that works for you.</p>
        <router-link to="/contact" class="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-full transition">
          Book Now
        </router-link>
      </div>

      <!-- Pay Bill Online -->
      <div class="bg-blue-50 rounded shadow p-8" id="pay">
        <h2 class="text-2xl font-semibold text-blue-700 mb-4">Pay Your Bill Online</h2>
        <p class="text-gray-700 mb-6">Safe, secure, and fast. Use our online portal to handle your payments anytime.</p>
        <router-link to="/pay" class="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full transition">
          Pay Now
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
</script>