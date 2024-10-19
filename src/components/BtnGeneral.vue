<template>
    <button class="w-64 h-16 bg-agency-orange text-agency-white rounded-tl-full rounded-br-full">
        {{ btnTxt }}
    </button>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps(['btnTxt'])
</script>