<template>
  <!-- header -->
  <MyHeader></MyHeader>
  <!-- 主体区域 -->
  <router-view></router-view>
  <!-- footer -->
  <MyFooter></MyFooter>
</template>

<script setup>
import { ref } from "vue";
import MyHeader from "@/components/UI/my-header.vue";
import MyFooter from "@/components/UI/my-footer.vue";
</script>

<style scoped lang="scss"></style>
