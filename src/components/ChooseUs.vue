<template>
    <div class="flex justify-center items-center h-fit">
        <img class="w-our_services h-our_services mr-7" :src="icon" alt="">
        <div>
            <h3 class="text-agency-blue mb-3">{{ title_txt }}</h3>
            <p class="text-agency-blue">{{ paragraph }}</p>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps(['title_txt', 'paragraph', 'icon'])
</script>