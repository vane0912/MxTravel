<template>
  <div class="pt-18 px-11 flex flex-col items-center
  md:px-padding-grid">
    <h1 class=" text-center leading-none md:text-5xl lg:text-6xl">¿Quiénes somos?</h1>
    <h3 class=" text-center mt-6 md:text-xl">Calidad, confianza y servicio personalizado</h3>
    <div class="flex w-full gap-x-4 gap-y-3 min-h-100 my-11 overflow-hidden md:justify-center">
      <div class="flex gap-x-4 animate-carousel md:w-full md:max-w-7xl
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
    <h2 class=" text-center md:text-5xl">Sobre nuestra agencia</h2>
    <div class="w-5/6 flex gap-x-20 my-11 items-center flex-col-reverse
    lg:flex-row">
      <div class="w-full h-64 rounded-2xl lg:w-1/2 lg:h-96 mt-10 lg:mt-0">
        <img class="h-full object-cover w-full rounded-2xl" 
        src="../assets/about_us/sobre_nosotros.png" alt="">
      </div>
      <div class="w-full lg:w-1/2">
        <p class=" leading-7  md:text-lg">Somos Mx Travel, una agencia de viajes en Chihuahua con más de 10 años de experiencia y registro nacional de turismo. Ofrecemos desde paquetes vacacionales hasta asesoría en trámites, cuidando cada detalle para que disfrutes una experiencia única.</p>
        <BtnGeneral
        class="mt-8"
        @go-to="router.push('/conocenos#cotizar')"
        btn-txt="Cotiza ahora"
        />
      </div>
    </div>
    <h2 class=" text-center md:text-5xl">Testimoniales</h2>
    <h3 class=" text-center md:text-xl">Lo que nuestros viajeros tienen que compartir</h3>
    <div class="w-5/6 flex gap-x-6 my-11 flex-col xl:flex-row">
      <div class="w-full xl:w-1/2 gap-y-4 flex flex-col">
        <Testimonials 
          :user_img="require('@/assets/about_us/Testimonios/user_1.png')"
          link_to_comment="https://www.facebook.com/agenciamxtravel/videos/462245533244703/?comment_id=903972591580956&__cft__[0]=AZXuTd7KImis8ntAeK6WDngn93m1r66ju7iYrjiqS9npwO49yRNHRwB1XlJdbKGgTiYV0rhxtJvhFbeOFoilzTbMaodP3r6vt8IGg0enIlZXpPsE-wUlArsb3okPnq7_j1lOwJC8ZMI76ZZQ7cN1eHTuCHYoP0Qsgz-H0N9xELckawR837DmAPnQT2lQtPV2A_uwLIE2R9C-6oaSVkAqWY4S&__tn__=R]-R"
          title_txt="Ada Beltran"
          comment="100% recomendado, les doy un 💯 de 10... La atención, el hotel, los servicios, los paseos, todo es maravilloso, lo recomiendo!!! Pronto volvemos para otro viaje ❤️"
        />
        <Testimonials
          :user_img="require('@/assets/about_us/Testimonios/user_2.png')"
          link_to_comment="https://www.facebook.com/agenciamxtravel/posts/pfbid035zriGPjx53FV6QsTwMj34XUy5vZ6zmmEjFbCekNujtFrUzZYbauwff1fwJwocFDJl?comment_id=1410295269842083&__cft__[0]=AZU3KgEIFIao_gGcbp2ZelRkScJONLXBWWxtq3gw7qGWUHMBG1rsegHcNA0kVhPs53AEVnAOrlCy9fnssmcbMLwR5UQTO46iVK7YmbMZ9l8GFE0sHuTig-odQB1SowjPrnRTGqiz8r1UawyXZkm2qmkT8D7m4vkNc-bIcuqdeCuhqp43ViK_9J52CLcd_MlfMDs&__tn__=R-R"
          title_txt="Anairam Adepez"
          comment="Excelente servicio MX Travel"
        />
      </div>
      <div class="w-full mt-5 xl:m-0 xl:w-1/2 gap-y-4 flex flex-col">
        <Testimonials
          :user_img="require('@/assets/about_us/Testimonios/user_3.png')"
          link_to_comment="https://www.facebook.com/agenciamxtravel/posts/pfbid026Yrgtzn5WoXGqY87pWCkpKH4LvVxnHwN6t4Lbe8pDz4tQXNWZSr2sF68vt8GdDVcl?comment_id=1038939180558398&__cft__[0]=AZXAvtyieDkjmBNKn0QuOwoU43Dncs8W3J36GHXGFZTvN2qlbIqwIhyu9weKuevOLh6qsJLlTXJqfQpZu6jmK6IU0FKwtF7FhfHIab-b1iVmSRvHIg-WdQhG6LEoRlImbQ9id5Jd2Lm7HehLefjo16GYyC7KCuD7bXY9d_WDh7C7JvxxcbQl_MDgqWOWHPTOIns&__tn__=R]-R"
          title_txt="Alejandra Ceniceros Terrazas"
          comment="Fue un placer viajar con ustedes, lo máximo"
        />
        <Testimonials
          :user_img="require('@/assets/about_us/Testimonios/user_4.png')"
          link_to_comment="https://www.facebook.com/agenciamxtravel/posts/pfbid02JM4NAiC7kXu7CfZzDjjCyFmFJsd5xxxxkFaqnSHfge9H5eFwjBm2dJ6G9pppaJNel?comment_id=707888184266226&__cft__[0]=AZWsDySQNWzsbskIyyHJKMx_V30scBDr___6XnY4H18TXD9cqprLUsV6y4XeMiVcUaZn-Yqar65Dgc-KKt_nRsc9Up_DXdoHnYP6PqiGDIU_E_6S_2beFvUtB8g1w7YFvCmzYjuy_GRWvf0hAMUfNuAXeaVOEq7x8X46MWg8PMs4p9eH6QHoKZeyNtV6OlbG6XM&__tn__=R-R"
          title_txt="RySh Kapoor"
          comment="Satisfecho y Muy contento con el servicio. Muchas gracias"
        />
      </div>
    </div>
    <h2 class=" text-center md:text-5xl">Contactanos</h2>
    <div class="w-full md:w-5/6 flex h-fit gap-x-8 mt-8 flex-col-reverse lg:flex-row">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.077869423627!2d-106.14481012437895!3d28.71721878022964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea416a6e49ce81%3A0x8c099eb45f7d56d1!2sMx%20Travel!5e0!3m2!1ses-419!2smx!4v1730423818091!5m2!1ses-419!2smx" 
      class="rounded-3xl w-full h-80 mt-5 lg:m-0 lg:w-1/2" style="border:0;" allowfullscreen="" loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="bg-agency-blue/10 rounded-3xl w-full flex-wrap lg:w-1/2 h-80 flex flex-col px-4 sm:px-12 justify-evenly">
        <div>
          <h3 >Correo</h3>
          <p>ventas.mxtravel2@gmail.com</p>
        </div>
        <div>
          <h3 >Whatsapp</h3>
          <p class="">+52 614 599 7193</p>
        </div>
        <div>
          <h3>Oficinas</h3>
          <p>Paseos de San Carlos 14962, Col. Paseos de Chihuahua. Chihuahua, Chihuahua Mexico</p>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-cols-12 grid w-full h-fit my-11 gap-x-8 gap-y-7" id="cotizar">
    <h2 id="title_cotizacion" class=" col-span-full justify-self-center md:text-5xl">Solicita tu cotización</h2>
    <div 
      v-if="empty_inputs"
      class="col-start-2 col-end-12 bg-red-400 h-fit p-4 flex items-center md:col-start-3 md:col-end-11">
      <p class="text-agency-white">Por favor completa todos los campos antes de continuar</p>
    </div>
    <InputForm
    class="col-start-2 col-end-12 md:col-start-3 md:col-end-7"
    v-model:info_value ="form_items.client_name"
    input_txt="Nombre"
    placeholder_txt="Juan Perez"
    />
    <InputForm
    class="col-start-2 col-end-12 md:col-start-7 md:col-end-11"
    v-model:info_value ="form_items.telephone"
    input_txt="Numero de telefono"
    placeholder_txt="614 1111 1111"
    />
    <div class="flex flex-col col-start-2 col-end-12 md:col-start-3 md:col-end-7">
        <h3> ¿En que estas interesado?</h3>
        <select
        v-model="form_items.service_type"
        class="h-12  mt-3 bg-agency-blue/10 border-b-2 border-b-agency-blue  px-4">
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
    class="col-start-2 col-end-12 md:col-start-7 md:col-end-11"
    placeholder_txt="correo@gmail.com"
    v-model:info_value ="form_items.email"
    input_txt="Correo Electrónico (opcional)"
    />
    <div class="flex flex-col col-start-2 col-end-12 md:col-start-3 md:col-end-11">
        <h3>Cuéntanos más detalles</h3>
        <textarea
        v-model="form_items.trip_details"
        placeholder="Ej. Lugar de Destino, Numero de personas, Fechas, etc"
        class="h-60  mt-3 p-4 outline-none bg-agency-blue/10 placeholder:text-agency-blue/50 border-b-2 border-b-agency-blue"
        ></textarea>
    </div>
    <div v-if="email_sent" class="col-start-4 col-end-10 justify-self-center" >
      <h3 class="  text-center">Tu solicitud fue enviada</h3>
      <p class=" text-center my-4">En breve un agente se contactara contigo para dar seguimiento a tu cotizacion.</p>
      <p class=" text-center">!Gracias por contactarnos!</p>
    </div>
    <div v-if="email_sent_error" class="col-start-4 col-end-10 justify-self-center" >
      <h3 class="text-center">¡Ups! parece que ocurrio un error</h3>
      <p class="text-center my-4">Por favor contactanos al 614 599 7193 y envianos la informacion de tu viaje</p>
    </div>
    <BtnGeneral
      v-if="!email_sent && !email_sent_error"
      @go-to="send_email()"
      btn-txt="Enviar"
      :class="{'bg-slate-400': email_event}"
      class="col-start-4 col-end-10 justify-self-center"
    />
  </div>
</template>

<script setup >
import { onMounted, ref } from 'vue';
import BtnGeneral from '@/components/BtnGeneral.vue';
import Testimonials from '@/components/Testimonials.vue';
import InputForm from '@/components/InputForm.vue';
import router from '@/router';
import emailjs from '@emailjs/browser';
const form_items = ref({client_name: '', telephone: '', email: '', service_type: '', trip_details: ''})
let email_sent = ref(false)
let email_sent_error = ref(false)
let email_event = ref(false)
let empty_inputs = ref(false)
onMounted(() => {
  document.title = "Mx Travel | Conocenos";
});

function send_email(){
  const key_val = Object.entries(form_items.value).filter(([key]) => key !== 'email').every(([element, index]) => index.length > 0)
  if(key_val){
    email_event.value = true
    empty_inputs.value = false
    emailjs.send('contact_service', 'contact_form', form_items.value,{
    publicKey: 'YVRvt3R-JE02612ml'
    }).then(() => {
      email_sent.value = true
      }
    ).catch(() =>{
      email_sent_error.value = true
    })
  }else{
    empty_inputs.value = true
    document.getElementById('title_cotizacion').scrollIntoView()
  }
}
</script>