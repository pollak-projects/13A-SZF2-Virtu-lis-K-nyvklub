import { createApp } from 'vue'
import {  createRouter, createWebHistory  } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './pages/Home.vue'


const routes = [
    { path: '/', component: Home},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).mount('#app')




export default router;