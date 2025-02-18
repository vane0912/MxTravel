<template>
    <div v-html="markdownContent">

    </div>
</template>
<script setup>
import showdown from 'showdown';
import { onMounted, ref } from 'vue';
let markdownContent = ref('')
async function getBlog(){
    const converter = new showdown.Converter()
    const blog_body = await fetch('http://localhost:3000/blogs')
    const convert_json = await blog_body.json()
    markdownContent.value = converter.makeHtml(convert_json[2].blog_body)
}
onMounted(getBlog)

</script>