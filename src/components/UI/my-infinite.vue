<template>
  <div class="my-infinite" ref="target">
    <div v-if="loading" class="loading">
      <h2>加载中...</h2>
    </div>
    <div v-if="finished" class="finished">
      <h2>没有更多了！</h2>
    </div>
  </div>
</template>

<script setup>
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";
const target = ref(null);
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  finished: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["infinite"]);
const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    if (props.loading == false && props.finished == false) {
      emit("infinite");
    }
  }
});
</script>

<style scoped lang="scss">
h2 {
  text-align: center;
}
</style>
