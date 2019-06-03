import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routes from './routes.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faAngleDown,
  faSearch,
  faShoppingCart,
  faUsers,
  faCameraRetro,
  faRulerCombined,
  faMagic,
  faExpand,
  faBookOpen,
  faCode,
  faComments
} from '@fortawesome/free-solid-svg-icons';

import { faFacebookF, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faCoffee,
  faAngleLeft,
  faAngleRight,
  faSearch,
  faShoppingCart,
  faUsers,
  faCameraRetro,
  faRulerCombined,
  faMagic,
  faExpand,
  faBookOpen,
  faCode,
  faComments,
  faAngleDown,
  faAngleUp,
  faFacebookF,
  faTwitter,
  faPinterest,
  faInstagram
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

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
