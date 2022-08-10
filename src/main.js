import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@csstools/normalize.css";
import "@/assets/css/normal.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "@icon-park/vue-next/styles/index.css";
import { useIntersectionObserver } from "@vueuse/core";
import loading from "@/assets/img/1.gif";
const app = createApp(App);

// 全局指令 图片懒加载v-lazyload VueUes的useIntersectionObserver / JS的IntersectionObserver
app.directive("lazyload", {
  mounted(el, binding, vnode, prevVNode) {
    // JS实现
    const { stop } = useIntersectionObserver(
      el, // 监视的元素
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          // isIntersecting 是否进入可视区
          stop();
          el.src = binding.value;
        } else {
          el.src = loading;
        }
      },
      {
        threshold: 0.6,
      }
    );
    // VueUse实现
    // const observer = new IntersectionObserver(
    //   ([{ isIntersecting }]) => {
    //     if (isIntersecting) {
    //       el.src = binding.value;
    //       observer.unobserve(el);
    //     }
    //   },
    //   {
    //     threshold: 0,
    //   }
    // );
    // observer.observe(el);
  },
});

app.use(store).use(router).mount("#app");
