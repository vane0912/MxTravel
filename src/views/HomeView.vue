<template>
  <div class="relative h-3/4"> 
    <div class="absolute left-0 w-full px-20 py-14 flex items-center h-full bg-agency-blue/40 z-10" >
    <div class="w-full">
      <h1 class="text-agency-white/90 drop-shadow-custom mb-6">Explora el mundo con los mejores precios y servicio garantizado</h1>
      <BtnGeneral btnTxt="Cotiza Ahora!"/>
    </div>
    </div>
    <div class="absolute left-0 w-full h-full">
      <img class="w-full h-full" src="../assets/bg-homepage.png" alt="">
    </div>
  </div>
  <div class="grid-cols-12 grid w-full h-fit my-11 gap-x-8 gap-y-4 px-padding-grid">
    <div class="w-full col-span-12 mb-10">
      <h2 class="text-agency-blue">Los lugares favoritos de nuestros viajeros</h2>
    </div>
    <MostPopular
      class="col-span-6"
        state_title="Chiapas"
        :img_src="chiapas"
    />
    <MostPopular
      class="col-span-6"
      state_title="Chiapas"
      :img_src="chiapas"
    />
    <MostPopular
      class="col-span-6"
      state_title="Chiapas"
      :img_src="chiapas"
    />
    <MostPopular
      class="col-span-6"
      state_title="Chiapas"
      :img_src="chiapas"
    />
    <div class="w-full col-span-12 my-10">
      <h2 class="text-agency-blue">Nuestros servicios</h2>
    </div>
    <OurServices
    :img_src="autobus"
    service_txt="Paquetes Vacacionales"
    class="col-span-3"
    />
    <OurServices
    class="col-span-3"
    :img_src="autobus"
    service_txt="Paquetes Vacacionales"
    />
    <OurServices
    class="col-span-3"
    :img_src="autobus"
    service_txt="Paquetes Vacacionales"
    />
    <OurServices
    class="col-span-3"
    :img_src="boletos_de_avion"
    service_txt="Boletos de avión y autobus"
    />
    <OurServices
    class="col-start-2"
    :img_src="avion"
    service_txt="Charters aéreos y terrestres"
    />
    <OurServices
    class="col-start-6 col-end-8 justify-self-center"
    :img_src="autobus"
    service_txt="Paquetes Vacacionales"
    />
    <OurServices
    class="col-start-9 col-end-11"
    :img_src="autobus"
    service_txt="Paquetes Vacacionales"
    />
    <div class="w-full col-span-12 my-10">
      <h2 class="text-agency-blue">¿Por qué elegirnos?</h2>
    </div>
    
  </div>
</template>
<script setup>
import BtnGeneral from '@/components/BtnGeneral.vue';
import MostPopular from '@/components/MostPopular.vue';
import chiapas from '@/assets/Chiapas.png'
import autobus from '@/assets/our_services/playa.png'
import avion from '@/assets/our_services/avion.png'
import boletos_de_avion from '@/assets/our_services/boletos-de-avion.png'
import { onMounted, } from 'vue';
import OurServices from '@/components/OurServices.vue';

onMounted(() => {
  document.title = "Mx Travel";
})
</script>