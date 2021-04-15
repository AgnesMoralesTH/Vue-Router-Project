import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Brazil from "../views/Brazil"
import Jamaica from "../views/Jamaica"
import Panama from "../views/Panama"
import Hawaii from "../views/Hawaii"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/brazil",
    name:"brazil",
    component: Brazil
  },
  {
    path: "/panama",
  name: "panama",
  component: Panama
  },
  {
    path: '/hawaii',
    name: "hawaii",
    component: Hawaii
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: Jamaica

  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
