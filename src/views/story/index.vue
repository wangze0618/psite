<template>
  <div class="story">开发中</div>

  <!-- 使用分隔符 -->
  <MyBread sp="/">
    <MyBreadItem to="/about">aaa</MyBreadItem>
    <MyBreadItem to="/text">bbb</MyBreadItem>
    <template v-for="i in 5">
      <MyBreadItem to="/text">{{ i }}</MyBreadItem>
    </template>
  </MyBread>

  <!-- 使用icon -->
  <MyBread :icon="Right">
    <MyBreadItem class="my-bread-item" to="/about">aaa</MyBreadItem>
    <MyBreadItem to="/text">bbb</MyBreadItem>
    <template v-for="i in 5">
      <MyBreadItem to="/text">{{ i }}</MyBreadItem>
    </template>
  </MyBread>

  <Ts></Ts>
</template>

<script setup>
import { ref } from "vue";
import MyBread from "@/components/UI/my-bread.vue";
import MyBreadItem from "@/components/UI/my-bread-item.vue";
import { Right } from "@icon-park/vue-next";
import Ts from "@/components/TOOLS/ts.vue";
</script>

<style scoped lang="scss">
.story {
  margin: 70px;
}
:deep(.my-bread-item) {
  font-size: 20px;
  a {
    color: rgb(27, 27, 27);
  }
  span {
    font-size: 30px !important;
  }
}
</style>
