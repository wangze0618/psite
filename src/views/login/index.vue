<template>
  <div class="login container-fluid">
    <LoginForm></LoginForm>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LoginForm from "./components/login-form.vue";
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: calc(100vh - 70px);
  background: url("@/assets/img/computer.jpg") no-repeat center;
  background-size: cover;
  object-fit: contain;
}
</style>
