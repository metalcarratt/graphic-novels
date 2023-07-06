<template>
  <div class="story">
    <IndexPage v-if="!pageDetails.novel" />
    <TitlePage v-else-if="!pageDetails.chapter" :novel="pageDetails.novel" />
    <ChapterPage v-else :novel="pageDetails.novel" :chapter="pageDetails.chapter" />
  </div>
</template>

<script setup>
import IndexPage from '@/components/IndexPage.vue';
import TitlePage from './components/TitlePage.vue';
import ChapterPage from './components/ChapterPage.vue';
import { parseQueryString } from './engine/queryParser';

const pageDetails = parseQueryString();
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ysabeau+Office&family=Ysabeau+SC:wght@600&display=swap');

html, body {
  margin: 0;
  height: 100%;
}

#app {
  display: flex;
  justify-content: center;
  background-color: #39261e;
  color: #efd4c9;
  min-height: 100%;
}

.story {
  max-width: 1000px;
}

img {
  width: 100%;
}

h1 {
  font-size: 70px;
  font-family: 'Ysabeau SC', sans-serif;
}

p, a {
  font-size: 40px;
  font-family: 'Ysabeau Office', sans-serif;
}

@media only screen and (max-width: 1000px) {
  p {
    margin: 20px;
  }
}

a {
  color: #efd4c9;
  font-size: 30px;
  margin: 40px 0;
  display: block;
  font-family: 'Ysabeau Office', sans-serif;
}
</style>
