import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/views/Layout.vue";
import Home from "@/views/home/index.vue";
import About from "@/views/about/index.vue";
import Login from "@/views/login/index.vue";

const routes = [
  // 一级路由
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "/about",
        component: About,
      },
      {
        path: "/login",
        component: Login,
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((from, to, next) => {
  console.log(from);
  console.log("---");
  console.log(to);
  next();
});

export default router;
