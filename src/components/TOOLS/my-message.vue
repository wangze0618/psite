<template>
  <transition name="box" mode="out-in">
    <div class="main" v-if="show">
      <div class="message">
        <div class="second">{{ time }}</div>
        <div class="title">
          {{ title }}
        </div>
        <Close @click="close"></Close>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { Close } from "@icon-park/vue-next";
import { onMounted, onUnmounted, ref } from "vue";
const show = ref(false);
let time = ref(5);
const props = defineProps({
  title: {
    type: String,
    default: "title",
  },
  close: {
    type: Function,
  },
});

let timer = null;
clearInterval(timer);
timer = setInterval(() => {
  time.value--;
}, 1000);
onMounted(() => {
  show.value = true;
});
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped lang="scss">
// .box-enter-from,
// .box-leave-to {
//   top: 20px !important;
//   opacity: 0;
// }
// .box-enter-active,
// .box-leave-active {
//   transition: all 0.5s;
// }
// .box-enter-to,
// .box-leave-from {
//   top: 0 !important;
//   opacity: 1;
// }
.main {
  display: flex;
  justify-content: center;
  .message {
    position: fixed;
    top: 5px;
    text-align: center;
    height: 60px;
    background-color: #f2f2f2;
    box-shadow: 0 0 5px #333;
    z-index: 99999;
    border-radius: 8px;
    display: flex;
    padding: 10px;
    justify-content: end;
    align-items: center;
    @media (max-width: 768px) {
      width: 100%;
    }
    @media (min-width: 769px) {
      width: 600px;
    }
    .title {
      margin: 0 auto;
    }
  }
}
</style>
