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
import { pathRoot } from '@/engine/path';

const novels = novelList;

const url = (novel) => `${pathRoot()}?n=${novel}`;

const title = (novel) => `Novel - ${novelDetails[novel].title}`;
</script>