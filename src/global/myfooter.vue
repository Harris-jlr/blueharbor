<template>
  <footer class="bg-sky-800 text-sky-100 py-12 px-6">
    <div class="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-9 gap-8 md:gap-16">
      
      <!-- Column 1-2: Copyright -->
      <div class="col-span-3 flex flex-col">
        <p>&copy; 2025 Blueline Design, LLC. All rights reserved.</p>
        <div class="mt-4 flex space-x-6">
          <a href="" class="hover:text-white"><i class="fab fa-facebook fa-lg"></i></a>
          <a href="" class="hover:text-white"><i class="fab fa-twitter fa-lg"></i></a>
          <a href="https://www.instagram.com/blueharborpoolservices/" class="hover:text-white"><i class="fab fa-instagram fa-lg"></i></a>
          <a href="" class="hover:text-white"><i class="fab fa-linkedin fa-lg"></i></a>
          <a href="https://www.tiktok.com/@blueharbor_tx" class="hover:text-white"><i class="fab fa-tiktok fa-lg"></i></a>
        </div>
      </div>

      

      <!-- Column 5: Solutions -->
      <div class="w-32">
        <h3 class="text-sm font-semibold text-gray-300 uppercase">Solutions</h3>
        <ul class="mt-2">
          <li v-for="item in navigation.solutions" :key="item.name">
            <a :href="item.href" class="text-base hover:text-white">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Column 6: Legal -->
      <div class="w-32">
        <h3 class="text-sm font-semibold text-gray-300 uppercase">Legal</h3>
        <ul class="mt-2">
          <li v-for="item in navigation.legal" :key="item.name">
            <a :href="item.href" class="text-base hover:text-white">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>

     <!-- Column 4: Allen G. Rikke Contact Information -->
      <div class="text-left col-span-2 flex flex-col min-w-[200px]">
       
        <p class="text-sm">Hours: 9-7 Weekdays</p>
        <p class="text-sm">By Appointment Only</p>
      </div>

      <!-- Column 7-8: Newsletter Subscription -->
      <div class="col-span-2 flex flex-col max-w-[220px]">
  <h3 class="text-sm font-semibold text-gray-300 uppercase">Subscribe to our Newsletter</h3>
  <form class="flex flex-col " @submit.prevent="subscribe">
    <input
      v-model="email" 
      type="email"
      placeholder="Enter your email"
      class="w-full text-gray-900 rounded-md bg-white p-2"
      required
    />
    <button type="submit" class="bg-sky-500 hover:bg-sky-600 text-white px-2 py-2 mt-2 rounded-full">
      Subscribe
    </button>
  </form>
  <p v-if="message" class="mt-2 text-green-400 text-sm">{{ message }}</p>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      email: '', 
      message: '', 
      navigation: {
        solutions: [
          { name: "Analytics", href: "https://analytics.google.com/" },
          { name: "Insights", href: "#" },
        ],
        legal: [
          { name: "Privacy", href: "/company" },
          { name: "Terms", href: "/services" },
          { name: "Contact Us", href: "/contact" },
        ],
      },
    };
  },
  methods: {
    subscribe() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(this.email)) {
        this.message = "Please enter a valid email address.";
        return;
      }

      let subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
      subscribers.push(this.email);
      localStorage.setItem('subscribers', JSON.stringify(subscribers));

      this.message = "You've successfully subscribed!";
      this.email = ''; 
    }
  }
};
</script>


<style>
/* FontAwesome for social icons */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");
</style>
