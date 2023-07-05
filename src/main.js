import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

import IndexPage from './IndexPage.vue';
import XingYingMain from './xingying/MainPage.vue';
import XYCh1 from './xingying/ChapterOne.vue';
import XYCh2 from './xingying/ChapterTwo.vue';
import XYCh3 from './xingying/ChapterThree.vue';
import XYCh4 from './xingying/ChapterFour.vue';

const routes = [
    { path: '/', component: IndexPage },
    { path: '/xingying', component: XingYingMain },
    { path: '/xingying/ch001', component: XYCh1 },
    { path: '/xingying/ch002', component: XYCh2 },
    { path: '/xingying/ch003', component: XYCh3 },
    { path: '/xingying/ch004', component: XYCh4 }
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
