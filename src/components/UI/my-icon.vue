<template>
  <div class="box-icon-main">
    <div class="box-icon" @click="show">
      <slot></slot>
    </div>
    <transition name="fade" mode="out-in">
      <div v-show="isShow" class="layer-box"></div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isShow = ref(false);
const show = () => {
  isShow.value = !isShow.value;
};
</script>

<style scoped lang="scss">
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  margin-top: -30px;
}
.fade-enter-avtive,
.fade-leave-active {
}
.fade-enter-to,
.fade-leave-from {
  margin-top: 5px;
  opacity: 1;
}
.box-icon {
  padding-bottom: 5px;
  width: 100px;
}
.layer-box {
  position: relative;
  width: 120px;
  margin-left: -8px;
  height: 120px;
  background-color: #fff;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;
  &::after {
    position: absolute;
    top: -16px;
    left: calc(50% - 4px);
    content: "";
    display: block;
    border: 8px solid;
    border-color: transparent #fff transparent transparent;
    transform: rotate(90deg);
  }
}
div:nth-child(1) > div > div.layer-box {
  background: url("@/assets/img/qq.png") no-repeat center;
  background-size: 100%;
}
div:nth-child(2) > div > div.layer-box {
  display: none;
}
div:nth-child(3) > div > div.layer-box {
  background: url("@/assets/img/wechat.png") no-repeat center;
  background-size: 100%;
}
</style>
