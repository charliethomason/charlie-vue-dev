import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Code from './pages/Code.vue';
import Art from './pages/Art.vue';
import Travel from './pages/Travel.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/index', component: Home },
    { path: '/about', component: About },
    { path: '/code', component: Code },
    { path: '/art', component: Art },
    { path: '/travel', component: Travel },
    { path: '*', redirect: '/index' }
  ]
});

export { router };