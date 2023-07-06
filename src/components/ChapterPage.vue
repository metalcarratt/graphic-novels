<template>
    <h1>{{ title }}</h1>
    <template v-for="(part, index) of chapterContents" :key="index">
        <p v-if="part.p">{{ part.p }}</p>
        <img v-if="part.i" :src="imgUrl(part)"/>
    </template>
    <a :href="nextChapterUrl()">
        Next Chapter
    </a>
</template>

<script setup>
import { defineProps } from 'vue';
import { novelDetails } from '@/novels/list';


const props = defineProps(['novel', 'chapter']);

const chapterDetails = novelDetails[props.novel].chapters.find(ch => ch.index === Number(props.chapter) );

const title = chapterDetails.title;

const chapterContents = novelDetails[props.novel].getChapter(props.chapter);

const imgUrl = (part) => `./images/${chapterDetails.url}${part.i}`;

const nextChapterUrl = () => `/?n=${props.novel}&ch=${Number(props.chapter) + 1}`;

</script>