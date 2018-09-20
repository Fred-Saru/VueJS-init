import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(savedPosition);
        }, 1000);
      });
    }
    if (to.hash) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ selector: to.hash });
        }, 1000);
      });
    }
  }
});

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
