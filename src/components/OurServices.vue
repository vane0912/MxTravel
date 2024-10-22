<template>
    <div class="w-full min-w-64 max-w-64 py-8 h-48 bg-agency-blue/10 px-11 rounded-3xl flex flex-col justify-center items-center">
        <img class="w-our_services mb-4" :src="img_src">
        <h3 class="text-agency-blue text-center">{{ service_txt }}</h3>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps(['service_txt', 'img_src'])
</script>