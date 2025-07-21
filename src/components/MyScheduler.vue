<template>
    <div class="relative isolate">
      <!-- Hero Section -->
      <section class="text-center py-16 px-6">
        <h1 class="text-4xl text-sky-800 font-bold">Book your Service</h1>
        <p class="mt-4 text-lg text-sky-800 max-w-3xl mx-auto">
          Book one of our services today and start experiencing the benefits of a professionally cleaned pool.
        </p>
      </section>
  
      <!-- Booking Options -->
      <section class="px-6 py-6 max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(option, index) in bookingOptions" :key="index" class="bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">

          <h2 class="text-xl font-semibold">{{ option.title }}</h2>
          <p class="text-gray-400 mt-2">{{ option.description }}</p>
            <a :href="option.link" class="ptbkbtn mt-4 inline-block text-white py-2 px-6 rounded-lg text-lg font-semibold transition"  target="_blank" style="float:none;" >
              <img src="https://www.picktime.com/img/widgetButtons/BookingPage/picktime-book-online-blue.png" alt="Book an appointment with Blue Harbor" />
            </a>
        </div>
      </section>
 
     
  
      <!-- FAQs or Testimonials -->
      <section class="px-6 py-12 max-w-4xl mx-auto">
        <h2 class="text-3xl font-semibold text-center mb-8">Common Questions</h2>
        <div class="space-y-6">
          <div v-for="(faq, index) in faqItems" :key="index" class="bg-white p-4 rounded-lg shadow transition-transform duration-300 hover:scale-[1.02] hover:shadow-md">
          <h3 class="text-lg font-semibold">{{ faq.question }}</h3>
          <p class="text-gray-400 mt-1">{{ faq.answer }}</p>
          </div>
        </div>
      </section>
       
    </div>
  </template>
  
  <script setup>
  !function(e,t,n,s,i,c){i=t.createElement(n),c=t.getElementsByTagName(n)[0],i.async=1,
	i.src=s,c.parentNode.insertBefore(i,c)}(window,document,"script","https://www.picktime.com/assets/booking.js");
  
  const bookingOptions = [
  {
    title: 'Seasonal Startup & Closing',
    description: 'Detox and rejuvenate with a powerful ozone sauna session.',
    link: 'https://www.picktime.com/e5ad4a4f-7f89-42bc-bdc6-8514a339fa7d',
  },
  {
    title: 'Weekly Service',
    description: 'Recharge your body with Pulsed Electromagnetic Field therapy.',
    link: 'https://www.picktime.com/e5ad4a4f-7f89-42bc-bdc6-8514a339fa7d',
  },
  {
    title: 'Filter Maintenance',
    description: 'A targeted approach for sinus and respiratory support.',
    link: 'https://www.picktime.com/e5ad4a4f-7f89-42bc-bdc6-8514a339fa7d',
  },
  {
    title: 'Salt & Chlorine Balancing',
    description: 'Detox and rejuvenate with a powerful ozone sauna session.',
    link: 'https://www.picktime.com/e5ad4a4f-7f89-42bc-bdc6-8514a339fa7d',
  },
  {
    title: 'Green Pool Recovery',
    description: 'Recharge your body with Pulsed Electromagnetic Field therapy.',
    link: 'https://www.picktime.com/e5ad4a4f-7f89-42bc-bdc6-8514a339fa7d',
  },
  {
    title: 'Swab the Deck',
    description: 'A targeted approach for sinus and respiratory support.',
    link: 'https://www.picktime.com/e5ad4a4f-7f89-42bc-bdc6-8514a339fa7d',
  },
]

const faqItems = [
  {
    question: 'Are Consultations Free?',
    answer: 'We charge a modest fee for consultations but we offer to apply the total amount to your first service.',
  },
  {
    question: 'How often do I need to clean my Filters?',
    answer: 'We recommend filters be sprayed clean every 4-6 weeks with complete Chemical cleans 1-2 times per year.',
  },
  {
    question: 'Types of Pools We Service',
    answer: 'We service saltwater and chlorine pools, in-ground and above-ground, vinyl, fiberglass, and gunite. Not sure what type you have? Don’t worry—we’ll help you figure it out.',
  },
  {
    question: 'What’s Included',
    answer: 'All packages include water testing, debris removal, brushing, vacuuming, filter check, and a service report with photos. Optional add-ons are available for advanced chemical balancing and automation monitoring.',
  },
]

  </script>
  
  <style scoped>
  </style>
  