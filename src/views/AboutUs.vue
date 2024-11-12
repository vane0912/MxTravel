<template>
  <div class="pt-18 px-11 flex flex-col items-center
  md:px-padding-grid">
    <h1 class="text-agency-blue text-center leading-none md:text-5xl lg:text-6xl">¿Quiénes somos?</h1>
    <h3 class="text-agency-blue text-center mt-6 md:text-xl">Calidad, confianza y servicio personalizado</h3>
    <div class="flex w-full gap-x-4 gap-y-3 min-h-100 my-11 overflow-hidden">
      <div class="flex gap-x-4 animate-carousel
      md:h-100 md:grid md:grid-cols-12 md:gap-y-3 md:grid-rows-2 md:animate-none">
        <div class="h-52
          min-w-52
          md:row-start-1 md:row-end-3 md:col-span-4 md:h-full md:min-w-0">
          <img class="object-cover h-full w-full rounded-2xl" src="../assets/about_us/viajes/3.png" alt="">
        </div>
        <div class="h-52 min-w-52 md:row-start-1 md:row-end-1 md:col-span-4 md:min-w-0">
            <img class="object-cover h-full w-full rounded-2xl" src="../assets/about_us/viajes/2.png" alt="">
        </div>
        <div class="h-52 min-w-52 md:row-start-1 md:row-end-1 md:col-span-4 md:min-w-0">
            <img class="object-cover h-full w-full rounded-2xl" src="../assets/about_us/viajes/1.png" alt="">
        </div>
        <div class="h-52 min-w-52 md:row-start-2 md:row-end-3  md:col-span-4 md:min-w-0">
            <img class="object-cover h-full w-full rounded-2xl" src="../assets/about_us/viajes/4.png" alt="">
        </div>
        <div class="h-52 min-w-52 md:row-start-2 md:row-end-3 md:col-span-4 md:min-w-0">
            <img class="object-cover h-full w-full rounded-2xl" src="../assets/about_us/viajes/5.png" alt="">
        </div>
      </div>
      <div aria-hidden class="flex gap-x-4 animate-carousel md:hidden">
        <div class="h-52 row-span-1 min-w-52 ">
        <img class="object-cover h-full w-full rounded-2xl" src="../assets/about_us/viajes/3.png" alt="">
        </div>
        <div class="h-52 row-span-1 min-w-52 ">
            <img class="object-cover h-full w-full rounded-2xl" src="../assets/about_us/viajes/2.png" alt="">
        </div>
        <div class="h-52 row-span-1 min-w-52">
            <img class="object-cover h-full w-full rounded-2xl" src="../assets/about_us/viajes/1.png" alt="">
        </div>
        <div class="h-52 row-span-1 min-w-52">
            <img class="object-cover h-full w-full rounded-2xl" src="../assets/about_us/viajes/4.png" alt="">
        </div>
        <div class="h-52 row-span-1 min-w-52">
            <img class="object-cover h-full w-full rounded-2xl" src="../assets/about_us/viajes/5.png" alt="">
        </div>
      </div>
    </div>
    <h2 class="text-agency-blue text-center md:text-5xl">Sobre nuestra agencia</h2>
    <div class="w-5/6 flex gap-x-20 my-11 items-center flex-col-reverse
    xl:flex-row">
      <div class="w-full h-96 rounded-2xl xl:w-1/2">
        <img class="h-full object-cover w-full rounded-2xl" src="../assets/about_us/sobre_nosotros.png" alt="">
      </div>
      <div class="w-full xl:w-1/2">
        <p class="text-agency-blue leading-7  md:text-lg">Somos Mx Travel, una agencia de viajes en Chihuahua con más de 10 años de experiencia y registro nacional de turismo. Ofrecemos desde paquetes vacacionales hasta asesoría en trámites, cuidando cada detalle para que disfrutes una experiencia única.</p>
        <BtnGeneral
        class="mt-8"
        @go-to="router.push('/conocenos#bottom')"
        btn-txt="Cotiza ahora"
        />
      </div>
    </div>
    <h2 class="text-agency-blue text-center md:text-5xl">Testimoniales</h2>
    <h3 class="text-agency-blue text-center md:text-xl">Lo que nuestros viajeros tienen que compartir</h3>
    <div class="w-5/6 flex gap-x-6 my-11">
      <div class="w-1/2 gap-y-4 flex flex-col">
        <Testimonials 
          :user_img="user_1"
          link_to_comment="https://www.facebook.com/agenciamxtravel/videos/462245533244703/?comment_id=903972591580956&__cft__[0]=AZXuTd7KImis8ntAeK6WDngn93m1r66ju7iYrjiqS9npwO49yRNHRwB1XlJdbKGgTiYV0rhxtJvhFbeOFoilzTbMaodP3r6vt8IGg0enIlZXpPsE-wUlArsb3okPnq7_j1lOwJC8ZMI76ZZQ7cN1eHTuCHYoP0Qsgz-H0N9xELckawR837DmAPnQT2lQtPV2A_uwLIE2R9C-6oaSVkAqWY4S&__tn__=R]-R"
          title_txt="Ada Beltran"
          comment="100% recomendado, les doy un 💯 de 10... La atención, el hotel, los servicios, los paseos, todo es maravilloso, lo recomiendo!!! Pronto volvemos para otro viaje ❤️"
        />
        <Testimonials
          :user_img="user_2"
          link_to_comment="https://www.facebook.com/agenciamxtravel/posts/pfbid035zriGPjx53FV6QsTwMj34XUy5vZ6zmmEjFbCekNujtFrUzZYbauwff1fwJwocFDJl?comment_id=1410295269842083&__cft__[0]=AZU3KgEIFIao_gGcbp2ZelRkScJONLXBWWxtq3gw7qGWUHMBG1rsegHcNA0kVhPs53AEVnAOrlCy9fnssmcbMLwR5UQTO46iVK7YmbMZ9l8GFE0sHuTig-odQB1SowjPrnRTGqiz8r1UawyXZkm2qmkT8D7m4vkNc-bIcuqdeCuhqp43ViK_9J52CLcd_MlfMDs&__tn__=R-R"
          title_txt="Anairam Adepez"
          comment="Excelente servicio MX Travel"
        />
      </div>
      <div class="w-1/2 gap-y-4 flex flex-col">
        <Testimonials
          :user_img="user_3"
          link_to_comment="https://www.facebook.com/agenciamxtravel/posts/pfbid026Yrgtzn5WoXGqY87pWCkpKH4LvVxnHwN6t4Lbe8pDz4tQXNWZSr2sF68vt8GdDVcl?comment_id=1038939180558398&__cft__[0]=AZXAvtyieDkjmBNKn0QuOwoU43Dncs8W3J36GHXGFZTvN2qlbIqwIhyu9weKuevOLh6qsJLlTXJqfQpZu6jmK6IU0FKwtF7FhfHIab-b1iVmSRvHIg-WdQhG6LEoRlImbQ9id5Jd2Lm7HehLefjo16GYyC7KCuD7bXY9d_WDh7C7JvxxcbQl_MDgqWOWHPTOIns&__tn__=R]-R"
          title_txt="Alejandra Ceniceros Terrazas"
          comment="Fue un placer viajar con ustedes, lo máximo"
        />
        <Testimonials
          :user_img="user_4"
          link_to_comment="https://www.facebook.com/agenciamxtravel/posts/pfbid02JM4NAiC7kXu7CfZzDjjCyFmFJsd5xxxxkFaqnSHfge9H5eFwjBm2dJ6G9pppaJNel?comment_id=707888184266226&__cft__[0]=AZWsDySQNWzsbskIyyHJKMx_V30scBDr___6XnY4H18TXD9cqprLUsV6y4XeMiVcUaZn-Yqar65Dgc-KKt_nRsc9Up_DXdoHnYP6PqiGDIU_E_6S_2beFvUtB8g1w7YFvCmzYjuy_GRWvf0hAMUfNuAXeaVOEq7x8X46MWg8PMs4p9eH6QHoKZeyNtV6OlbG6XM&__tn__=R-R"
          title_txt="RySh Kapoor"
          comment="Satisfecho y Muy contento con el servicio.Muchas gracias"
        />
      </div>
    </div>
    <h2 class="text-agency-blue text-center md:text-5xl">Contactanos</h2>
    <div class="w-5/6 flex h-fit gap-x-8 mt-8">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.077869423627!2d-106.14481012437895!3d28.71721878022964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea416a6e49ce81%3A0x8c099eb45f7d56d1!2sMx%20Travel!5e0!3m2!1ses-419!2smx!4v1730423818091!5m2!1ses-419!2smx" 
      class="rounded-3xl w-1/2 h-80" style="border:0;" allowfullscreen="" loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="bg-agency-blue/10 rounded-3xl w-1/2 h-80 flex flex-col px-12 justify-evenly">
        <div>
          <h3 class="text-agency-blue">Correo</h3>
          <p class="text-agency-blue">ventasmxtravel@gmail.com</p>
        </div>
        <div>
          <h3 class="text-agency-blue">Whatsapp</h3>
          <p class="text-agency-blue">+52 614 599 7193</p>
        </div>
        <div>
          <h3 class="text-agency-blue">Oficinas</h3>
          <p class="text-agency-blue">Paseos de San Carlos 14962, Col. Paseos de Chihuahua. Chihuahua, Chihuahua Mexico</p>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-cols-12 grid w-full h-fit my-11 gap-x-8 gap-y-7">
        <h2 class="text-agency-blue col-start-4 col-end-10 justify-self-center">Solicita tu cotización</h2>
        <InputForm
        class="col-start-4 col-end-7"
        input_txt="Nombre"
        placeholder_txt="Juan Perez"
        />
        <InputForm
        class="col-start-7 col-end-10"
        input_txt="Numero de telefono"
        placeholder_txt="614 1111 1111"
        />
        <div class="flex flex-col col-start-4 col-end-7">
            <h3 class="text-agency-blue"> ¿En que estas interesado?</h3>
            <select
            class="h-12  mt-3 bg-agency-blue/10 border-b-2 border-b-agency-blue text-agency-blue px-4">
                <option value="Paquete Vacacional">Paquete Vacacional</option>
                <option value="Tramite de visa o pasaporte">Tramite de visa o pasaporte</option>
                <option value="Boda en la Playa">Boda en la playa</option>
                <option value="Boletos de avión o autobus">Boleto de avión o autobus</option>
                <option value="Charter aéreos o terrestre">Charter aéreos o terrestre</option>
                <option value="Reservación de hotel">Reservación de hotel</option>
                <option value="Renta de autobus o vans">Renta de autobus o vans</option>
                <option value="Gestion de Visados">Gestion de Visados</option>
                <option value="Otro">Otro</option>
            </select>
        </div>
        <InputForm
        class="col-start-7 col-end-10"
        placeholder_txt="correo@gmail.com"
        input_txt="Correo Electrónico (opcional)"
        />
        <div class="flex flex-col col-start-4 col-end-10">
            <h3 class="text-agency-blue">Cuéntanos más detalles</h3>
            <textarea
            placeholder="Ej. Lugar de Destino, Numero de personas, Fechas, etc"
            class="h-60  mt-3 p-4 outline-none bg-agency-blue/10 text-agency-blue placeholder:text-agency-blue/50 border-b-2 border-b-agency-blue"
            ></textarea>
        </div>
        <BtnGeneral
        btn-txt="Enviar"
        class="col-start-4 col-end-10 justify-self-center"
        />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import BtnGeneral from '@/components/BtnGeneral.vue';
import Testimonials from '@/components/Testimonials.vue';
import InputForm from '@/components/InputForm.vue';
import user_1 from '../assets/about_us/Testimonios/user_1.png'
import user_2 from '../assets/about_us/Testimonios/user_2.png'
import user_3 from '../assets/about_us/Testimonios/user_3.png'
import user_4 from '../assets/about_us/Testimonios/user_4.png'
import router from '@/router';
onMounted(() => {
  document.title = "Mx Travel - Conocenos";
})
</script>