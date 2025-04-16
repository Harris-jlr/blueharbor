<script setup>
import myheader from '/src/global/myheader.vue';
import myfooter from '/src/global/myfooter.vue';

</script>

<template>
    <div class="flex flex-col min-h-screen w-full mx-px center">
    <myheader />
    <main class="flex-grow bg-sky-100">
      
     <router-view /> 
    </main>
    
    <myfooter />
  </div>
</template>
