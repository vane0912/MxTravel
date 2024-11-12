<template>
  <div class="relative h-150"> 
    <div class="absolute left-0 w-full px-8 sm:px-20 py-14 flex items-center h-full bg-agency-blue/60 z-10 xl:justify-center" >
      <div class="w-full 2xl:w-3/4">
        <h1 class="text-agency-white drop-shadow-custom mb-6 md:text-5xl md:leading-relaxed lg:text-6xl">Explora el mundo con los mejores precios y servicio garantizado</h1>
        <BtnGeneral 
        @go-to="router.push('/conocenos#bottom')"
        btnTxt="Cotiza Ahora"/>
      </div>
    </div>
    <div class="absolute left-0 w-full h-full">
      <img class="object-cover h-full w-full" src="../assets/bg-homepage.png" alt="">
    </div>
  </div>
  <div class="grid-cols-12 max-w-screen-2xl self-center grid w-full h-fit my-11 gap-y-12 px-10  
    md:gap-x-8 md:px-padding-grid">
    <h2 class="text-agency-blue w-full col-span-full my-3 md:text-5xl">Los lugares favoritos de nuestros viajeros</h2>
    <div class="col-span-full flex gap-8 overflow-x-auto overflow-y-hidden">
      <MostPopular
        state_title="El Chepe"
        :img_src="chepe"
      />
      <MostPopular
        state_title="Mazatlán"
        :img_src="mazatlan"
      />
      <MostPopular
        state_title="Cancún"
        :img_src="cancun"
      />
    </div>
    <h2 class="text-agency-blue w-full col-span-12 my-3 md:text-5xl">Nuestros servicios</h2>
    <div class="flex lg:hidden items-center">
      <img
      @click="move_carousel('l')"
      class="min-w-7 h-7 -rotate-180 cursor-pointer" :src=carousel_arr alt="">
    </div>
    <div 
      class="col-start-2 col-end-12 flex overflow-x-hidden max-w-60 justify-self-center
      sm:max-w-98 
      md:max-w-100 
      lg:max-w-full lg:w-full lg:col-span-full">
      <div 
      ref="carousel_services"
      class="flex items-center gap-x-4
      transition-all
      ease-in
      duration-300
      md:w-full
      lg:justify-center lg:flex-wrap
      lg:flex lg:translate-x-0 
      xl:justify-between">
        <div class="flex flex-col gap-y-10">
          <OurServices
          :img_src="playa"
          service_txt="Paquetes Vacacionales"
          />
          <OurServices
          :img_src="pasaporte"
          service_txt="Tramite de visas y pasaporte"
          />
        </div>
        <div class="flex flex-col gap-y-10">
          <OurServices
          :img_src="boda"
          service_txt="Bodas en la playa"
          />
          <OurServices
          :img_src="boletos_de_avion"
          service_txt="Boletos de avión y autobus"
          />
        </div>
        <div class="flex flex-col gap-y-10">
          <OurServices
          :img_src="avion"
          service_txt="Charters aéreos y terrestres"
          />
          <OurServices
          :img_src="hotel"
          service_txt="Reservación de hoteles"
          />
        </div>
        <div class="flex flex-col mt-0 lg:flex-row lg:mt-10 xl:m-0 gap-x-10 xl:flex-col gap-y-10">
          <OurServices
          :img_src="autobus"
          service_txt="Renta de autobuses y vans"
          />
          <OurServices
          :img_src="visa"
          service_txt="Gestion de Visados"
          />
        </div>
      </div>
    </div>
    <div class="flex col-start-12 lg:hidden items-center">
      <img 
      @click="move_carousel('r')"
      class="min-w-7 h-7 cursor-pointer" :src=carousel_arr alt="">
    </div>
    <h2 class="text-agency-blue col-span-12 w-full my-3 md:text-5xl">¿Por qué elegirnos?</h2>
    <div class="col-span-12 flex flex-col xl:flex-row justify-between">
      <div class="w-full hidden xl:flex xl:w-5/12">
        <img 
        class="rounded-4xl h-full w-full object-cover object-center"
        src="../assets/homepage_why_choose_us.png">
      </div>
      <div class="w-full flex gap-x-4 md:flex-col xl:w-7/12 md:gap-y-0">
        <div class="w-1/2 md:w-full gap-y-7 flex items-center flex-col justify-between md:gap-y-0">
          <ChooseUs
          class="md:mb-8"
          :icon="one_place"
          title_txt="Todo en un solo lugar"
          paragraph="Desde trámites de visas hasta la renta de autos o la reserva de hoteles, nos encargamos de todo. Nos ocupamos de cada paso del proceso para que tú solo te concentres en disfrutar tu viaje."
          />
          <ChooseUs 
            class="md:mb-8"
            :icon="costumer"
            title_txt="Atención personalizada"
            paragraph="Cada cliente es único, y nos enfocamos en ofrecerte un servicio ajustado a tus necesidades, para que disfrutes de una experiencia vacacional hecha a tu medida."
          />
        </div>
        <div class="w-1/2 md:w-full gap-y-7 flex items-center flex-col justify-between md:gap-y-0">
          <ChooseUs
            :icon="loyalty"
            class="md:mb-8"
            title_txt="Confianza y lealtad"
            paragraph="La fidelidad de nuestros clientes es nuestro mayor respaldo. Trabajamos continuamente para ganar y mantener tu confianza, asegurando que siempre recibas un servicio excepcional."
          />
          <ChooseUs 
          :icon="experience"
          title_txt="Mas de una década de experiencia"
          paragraph="Nuestra sólida trayectoria en el sector turístico nos permite brindarte productos y servicios de la más alta calidad, asegurando que cada detalle de tu viaje sea perfecto."
          />
        </div>
      </div>
    </div>
    <div class="col-span-12 w-full flex justify-center my-2">
      <BtnGeneral 
      @go-to="router.push('/conocenos')"
      btnTxt="Conocenos"></BtnGeneral>
    </div>
  </div>
