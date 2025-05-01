<template>
    <div class="grid-cols-4 py-20 px-10 md:px-36 grid lg:grid-cols-12 h-fit gap-x-7">
        <h1 class="col-span-full h-fit">Artículos</h1>
        <div class="bg-agency-white border h-fit border-agency-blue border-b-0 col-span-full xl:col-start-1 xl:col-end-8 rounded-lg mt-10">
            <div @click="router.push('/blog/' + blog.blog_title.replace(/ /g, '-'))" 
                v-for="blog in all_blogs" 
                class="py-8 px-9 border-b  border-b-agency-blue cursor-pointer hover:bg-agency-blue/10">
                <h3>{{ blog.blog_title }}</h3>
            </div>
        </div>
        <div class="col-span-full xl:col-start-9 xl:col-end-13 bg-agency-blue h-fit mt-10 rounded-xl py-14 text-center px-10">
            <h3 class="text-agency-white mb-8">¿Tienes mas preguntas o estas interesado en una cotización personalizada?</h3>
            <BtnGeneral
                @go-to="router.push('/conocenos#cotizar')"
                btn-txt="Contactanos"
            />
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import BtnGeneral from '@/components/BtnGeneral.vue';
import router from '@/router';
const all_blogs = ref()
onMounted(async () => {
    document.title = 'Artículos de viaje'
    const blog_body = await fetch('http://localhost:3000/blogs/all')
    all_blogs.value = await blog_body.json()
})
</script>