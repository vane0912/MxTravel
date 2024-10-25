<template>
  <nav class="w-full h-20 bg-agency-blue/80 flex px-padding-grid justify-between items-center">
      <div>
        <router-link to="/">
          <img class="w-14 h-14" src="./assets/MxTravel.png" alt="">
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
  <footer class="w-full h-20 bg-agency-blue/80">

  </footer>
</template>
