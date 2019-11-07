import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/formsdemo",
    component: () => import("../components/FormsDemo.vue")
  },
  {
    path: "/about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/ancient",
    component: () => import("../views/Ancient.vue")
  },
  {
    path: "/roman",
    component: () => import("../views/Roman.vue")
  },
  {
    path: "/greek",
    component: () => import("../views/Greek.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
