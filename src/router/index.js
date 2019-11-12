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
    path: "/corinthianorder",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CorinthianOrder.vue")
  },
  {
    path: "/ionicorder",
    component: () => import("../views/IonicOrder.vue")
  },
  {
    path: "/doricorder",
    component: () => import("../views/DoricOrder.vue")
  },
  {
    path: "/greekorders",
    component: () => import("../views/GreekOrders.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
