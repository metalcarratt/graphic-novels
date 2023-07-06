<template>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <a
        v-for="(chapter, index) in chapters"
        :key="index"
        :href="url(chapter.index)"
    >
        Chapter {{ chapter.index }} - {{ chapter.title }}
    </a>
</template>

<script setup>
import { defineProps } from 'vue';
import { novelDetails } from '@/novels/list';

const props = defineProps(['novel']);

const title = novelDetails[props.novel].title;

const description = novelDetails[props.novel].description;

const chapters = novelDetails[props.novel].chapters;

const url = (chapterNumber) => `/?n=${props.novel}&ch=${chapterNumber}`;

</script>