</template>
<script setup>
import BtnGeneral from '@/components/BtnGeneral.vue';
import MostPopular from '@/components/MostPopular.vue';
import chepe from '@/assets/el_chepe.png'
import mazatlan from '@/assets/mazatlan.png'
import cancun from '@/assets/cancun.png'
import carousel_arr from '@/assets/carousel_arr.png'

import autobus from '@/assets/our_services/agency_blue/autobus.png'
import avion from '@/assets/our_services/agency_blue/avion.png'
import boda from '@/assets/our_services/agency_blue/boda.png'
import hotel from '@/assets/our_services/agency_blue/hotel.png'
import pasaporte from '@/assets/our_services/agency_blue/pasaporte.png'
import playa from '@/assets/our_services/agency_blue/playa.png'
import boletos_de_avion from '@/assets/our_services/agency_blue/boletos-de-avion.png'
import visa from '@/assets/our_services/agency_blue/visa.png'

import experience from '@/assets/why_choose_us/agency_blue/diez_años.png'
import loyalty from '@/assets/why_choose_us/agency_blue/lealtad.png'
import costumer from '@/assets/why_choose_us/agency_blue/servicio-al-cliente.png'
import one_place from '@/assets/why_choose_us/agency_blue/servicios-de-apoyo.png'
import { onMounted, ref } from 'vue';
import OurServices from '@/components/OurServices.vue';
import ChooseUs from '@/components/ChooseUs.vue';
import router from '@/router';

onMounted(() => {
  document.title = "Mx Travel";
})
const carousel_services = ref(); 
let pix_carousel = 0

function move_carousel(direction) {
  if(innerWidth < 640){
    if (direction === 'r' && pix_carousel != -720){
    pix_carousel -= 240
    carousel_services.value.style.transform = `translateX(${pix_carousel}px)`; 
    }else if(direction === 'l' && pix_carousel != 0){
      pix_carousel += 240
      carousel_services.value.style.transform = `translateX(${pix_carousel}px)`; 
    }
  }else if(innerWidth < 768){
    if (direction === 'r' && pix_carousel != -480){
    pix_carousel -= 480
    carousel_services.value.style.transform = `translateX(${pix_carousel}px)`; 
    }else if(direction === 'l' && pix_carousel != 0){
      pix_carousel += 480
      carousel_services.value.style.transform = `translateX(${pix_carousel}px)`; 
    }
  }else{
    if (direction === 'r' && pix_carousel != -545){
    pix_carousel -= 545
    carousel_services.value.style.transform = `translateX(${pix_carousel}px)`; 
    }else if(direction === 'l' && pix_carousel != 0){
      pix_carousel += 545
      carousel_services.value.style.transform = `translateX(${pix_carousel}px)`; 
    }
  }
}
</script>