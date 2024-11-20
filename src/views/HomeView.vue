<template>
  <div class="relative h-150"> 
    <div class="absolute left-0 w-full px-8 py-14 flex items-center justify-center h-full bg-agency-blue/60 z-10 
    md:px-20" >
      <div class="w-full 2xl:w-3/4">
        <h1 class="text-agency-white drop-shadow-custom mb-6 
        md:text-5xl md:leading-relaxed 
        lg:text-6xl">Explora el mundo con los mejores precios y servicio garantizado</h1>
        <BtnGeneral 
        @go-to="router.push('/conocenos#cotizar')"
        btnTxt="Cotiza Ahora"/>
      </div>
    </div>
    <div class="absolute left-0 w-full h-full">
      <img class="object-cover h-full w-full" src="../assets/bg-homepage.png" alt="">
    </div>
  </div>
  <div class="grid-cols-12 max-w-screen-xl self-center grid my-11 gap-y-12 px-10  
    md:gap-x-8">
    <h2 class="w-full col-span-full md:text-5xl">Los lugares favoritos de nuestros viajeros</h2>
    <div class="col-span-full flex gap-x-8 overflow-x-auto overflow-y-hidden">
      <MostPopular
        state_title="El Chepe"
        :img_src="require('@/assets/el_chepe.png')"
      />
      <MostPopular
        state_title="Mazatlán"
        :img_src="require('@/assets/mazatlan.png')"
      />
      <MostPopular
        state_title="Cancún"
        :img_src="require('@/assets/cancun.png')"
      />
    </div>
    <h2 class="w-full col-span-12 md:text-5xl">Nuestros servicios</h2>
    <div class="flex overflow-x-hidden justify-self-center w-full col-span-full">
      <div class="flex items-center gap-x-4 gap-y-5 transition-all ease-in duration-300 animate-carousel
      md:w-full md:animate-none
      md:justify-center md:flex-wrap
      md:flex lg:translate-x-0 
      xl:justify-between">
          <OurServices
          :img_src="require('@/assets/our_services/agency_blue/playa.png')"
          service_txt="Paquetes Vacacionales"
          />
          <OurServices
          :img_src="require('@/assets/our_services/agency_blue/pasaporte.png')"
          service_txt="Tramite de visas y pasaporte"
          />
          <OurServices
          :img_src="require('@/assets/our_services/agency_blue/boda.png')"
          service_txt="Bodas en la playa"
          />
          <OurServices
          :img_src="require('@/assets/our_services/agency_blue/boletos-de-avion.png')"
          service_txt="Boletos de avión y autobus"
          />
          <OurServices
          :img_src="require('@/assets/our_services/agency_blue/avion.png')"
          service_txt="Charters aéreos y terrestres"
          />
          <OurServices
          :img_src="require('@/assets/our_services/agency_blue/hotel.png')"
          service_txt="Reservación de hoteles"
          />
          <OurServices
          :img_src="require('@/assets/our_services/agency_blue/autobus.png')"
          service_txt="Renta de autobuses y vans"
          />
          <OurServices
          :img_src="require('@/assets/our_services/agency_blue/visa.png')"
          service_txt="Gestion de Visados"
          />
      </div>
      <div aria-hidden class="flex gap-x-4 ml-4 animate-carousel md:hidden">
          <OurServices
          :img_src="require('@/assets/our_services/agency_blue/playa.png')"
          service_txt="Paquetes Vacacionales"
          />
          <OurServices
          :img_src="require('@/assets/our_services/agency_blue/pasaporte.png')"
          service_txt="Tramite de visas y pasaporte"
          />
          <OurServices
          :img_src="require('@/assets/our_services/agency_blue/boda.png')"
          service_txt="Bodas en la playa"
          />
          <OurServices
          :img_src="require('@/assets/our_services/agency_blue/boletos-de-avion.png')"
          service_txt="Boletos de avión y autobus"
          />
          <OurServices
          :img_src="require('@/assets/our_services/agency_blue/avion.png')"
          service_txt="Charters aéreos y terrestres"
          />
          <OurServices
          :img_src="require('@/assets/our_services/agency_blue/hotel.png')"
          service_txt="Reservación de hoteles"
          />
          <OurServices
          :img_src="require('@/assets/our_services/agency_blue/autobus.png')"
          service_txt="Renta de autobuses y vans"
          />
          <OurServices
          :img_src="require('@/assets/our_services/agency_blue/visa.png')"
          service_txt="Gestion de Visados"
          />
      </div>
    </div>
    <h2 class="col-span-12 w-full my-3 md:text-5xl">¿Por qué elegirnos?</h2>
    <div class="col-span-12 flex flex-col justify-between xl:flex-row">
      <div class="w-full hidden xl:flex xl:w-5/12">
        <img 
        class="rounded-4xl h-full w-full object-cover object-center"
        src="../assets/homepage_why_choose_us.png">
      </div>
      <div class="w-full flex gap-x-4 xl:w-7/12 md:gap-y-0 md:flex-col">
        <div class="w-1/2 gap-y-7 flex items-center flex-col justify-between md:gap-y-0 md:w-full">
          <ChooseUs
          class="md:mb-8"
          :icon="require('@/assets/why_choose_us/agency_blue/servicios-de-apoyo.png')"
          title_txt="Todo en un solo lugar"
          paragraph="Desde trámites de visas hasta la renta de autos o la reserva de hoteles, nos encargamos de todo. Nos ocupamos de cada paso del proceso para que tú solo te concentres en disfrutar tu viaje."
          />
          <ChooseUs 
            class="md:mb-8"
            :icon="require('@/assets/why_choose_us/agency_blue/servicio-al-cliente.png')"
            title_txt="Atención personalizada"
            paragraph="Cada cliente es único, y nos enfocamos en ofrecerte un servicio ajustado a tus necesidades, para que disfrutes de una experiencia vacacional hecha a tu medida."
          />
        </div>
        <div class="w-1/2 gap-y-7 flex items-center flex-col justify-between md:gap-y-0 md:w-full">
          <ChooseUs
            :icon="require('@/assets/why_choose_us/agency_blue/lealtad.png')"
            class="md:mb-8"
            title_txt="Confianza y lealtad"
            paragraph="La fidelidad de nuestros clientes es nuestro mayor respaldo. Trabajamos continuamente para ganar y mantener tu confianza, asegurando que siempre recibas un servicio excepcional."
          />
          <ChooseUs 
          :icon="require('@/assets/why_choose_us/agency_blue/diez_años.png')"
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
import { onMounted, ref } from 'vue';
import BtnGeneral from '@/components/BtnGeneral.vue';
import MostPopular from '@/components/MostPopular.vue';
import OurServices from '@/components/OurServices.vue';
import ChooseUs from '@/components/ChooseUs.vue';
import router from '@/router';


onMounted(() => {
  document.title = "Mx Travel";
})

</script>