import Vue from 'vue';
import App from './app.vue';
import { router } from './routes';

import './scss/main.scss';

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
