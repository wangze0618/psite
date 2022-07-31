import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/views/Layout.vue";
import Home from "@/views/home/index.vue";
import About from "@/views/about/index.vue";
import Login from "@/views/login/index.vue";
import Text from "@/views/text/index.vue";
import Story from "@/views/story/index.vue";
import Dream from "@/views/dream/index.vue";
import store from "@/store";
import Message from "@/components/TOOLS/Message";
import my404 from "@/components/UI/my-404";

const whiteList = ["/login"];
// const whiteList = ["/login", "/", "/about", "/text", "/dream", "/story"];
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
      {
        path: "/text",
        component: Text,
      },
      {
        path: "/dream",
        component: Dream,
      },
      {
        path: "/story",
        component: Story,
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    component: my404,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  // 有token
  if (store.getters["user/token"]()) {
    if (to.path == "/login") {
      Message({ title: "您已登录！" });
      next("/");
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next("/login");
    }
  }
});

export default router;
