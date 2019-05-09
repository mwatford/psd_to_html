import Marble from './marble/Marble.vue';
import realEstate from './realEstate/realEstate.vue';
import Home from './Home.vue'

export default [
  { path: '/', component: Home, name: 'Home' },
  { path: '/Marble', component: Marble, name: 'Marble' },
  { path: '/real-estate', component: realEstate, name: 'Real Estate' },
];
