<template>
    <a 
    target="_blank"
    :href="link_to_comment"
    class="hover:scale-105 hover:delay-200 hover:transition-all hover:ease-in-out
    h-fit
    xl:h-32 w-full rounded-xl px-4 py-4 flex items-center gap-6 bg-agency-white drop-shadow-darker">
        <div class="min-w-12 h-12 rounded-full">
            <img class="w-full max-w-12 h-full object-cover rounded-full" :src="user_img" alt="">
        </div>
        <div>
            <h4>{{ title_txt }}</h4>
            <span>{{ comment }}</span>
        </div>
    </a>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps(['title_txt', 'comment', 'link_to_comment', 'user_img'])
</script>