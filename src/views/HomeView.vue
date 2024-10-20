<template>
  <div class="relative h-3/4"> 
    <div class="absolute left-0 w-full px-20 py-14 flex items-center h-full bg-agency-blue/40 z-10" >
    <div class="w-full">
      <h1 class="text-agency-white/90 drop-shadow-xl mb-6">Explora el mundo con los mejores precios y servicio garantizado</h1>
      <BtnGeneral btnTxt="Cotiza Ahora!"/>
    </div>
    </div>
    <div class="absolute left-0 w-full h-full">
      <img class="w-full h-full" src="../assets/bg-homepage.png" alt="">
    </div>
  </div>
  <div class="grid-cols-12 grid w-full h-fit my-11 px-padding-grid">
    <div class="w-full col-span-12">
      <h2 class="text-agency-blue">Los lugares favoritos de nuestros viajeros</h2>
      <MostPopular
        :img_src="chiapas"
      />
    </div>
  </div>
</template>
<script setup>
import BtnGeneral from '@/components/BtnGeneral.vue';
import MostPopular from '@/components/MostPopular.vue';
import chiapas from '@/assets/Chiapas.png'
import { onMounted, } from 'vue';

onMounted(() => {
  document.title = "Mx Travel";
})
</script>