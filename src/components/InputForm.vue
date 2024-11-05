<template>
    <div class="flex flex-col w-full">
        <h3 class="text-agency-blue">{{ input_txt }}</h3>
        <input 
        class="h-12 px-4 mt-3 bg-agency-blue/10 text-agency-blue placeholder:text-agency-blue/50 border-b-2 border-b-agency-blue outline-none" 
        :placeholder="placeholder_txt" 
        type="text">
    </div>
</template>

<script setup>
defineProps(['input_txt', 'placeholder_txt'])
</script>