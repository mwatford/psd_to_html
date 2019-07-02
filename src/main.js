import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import { router } from './routes.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import commonHeader from './mogo/commonHeader.vue';
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
  faComments,
  faImage,
  faMapMarkedAlt,
  faEye,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebookF,
  faTwitter,
  faPinterest,
  faInstagram,
  faYoutube,
  faTumblr,
  faCodepen
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faMapMarkedAlt,
  faImage,
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
  faInstagram,
  faEye,
  faComment,
  faYoutube,
  faTumblr,
  faCodepen
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('common-header', commonHeader);

Vue.use(VueResource);

window.eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
