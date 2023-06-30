import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

import IndexPage from './IndexPage.vue';
import XingYingMain from './xingying/MainPage.vue';
import XYCh1 from './xingying/ChapterOne.vue';
import XYCh2 from './xingying/ChapterTwo.vue';

const routes = [
    { path: '/', component: IndexPage },
    { path: '/xingying', component: XingYingMain },
    { path: '/xingying/ch001', component: XYCh1 },
    { path: '/xingying/ch002', component: XYCh2 }
];

const base = process.env.NODE_ENV === 'production'
    ? '/graphic-novels/'
    : '/'

const router = createRouter({
    history: createWebHistory(base),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app')
