<template>
    <div class="w-full min-w-56 md:min-w-64 max-w-64 py-8 h-48 bg-agency-blue/10 px-5 md:px-8 rounded-3xl flex flex-col justify-center items-center">
        <img class="w-our_services mb-4" :src="img_src">
        <h3 class="text-agency-blue text-center md:text-xl">{{ service_txt }}</h3>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps(['service_txt', 'img_src'])
</script>