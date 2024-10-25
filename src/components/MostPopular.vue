<template>
    <div 
    @mouseover="hovering_state = true"
    @mouseout="hovering_state = false"
    class="w-full relative rounded-2xl drop-shadow-custom cursor-pointer">
        <div class="w-full h-96">
            <img class="object-cover h-full rounded-2xl" :src="img_src" alt="">
        </div>
        <div 
        class="w-full bg-agency-blue/70 h-fit absolute flex justify-center flex-col bottom-0 rounded-b-2xl py-4 px-5">
            <div class="flex items-center">
                <h3 
                :class="{'translate-y-0 opacity-100': hovering_state, 'translate-y-3': !hovering_state}"
                class="text-agency-white leading-none mr-1 mb-1 transition-all duration-500">{{ state_title }}</h3>
            </div>
            <div class="flex items-center">
                <h4 :class="{'translate-y-0 opacity-100': hovering_state, 'translate-y-full opacity-0': !hovering_state}"
                class="text-agency-white transform transition-all duration-500 ease-out"
                >Cotizar</h4>
                <img :class="{'translate-y-0 opacity-100': hovering_state, 'translate-y-full opacity-0': !hovering_state}"
                class="transform transition-all duration-500 ease-out w-5 ml-2 mt-2 h-5"
                src="../assets/next_arrow.png" alt="cotizar">
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

defineProps(['img_src', 'state_title']);
const hovering_state = ref(false);
</script>
