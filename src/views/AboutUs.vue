<template>
  <div class="px-padding-grid">
    <h1 class="text-agency-blue text-center">¿Quiénes somos?</h1>
    <div class="w-full flex items-center">
      <img class="w-36 h-36" src="../assets/about_us/MxTravel.png" alt="Mx travel icono">
      <p class="text-agency-blue text-center ml-12">
        Somos Mx Travel, una agencia de viajes en Chihuahua, México, 
        con más de 10 años de experiencia en crear experiencias personalizadas e inolvidables. 
        Contamos con nuestro registro nacional de turismo, lo que respalda la calidad y confianza de nuestros servicios. 
        Ofrecemos opciones que van desde paquetes vacacionales y bodas en la playa hasta asesoría en trámites de pasaportes y visas. 
        Para nosotros, viajar es más que un traslado: es la oportunidad de descubrir y vivir momentos únicos, 
        con la tranquilidad de que cada detalle está en manos de expertos.
      </p>
    </div>
    <h2 class="text-agency-blue text-center">Testimonios de confianza</h2>
    <h3 class="text-agency-blue text-center">La experiencia de nuestros clientes, en sus propias palabras</h3>
    <div class="w-full flex overflow-x-scroll max-w-full gap-x-4">
      <div class="min-w-85 h-100">
        <img class="object-cover h-full w-full rounded-2xl object-left-bottom" src="../assets/about_us/Testimonios/1.png" alt="">
      </div>
      <div class="min-w-85 h-100">
        <img class="object-cover h-full w-full rounded-2xl object-left" src="../assets/about_us/Testimonios/2.png" alt="">
      </div>
      <div class="min-w-85 h-100">
        <img class="object-cover h-full w-full rounded-2xl object-left-top" src="../assets/about_us/Testimonios/3.png" alt="">
      </div>
      <div class="min-w-85 h-100">
        <img class="object-cover h-full w-full rounded-2xl" src="../assets/about_us/Testimonios/4.png" alt="">
      </div>
    </div>
    <h2 class="text-agency-blue text-center">Galería de Aventuras</h2>
    <h3 class="text-agency-blue text-center">Momentos inolvidables que nuestros viajeros han capturado</h3>
    <div class="grid-cols-12 grid w-full gap-x-4 gap-y-3 grid-rows-2">
      <div class="h-100 col-span-4 row-span-2">
        <img class="object-cover h-full w-full rounded-2xl" src="../assets/about_us/viajes/3.png" alt="">
      </div>
      <div class="h-52 col-span-4 row-span-1">
          <img class="object-cover h-full w-full rounded-2xl" src="../assets/about_us/viajes/2.png" alt="">
      </div>
      <div class="h-52 col-span-4 row-span-1">
          <img class="object-cover h-full w-full rounded-2xl" src="../assets/about_us/viajes/1.png" alt="">
      </div>
      <div class="h-52 col-span-4 row-span-2">
          <img class="object-cover h-full w-full rounded-2xl" src="../assets/about_us/viajes/4.png" alt="">
      </div>
      <div class="h-52 col-span-4 row-span-2">
          <img class="object-cover h-full w-full rounded-2xl" src="../assets/about_us/viajes/5.png" alt="">
      </div>
    </div>
    <h2 class="text-agency-blue text-center">Contactanos</h2>
    <div class="w-full flex h-fit gap-x-8">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.077869423627!2d-106.14481012437895!3d28.71721878022964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea416a6e49ce81%3A0x8c099eb45f7d56d1!2sMx%20Travel!5e0!3m2!1ses-419!2smx!4v1730423818091!5m2!1ses-419!2smx" 
      class="rounded-3xl w-1/2 h-80" style="border:0;" allowfullscreen="" loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="bg-agency-blue/10 rounded-3xl w-1/2 h-80">
        <h3>Correo</h3>
        <p>ventasmxtravel@gmail.com</p>
        <h3>Whatsapp</h3>
        <p>+52 614 599 7193</p>
        <h3>Oficinas</h3>
        <p>Paseos de San Carlos 14962, Col. Paseos de Chihuahua. Chihuahua, Chihuahua Mexico</p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  document.title = "Mx Travel - Conocenos";
})
</script>