require('./bootstrap');
import { createApp } from 'vue'
// window.Vue = vue;

import App from './components/App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import { routes } from './routes';

// Vue.use(createRouter);
// Vue.use(VueAxios, axios);

const router =  createRouter({
    history: createWebHistory(),
    routes: routes
})

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
// app.use(store)

