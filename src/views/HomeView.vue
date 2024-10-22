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
    <h2 class="text-agency-blue col-span-12 w-full mt-10">¿Por qué elegirnos?</h2>
    <img 
    class="rounded-4xl mb-7 col-span-6 self-center"
    src="../assets/homepage_why_choose_us.png">
    <div class="col-span-6 self">
      <ChooseUs
      :icon="experience"
      class="mb-10"
      title_txt="Mas de una década de experiencia"
      paragraph="Nuestra sólida trayectoria en el sector turístico nos permite brindarte productos y servicios de la más alta calidad, asegurando que cada detalle de tu viaje sea perfecto."
      />
      <ChooseUs
        :icon="costumer"
        class="mb-10"
        title_txt="Atención personalizada"
        paragraph="Cada cliente es único, y nos enfocamos en ofrecerte un servicio ajustado a tus necesidades, para que disfrutes de una experiencia vacacional hecha a tu medida."
      />
      <ChooseUs
        :icon="one_place"
        class="mb-10"
        title_txt="Todo en un solo lugar"
        paragraph="Desde trámites de visas hasta la renta de autos o la reserva de hoteles, nos encargamos de todo. Nos ocupamos de cada paso del proceso para que tú solo te concentres en disfrutar tu viaje."
      />
      <ChooseUs
      :icon="loyalty"
      title_txt="Confianza y lealtad"
      paragraph="La fidelidad de nuestros clientes es nuestro mayor respaldo. Trabajamos continuamente para ganar y mantener tu confianza, asegurando que siempre recibas un servicio excepcional."
      />
    </div>
    <div class="col-span-12 w-full flex justify-center mt-12">
      <BtnGeneral btnTxt="Conocenos"></BtnGeneral>
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