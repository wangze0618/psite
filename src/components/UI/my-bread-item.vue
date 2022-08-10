<template>
  <div class="my-bread-item">
    <RouterLink v-if="to" :to="to"><slot></slot></RouterLink>
    <span v-else><slot></slot></span>
  </div>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.my-bread-item {
  display: inline-block;
  a {
    text-decoration: none;
    color: black;
  }
  span {
    color: gray;
    font-size: 25px !important;
  }
}
</style>
