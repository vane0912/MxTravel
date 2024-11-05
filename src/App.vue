<template>
  <nav class="w-full h-20 bg-agency-blue flex px-padding-grid sticky top-0 z-20 justify-between items-center">
    <div>
      <router-link to="/">
        <img class="w-20 h-20" src="./assets/MxTravel.png" alt="">
      </router-link>
    </div>
    <div class="flex w-2/6 justify-between">
      <router-link class="mx-3" to="/conocenos">
        <h3 class="text-agency-white">Conocenos</h3>
      </router-link>
      <router-link to="/conocenos">
        <h3 class="text-agency-white text-center">Cotiza con nosotros</h3>
      </router-link>
    </div>
  </nav>
  <router-view/>
  <footer class="w-full h-20 flex justify-evenly items-center bg-agency-blue">
    <a href="mailto:ventasmxtravel@gmail.com" class="flex justify-center items-center h-fit">
      <img class="w-9 h-9 mr-5" src="./assets/footer_icons/correo-electronico.png" alt="">
      <h3 class="text-agency-white">ventasmxtravel@gmail.com</h3>
    </a>
    <a href="https://www.instagram.com/mxtravelcuu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="flex justify-center items-center h-fit">
      <img class="w-9 h-9 mr-5" src="./assets/footer_icons/instagram.png" alt="">
      <h3 class="text-agency-white">@mxtravelcuu</h3>
    </a>
    <a href="https://www.facebook.com/agenciamxtravel" class="flex justify-center items-center h-fit">
      <img class="w-9 h-9 mr-5" src="./assets/footer_icons/logo-de-facebook.png" alt="">
      <h3 class="text-agency-white">MX Travel</h3>
    </a>
    <a href="https://www.tiktok.com/@mxtravelcuu?is_from_webapp=1&sender_device=pc" class="flex justify-center items-center h-fit">
      <img class="w-9 h-9 mr-5" src="./assets/footer_icons/tik-tok.png" alt="">
      <h3 class="text-agency-white">@mxtravelcuu</h3>
    </a>
  </footer>
</template>
