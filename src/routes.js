import Marble from './marble/Marble.vue';
import realEstate from './realEstate/realEstate.vue';
import Home from './Home.vue'
import Mogo from './mogo/Mogo.vue'

//add new routes to the end
export default [
  { path: '/', component: Home, name: 'Home' },
  { path: '/marble', component: Marble, name: 'Marble' },
  { path: '/real-estate', component: realEstate, name: 'Real Estate' },
  { path: '/mogo', component: Mogo, name: 'MoGo' },
];
