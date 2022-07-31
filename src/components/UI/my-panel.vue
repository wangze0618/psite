<template>
  <div class="panel-box">
    <slot>aa</slot>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped lang="scss">
.panel-box {
  padding: 10px;
  width: 200px;
  // height: 400px;
  background-color: pink;
  slot {
    display: flex;
    flex-direction: column;
  }
}
</style>
