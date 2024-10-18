<template>
  <nav class="w-full h-20 bg-agency-blue/80 flex px-padding-grid justify-between items-center">
      <div>
        <router-link to="/">
          <img class="w-14 h-14" src="./assets/MxTravel.png" alt="">
        </router-link>
      </div>
      <div class="flex w-2/5 justify-between">
        <router-link class="col-start-8" to="#">
          <h3 class="text-agency-white">Conocenos</h3>
        </router-link>
        <router-link class="col-start-10 col-end-13 " to="#">
          <h3 class="text-agency-white">Cotiza con nosotros</h3>
        </router-link>
      </div>
  </nav>
  <div class="grid-cols-12 grid w-full px-padding-grid">
    <router-view/>
  </div>
</template>
