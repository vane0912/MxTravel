<template>
    <button class="
    w-64 h-16 bg-agency-orange text-agency-white rounded-tl-full rounded-br-full transition-all delay-100
    hover:rounded-tr-full hover:rounded-bl-full hover:rounded-tl-none hover:rounded-br-none
    ">
        {{ btnTxt }}
    </button>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps(['btnTxt'])
</script>