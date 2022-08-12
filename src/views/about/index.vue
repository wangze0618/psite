<template>
  <div class="container about">
    <!-- <div class="row">
      <div class="col-lg-12">
        <MyCarousel :imgList="imgList"> </MyCarousel>
      </div>
    </div> -->
    <MyTabs v-model:activeName="activeName" @tabClick="tabclc($event)">
      <MyTabsItem label="hh" name="first">123</MyTabsItem>
      <MyTabsItem label="home" name="second">
        <img v-lazyload="imgUrl" alt=""
      /></MyTabsItem>
    </MyTabs>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Message from "@/components/TOOLS/Message";
import My404 from "../../components/UI/my-404.vue";
import MyCarousel from "@/components/UI/my-carousel.vue";
import MyTabs from "@/components/UI/my-tabs.vue";
import MyTabsItem from "@/components/UI/my-tabs-item.vue";
import imgUrl from "../../assets/img/3.gif";
const activeName = ref("first");
const imgList = [
  { url: require("../../assets/img/alphen.jpg") },
  { url: require("../../assets/img/computer.jpg") },
];
const tabclc = (data) => {
  console.log(data);
  activeName.value = data;
};
</script>

<style scoped lang="scss">
.about {
  margin-top: 70px;
}
</style>
