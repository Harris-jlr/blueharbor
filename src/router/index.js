import { createRouter , createWebHistory } from 'vue-router'
import home from '/src/views/home.vue'
import about from '/src/views/about.vue'
import services from '/src/views/services.vue'
import schedule from '/src/views/schedule.vue'
import news from '/src/views/news.vue'
const routes = [
    {
        path: '/',
        name: '/',
        component: home,
     },
     {
        path: '/about',
        name: 'about',
        component: about,
     },
   {
      path: '/services',
      name: 'services',
      component: services,
   },
   {
      path: '/schedule',
      name: 'schedule',
      component: schedule,
   },
   {
    path: '/news',
    name: 'news',
    component: news,
 },
]

const router = createRouter({
    history: createWebHistory (),
    routes,
})

export default router