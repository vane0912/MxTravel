<template>
  <nav class="w-full h-20 bg-agency-blue flex px-padding-grid sticky top-0 z-20 justify-between items-center">
      <div>
        <router-link to="/">
          <img class="w-20 h-20" src="./assets/MxTravel.png" alt="">
        </router-link>
      </div>
      <div class="flex w-2/6 justify-between">
        <router-link class="mx-3" to="#">
          <h3 class="text-agency-white">Conocenos</h3>
        </router-link>
        <router-link  to="#">
          <h3 class="text-agency-white text-center">Cotiza con nosotros</h3>
        </router-link>
      </div>
  </nav>
  <router-view/>
  <footer class="w-full h-20 bg-agency-blue">

  </footer>
</template>
