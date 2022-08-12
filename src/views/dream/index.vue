<template>
  <div class="dream">
    开发中

    <MyBread sp="/">
      <MyBreadItem to="/">home</MyBreadItem>
      <MyBreadItem to="/about">dream</MyBreadItem>
      <MyBreadItem>text</MyBreadItem>
    </MyBread>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MyBread from "@/components/UI/my-bread.vue";
import MyBreadItem from "@/components/UI/my-bread-item.vue";
</script>

<style scoped lang="scss">
.dream {
  margin: 70px;
}
</style>
