<template>
  <div class="absolute left-0 w-full px-20 py-14 flex items-center h-3/4 bg-agency-blue/40 z-10" >
    <div class="w-full ">
      <h1 class="text-agency-white/90 drop-shadow-xl mb-6">Explora el mundo con los mejores precios y servicio garantizado</h1>
      <BtnGeneral btnTxt="Cotiza Ahora!"/>
    </div>
  </div>
  <div class="absolute left-0 w-full h-3/4">
    <img class="w-full h-full" src="../assets/bg-homepage.png" alt="">
  </div>
</template>
<script setup>
import BtnGeneral from '@/components/BtnGeneral.vue';
import { onMounted, } from 'vue';

onMounted(() => {
  document.title = "Mx Travel";
})
</script>