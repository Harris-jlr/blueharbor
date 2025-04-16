<template>
    <div class="relative"><section>
        <div class="px-6 py-12 max-w-4xl mx-auto text-gray-800">
          <h3 class="text-4xl font-bold mb-4">{{ page?.title }}</h3>
          <img v-if="page?.image" :src="page.image" :alt="page.title" class="w-full h-64 object-cover rounded mb-6" />
          <p class="text-lg whitespace-pre-line">{{ page?.body }}</p>
        </div>
    </section>    
    <section class="right-0 left-0 mt-16 px-4 py-12 bg-gray-100">
      <h2 class="text-2xl font-semibold text-center mb-4">Other Ways to Get Involved</h2>
      <p class="text-center max-w-3xl mx-auto text-gray-700 mb-8">
        Explore additional ways to support the Bluehaven mission. Whether through partnership, sponsorship, or unique trades, there's a place for you in this journey.
      </p>
    
      <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        <div
          v-for="option in filteredOptions"
          :key="option.slug"
          class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105"
        >
          <component :is="option.icon" class="h-8 w-8 text-blue-500 mx-auto mb-4" />
          <h3 class="text-lg font-semibold text-center mb-2">{{ option.title }}</h3>
          <p class="text-center text-sm text-gray-600 mb-4">{{ option.description }}</p>
          <div class="text-center">
            <div class="mt-4">
            <a :href="`/investors/${option.slug}`" class="text-blue-600 font-medium hover:underline inline-flex items-center gap-1">
              Learn More
              <span aria-hidden="true">→</span>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
    </div>
      </template>
      
      <script setup>
    import { useRoute } from 'vue-router'
    import { AcademicCapIcon, ChartBarIcon, BriefcaseIcon, HeartIcon, GiftIcon, UserGroupIcon } from '@heroicons/vue/outline';
    
    const route = useRoute()
    
    const slug = route.params.slug
    
    const allOptions = [
      {
        slug: 'angel-investment',
        title: 'Investment',
        description: 'Provide capital and help shape Our future.',
        icon: AcademicCapIcon,
      },
      {
        slug: 'strategic-partnership',
        title: 'Partnership',
        description: 'Partner with us for shared success and co-creation.',
        icon: ChartBarIcon,
      },
      {
        slug: 'corporate-sponsorship',
        title: 'Sponsorship',
        description: 'Sponsor initiatives and amplify your brand.',
        icon: BriefcaseIcon,
      },
      {
        slug: 'philanthropic-donation',
        title: 'Donations',
        description: 'Support change with your meaningfull donations.',
        icon: HeartIcon,
      },
      {
        slug: 'gifting-recurring-support',
        title: 'Support',
        description: 'Provide steady support through subscriptions.',
        icon: GiftIcon,
      },
      {
        slug: 'perks-for-works',
        title: 'Perks for Works',
        description: 'Trade services or perks for developer work.',
        icon: UserGroupIcon,
      },
    ]
    
    const filteredOptions = allOptions.filter(option => option.slug !== slug)
    </script>
    