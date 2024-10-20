<template>
    <div>
        <img class="w-20 h-20" :src="img_src" alt="">
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps(['img_src'])
</script>