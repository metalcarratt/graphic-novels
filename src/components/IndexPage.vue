<template>
    <h1>Graphic Novels</h1>
    <a
        v-for="(novel, index) in novels"    
        :href="url(novel)"
        :key="index"
    >
        {{ title(novel) }}
    </a>
</template>

<script setup>
import { novelList, novelDetails } from '@/novels/list';

const novels = novelList;

const url = (novel) => `/?n=${novel}`;

const title = (novel) => `Novel - ${novelDetails[novel].title}`;
</script>