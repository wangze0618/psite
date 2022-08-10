<template>
  <div class="container text">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel id ratione,
      dicta aliquid perferendis excepturi commodi totam aspernatur impedit fugit
      sequi eius laboriosam eveniet voluptatibus dignissimos quasi illum velit
      cum?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel id ratione,
      dicta aliquid perferendis excepturi commodi totam aspernatur impedit fugit
      sequi eius laboriosam eveniet voluptatibus dignissimos quasi illum velit
      cum?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel id ratione,
      dicta aliquid perferendis excepturi commodi totam aspernatur impedit fugit
      sequi eius laboriosam eveniet voluptatibus dignissimos quasi illum velit
      cum?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel id ratione,
      dicta aliquid perferendis excepturi commodi totam aspernatur impedit fugit
      sequi eius laboriosam eveniet voluptatibus dignissimos quasi illum velit
      cum?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel id ratione,
      dicta aliquid perferendis excepturi commodi totam aspernatur impedit fugit
      sequi eius laboriosam eveniet voluptatibus dignissimos quasi illum velit
      cum?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel id ratione,
      dicta aliquid perferendis excepturi commodi totam aspernatur impedit fugit
      sequi eius laboriosam eveniet voluptatibus dignissimos quasi illum velit
      cum?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel id ratione,
      dicta aliquid perferendis excepturi commodi totam aspernatur impedit fugit
      sequi eius laboriosam eveniet voluptatibus dignissimos quasi illum velit
      cum?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel id ratione,
      dicta aliquid perferendis excepturi commodi totam aspernatur impedit fugit
      sequi eius laboriosam eveniet voluptatibus dignissimos quasi illum velit
      cum?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel id ratione,
      dicta aliquid perferendis excepturi commodi totam aspernatur impedit fugit
      sequi eius laboriosam eveniet voluptatibus dignissimos quasi illum velit
      cum?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel id ratione,
      dicta aliquid perferendis excepturi commodi totam aspernatur impedit fugit
      sequi eius laboriosam eveniet voluptatibus dignissimos quasi illum velit
      cum?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel id ratione,
      dicta aliquid perferendis excepturi commodi totam aspernatur impedit fugit
      sequi eius laboriosam eveniet voluptatibus dignissimos quasi illum velit
      cum?
    </p>
    <div class="row" ref="imgList">
      <!-- <div v-for="item in 8" class="col-12 col-md-6 col-lg-3 mb-2">
        <img ref="imgList" src="../../assets/img/1.gif" alt="" srcset="" />
      </div> -->
      <div v-for="item in num" class="col-12 mb-2">
        <img v-lazyload="imgUrl" alt="" srcset="" />
      </div>
      <MyInfinite
        :loading="infiLoading"
        :finished="infiFinished"
        @infinite="infiniteLoading"
      ></MyInfinite>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import imgUrl from "../../assets/img/alphen.jpg";
import MyInfinite from "@/components/UI/my-infinite.vue";
const num = ref(8);
const infiLoading = ref(false);
const infiFinished = ref(false);
// 组件内的局部指令
// const vLazyload = {
//   mounted: (el, binding) => {
//     // JS实现
//     const observer = new IntersectionObserver(
//       ([{ isIntersecting }]) => {
//         console.log(isIntersecting);
//         if (isIntersecting) {
//           observer.unobserve(el);
//           el.src = binding.value;
//         }
//       },
//       {
//         // 阈值 0-1，相当于进入元素位置的多少，然后显示图片
//         threshold: 0.5,
//       }
//     );
//     observer.observe(el);

//     // 使用VueUse实现
//     // const { stop } = useIntersectionObserver(
//     //   el,
//     //   ([{ isIntersecting }], observerElement) => {
//     //     if (isIntersecting) {
//     //       stop();
//     //       el.src = binding.value;
//     //     }
//     //   },
//     //   {
//     //     threshold: 0,
//     //   }
//     // );
//   },
// };

const infiniteLoading = () => {
  infiLoading.value = true;
  if (num.value >= 30) {
    infiFinished.value = true;
  } else {
    num.value += 2;
  }
  infiLoading.value = false;
};
</script>

<style scoped lang="scss">
.text {
  margin-top: 70px;
}
p {
  height: 200px;
  background-color: pink;
}
img {
  width: 100%;
  height: 500px;
  // max-width: 200px;
}
</style>
