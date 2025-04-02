import { createApp } from 'vue';

import App from 'src/App.vue';
export const app = createApp(App);

import router from 'src/router';
app.use(router);

import { createPinia } from 'pinia';
app.use(createPinia());

import 'src/css/tailwind.css';
app.mount('#app');
