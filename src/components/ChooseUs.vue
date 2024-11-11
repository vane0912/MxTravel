<template>
    <div class="flex flex-col md:flex-row lg:justify-between items-center h-fit xl:px-14 w-full">
        <img class="w-our_services h-our_services md:mr-7" :src="icon" alt="">
        <div class="">
            <h3 class="text-agency-blue mb-3 text-center mt-3 
            md:text-xl md:text-left">{{ title_txt }}</h3>
            <p class="text-agency-blue hidden md:contents">{{ paragraph }}</p>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps(['title_txt', 'paragraph', 'icon'])
</script>