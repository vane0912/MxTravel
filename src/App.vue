<template>
  <nav class="w-full h-20 bg-agency-blue flex px-padding-grid sticky top-0 z-20 justify-between items-center 2xl:justify-evenly">
    <div class="w-20 h-20 min-w-20 ">
      <router-link to="/">
        <img class="w-full h-full" src="./assets/MxTravel.png" alt="">
      </router-link>
    </div>
    <div class="flex gap-x-20">
      <router-link class="mx-3" to="/conocenos">
        <h3 class="text-agency-white md:text-xl">Conocenos</h3>
      </router-link>
      <router-link :to="{ path:'/conocenos', hash: '#cotizar' }">
        <h3 class="text-agency-white text-center md:text-xl">Cotiza con nosotros</h3>
      </router-link>
    </div>
  </nav>
  <router-view/>
  <footer class="w-full h-fit py-6 flex justify-center items-center bg-agency-blue md:flex-row">
    <div class="flex w-5/12 flex-row justify-end lg:flex-row sm:flex-col sm:items-start sm:justify-evenly ">
      <a href="mailto:ventasmxtravel@gmail.com" class="flex mb-4 justify-center items-center h-fit lg:mb-0">
        <img class="w-6 h-6 mr-6 sm:mr-3" src="./assets/footer_icons/correo-electronico.png" alt="">
        <p class="text-agency-white hidden sm:contents">ventasmxtravel@gmail.com</p>
      </a>
      <a href="https://www.instagram.com/mxtravelcuu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="flex justify-center items-center h-fit">
        <img class="w-6 h-6 mr-6 sm:mr-3" src="./assets/footer_icons/instagram.png" alt="">
        <p class="text-agency-white hidden sm:contents">@mxtravelcuu</p>
      </a>
    </div>
    <div class="flex w-2/6 flex-row lg:flex-row sm:flex-col sm:items-start sm:justify-evenly ">
      <a href="https://www.facebook.com/agenciamxtravel" class="flex mb-4 lg:m-0 justify-center items-center h-fit">
        <img class="w-6 h-6 mr-6 sm:mr-3"src="./assets/footer_icons/logo-de-facebook.png" alt="">
        <p class="text-agency-white hidden sm:contents">MX Travel</p>
      </a>
      <a href="https://www.tiktok.com/@mxtravelcuu?is_from_webapp=1&sender_device=pc" class="flex justify-center items-center h-fit">
        <img class="w-6 h-6 mr-6 sm:mr-3" src="./assets/footer_icons/tik-tok.png" alt="">
        <p class="text-agency-white hidden sm:contents">@mxtravelcuu</p>
      </a>
    </div>
  </footer>
</template>
