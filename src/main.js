import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routes from './routes.js';

Vue.use(VueRouter);
Vue.use(VueResource);

window.eventBus = new Vue();

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
