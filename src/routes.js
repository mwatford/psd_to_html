import Vue from "vue";
import VueRouter from "vue-router";
import Marble from "./marble/Marble.vue";
// import realEstate from './realEstate/realEstate.vue';
import Home from "./Home.vue";
import Mogo from "./mogo/Mogo.vue";

Vue.use(VueRouter)

//add new routes to the end
export const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/marble", component: Marble, name: "Marble" },
  // { path: '/real-estate', component: realEstate, name: 'Real Estate' },
  { path: "/mogo", component: Mogo, name: "MoGo" }
];

export const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior (to, from) {
    return { x: 0, y: 0 }
  }
});
