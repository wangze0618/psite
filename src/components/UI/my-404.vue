<template>
  <div class="bg"></div>
  <div class="bx">
    <h3>
      <button type="button" @click="router.push('/')" class="btn btn-primary">
        返回首页
      </button>
    </h3>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped lang="scss">
.bx {
  display: flex;
  justify-content: center;
  h3 {
    button {
      text-align: center;
    }
  }
}
.bg {
  margin: 0 auto;
  max-width: 500px;
  height: 400px;
  background: url("../../assets/img/404.png") no-repeat center;
  background-size: cover;
  object-fit: cover;
}
</style>
