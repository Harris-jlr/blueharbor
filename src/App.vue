<script setup>
import myheader from '/src/global/myheader.vue';
import myfooter from '/src/global/myfooter.vue';

</script>

<template>
   <div class="w-full mx-px center">
    <myheader />
    <router-view />
    <myfooter />
  </div>
</template>
