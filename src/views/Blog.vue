<template>
    <head>
        <meta name="description" content="This is a meta description">
    </head>
    <div class="grid grid-cols-4 xl:grid-cols-12 mx-11 md:mx-36 gap-8 my-12">
        <div class="col-start-1 col-end-4 xl:col-start-4 xl:col-end-9">
            <span class="text-lg font-medium">21 Enero 2025</span>
        </div>
        <h1 class="col-start-1 col-end-5 xl:col-start-4 xl:col-end-9 blogh1">
            {{ markdownTitle }}
        </h1>
        <div class="col-start-1 col-end-5 xl:col-start-4 xl:col-end-9 flex flex-col flex-wrap" v-html="markdownContent"></div>
        <div class="col-span-full px-4 xl:px-24 h-80 border-agency-orange border rounded-2xl mt-20 flex flex-col text-center justify-evenly items-center">
            <h2 class="text-2xl md:text-3xl m-0">¿Tienes mas preguntas o estas interesado en una cotización personalizada?</h2>
            <BtnGeneral @go-to="router.push('/conocenos#cotizar')" btn-txt="Contactanos"></BtnGeneral>
        </div>
    </div>
</template>
<script setup>
import BtnGeneral from '@/components/BtnGeneral.vue';
import router from '@/router';
import showdown from 'showdown';
import { onMounted, ref } from 'vue';
let markdownContent = ref('')
let markdownTitle = ref('')
const postDescription = 'Learn how to optimize your Vue.js blog for SEO using meta tags, structured data, and more.';
async function getBlog(){
    const converter = new showdown.Converter()
    const blog_body = await fetch('http://localhost:3000/blogs')
    const convert_json = await blog_body.json()
    markdownTitle.value = convert_json[2].blog_title
    markdownContent.value = converter.makeHtml(convert_json[2].blog_body)

    document.title = markdownTitle.value
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = postDescription;

    document.head.appendChild(meta);
}
onMounted(getBlog)

</script>

<style>
    .blogh1{
        font-weight: 800;
        font-size: 48px;
    }
    p img{
        width: 100%;
        height: 353px;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
        margin: 2.5rem 0rem;
    }
    h2{
        font-weight: bold;
        font-size: 32px;
        margin-top: 2.5rem;
        margin-bottom: 2rem;
    }
    ul{
        margin: 1rem;
        list-style: decimal;
        font-weight: bolder;
        color: #2B6CAE;
    }
    @media only screen and (max-width: 500px) {
        .blogh1{
            font-size: 30px;
        }
        h2{
            font-size: 25px;
        }
    }
</style>