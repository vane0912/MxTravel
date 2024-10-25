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
    <h2 class="text-agency-blue w-full col-span-12 mb-10">Los lugares favoritos de nuestros viajeros</h2>
    <MostPopular
      class="col-span-4"
        state_title="Chiapas"
        :img_src="chiapas"
    />
    <MostPopular
      class="col-span-4"
      state_title="Chiapas"
      :img_src="chiapas"
    />
    <MostPopular
      class="col-span-4"
      state_title="Chiapas"
      :img_src="chiapas"
    />
    <h2 class="text-agency-blue w-full col-span-12 my-10">Nuestros servicios</h2>
    <OurServices
    class="col-span-3"
    :img_src="playa"
    service_txt="Paquetes Vacacionales"
    />
    <OurServices
    class="col-span-3"
    :img_src="pasaporte"
    service_txt="Tramite de visas y pasaporte"
    />
    <OurServices
    class="col-span-3"
    :img_src="boda"
    service_txt="Bodas en la playa"
    />
    <OurServices
    class="col-span-3"
    :img_src="boletos_de_avion"
    service_txt="Boletos de avión y autobus"
    />
    <OurServices
    class="col-span-3"
    :img_src="avion"
    service_txt="Charters aéreos y terrestres"
    />
    <OurServices
    class="col-span-3"
    :img_src="hotel"
    service_txt="Reservación de hoteles"
    />
    <OurServices
    class="col-span-3"
    :img_src="autobus"
    service_txt="Renta de autobuses y vans"
    />
    <OurServices
    class="col-span-3"
    :img_src="visa"
    service_txt="Gestion de Visados"
    />
    <h2 class="text-agency-blue col-span-12 w-full my-10">¿Por qué elegirnos?</h2>
    <div class="col-span-12 flex justify-between">
      <div class="w-5/12 shrink-0 mr-20">
        <img 
        class="rounded-4xl shrink-0 object-fill h-full"
        src="../assets/homepage_why_choose_us.png">
      </div>
      <div class="h-7/12">
        <ChooseUs 
          :icon="experience"
          class="mb-8"
          title_txt="Mas de una década de experiencia"
          paragraph="Nuestra sólida trayectoria en el sector turístico nos permite brindarte productos y servicios de la más alta calidad, asegurando que cada detalle de tu viaje sea perfecto."
        />
        <ChooseUs 
          class="mb-8"
          :icon="costumer"
          title_txt="Atención personalizada"
          paragraph="Cada cliente es único, y nos enfocamos en ofrecerte un servicio ajustado a tus necesidades, para que disfrutes de una experiencia vacacional hecha a tu medida."
        />
        <ChooseUs
          class="mb-8"
          :icon="one_place"
          title_txt="Todo en un solo lugar"
          paragraph="Desde trámites de visas hasta la renta de autos o la reserva de hoteles, nos encargamos de todo. Nos ocupamos de cada paso del proceso para que tú solo te concentres en disfrutar tu viaje."
        />
        <ChooseUs
          :icon="loyalty"
          title_txt="Confianza y lealtad"
          paragraph="La fidelidad de nuestros clientes es nuestro mayor respaldo. Trabajamos continuamente para ganar y mantener tu confianza, asegurando que siempre recibas un servicio excepcional."
        />
      </div>
    </div>
    <div class="col-span-12 w-full flex justify-center my-12">
      <BtnGeneral btnTxt="Conocenos"></BtnGeneral>
    </div>
  </div>
</template>
<script setup>
import BtnGeneral from '@/components/BtnGeneral.vue';
import MostPopular from '@/components/MostPopular.vue';
import chiapas from '@/assets/Chiapas.png'

import autobus from '@/assets/our_services/autobus.png'
import avion from '@/assets/our_services/avion.png'
import boda from '@/assets/our_services/boda.png'
import hotel from '@/assets/our_services/hotel.png'
import pasaporte from '@/assets/our_services/pasaporte.png'
import playa from '@/assets/our_services/playa.png'
import boletos_de_avion from '@/assets/our_services/boletos-de-avion.png'
import visa from '@/assets/our_services/visa.png'

import experience from '@/assets/why_choose_us/diez_años.png'
import loyalty from '@/assets/why_choose_us/lealtad.png'
import costumer from '@/assets/why_choose_us/servicio-al-cliente.png'
import one_place from '@/assets/why_choose_us/servicios-de-apoyo.png'
import { onMounted, } from 'vue';
import OurServices from '@/components/OurServices.vue';
import ChooseUs from '@/components/ChooseUs.vue';

onMounted(() => {
  document.title = "Mx Travel";
})
</script>