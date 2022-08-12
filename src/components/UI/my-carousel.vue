<template>
  <swiper
    :modules="modules"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :speed="800"
    navigation
  >
    <swiper-slide v-for="(item, index) in imgList">
      <img :src="item.url" alt=""
    /></swiper-slide>
  </swiper>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue"; // swiper所需组件
// 这是分页器和对应方法，swiper好像在6的时候就已经分离了分页器和一些其他工具
import { Autoplay, Pagination, Navigation, Zoom } from "swiper";
// 对应css 如果使用less或者css只需要把scss改为对应的即可
import "swiper/scss";
import "swiper/scss/pagination"; // 轮播图底面的小圆点
import "swiper/scss/navigation"; // 轮播图两边的左右箭头
import "swiper/scss/scrollbar"; // 轮播图的滚动条
import "swiper/scss/autoplay"; // 轮播图的自动播放

const props = defineProps({
  imgList: {
    type: Array,
    default: [],
    required: true,
  },
});

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = (e) => {
  // swiper切换的时候执行的方法
  console.log("slide change", e.activeIndex);
};
// setup语法糖只需要这样创建一个变量就可以正常使用分页器和对应功能，如果没有这个数组则无法使用对应功能
const modules = [Zoom, Autoplay, Navigation, Pagination];
</script>
<style lang="scss" scoped>
.swiper {
  user-select: none;
  width: 100%;
  height: 100%;
  :deep(.swiper-button-prev) {
    color: rgba(255, 255, 255, 0.9);
    left: 30px;
  }
  :deep(.swiper-button-next) {
    color: rgba(255, 255, 255, 0.9);
    right: 30px;
  }
  :deep(.swiper-pagination) {
    span {
      border-radius: 5px;
      width: 30px;
      height: 15px;
      background: aliceblue;
    }
  }
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
