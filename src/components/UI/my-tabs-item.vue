<template>
  <div class="my-tabs-item" v-show="active == name">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
const props = defineProps({
  label: {
    type: [String, Number],
    default: "tabsItem",
  },
  name: {
    type: [String, Number],
  },
});

const active = inject("activeName");
</script>

<style scoped lang="scss">
@import "../../assets/css/vars.scss";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.active {
  background-color: $tabs-active-color;
}
.my-tabs {
  height: 600px;
  // width: 800px;
  border: 1px solid $tabs-border-color;
  .tabs-ul {
    display: flex;
    border-bottom: 1px solid $tabs-border-color;
    .tabs-li {
      width: calc(15px + 8vw);
      height: 60px;
      border-right: 1px solid $tabs-border-color;
      text-align: center;
      line-height: 60px;
      user-select: none;
      cursor: pointer;
    }
  }
  .tabs-main {
    height: 100%;
  }
}
</style>
