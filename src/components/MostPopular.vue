<template>
    <div 
    @mouseover="hovering_state = true"
    @mouseout="hovering_state = false"
    class="w-full relative rounded-2xl drop-shadow-custom cursor-pointer">
        <img class="w-full h-72 rounded-2xl" :src="img_src" alt="">
        <div 
        class="w-full bg-agency-blue/70 h-fit absolute flex justify-center flex-col bottom-0 rounded-b-2xl py-4 px-5">
            <div class="flex items-center">
                <h3 class="text-agency-white leading-none mr-1">{{ state_title }}</h3>
                <img class="w-3 h-3 mx-1" src="../assets/estrella.png" alt="star" v-for="n in 5" :key="n">
            </div>
            <h4 :class="{'translate-y-0 opacity-100': hovering_state, 'translate-y-full opacity-0': !hovering_state}"
              class="text-agency-white transform transition-all duration-500 ease-out"
            >Cotizar -></h4>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

defineProps(['img_src', 'state_title']);
const hovering_state = ref(false);
</script>
