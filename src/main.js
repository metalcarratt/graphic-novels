import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

import IndexPage from './IndexPage.vue';
import XingYingMain from './xingying/MainPage.vue';
import XYCh1 from './xingying/ChapterOne.vue';

const routes = [
    { path: '/', component: IndexPage },
    { path: '/xingying', component: XingYingMain },
    { path: '/xingying/ch001', component: XYCh1 }
];

const router = createRouter({
    base: process.env.NODE_ENV === 'production'
        ? '/graphic-novels/'
        : '/',
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app')
