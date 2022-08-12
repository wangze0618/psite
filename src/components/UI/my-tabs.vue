<template>
  <div class="my-tabs">
    <!-- 顶部链接区 -->
    <ul class="tabs-ul">
      <li
        class="tabs-li"
        :class="[title.name == activeName ? 'active' : '']"
        @click="cuIndex(title, index)"
        v-for="(title, index) in titleList"
      >
        {{ title.label }}
      </li>
    </ul>
    <!-- 内容区 -->
    <slot></slot>
  </div>
</template>

<script>
import { ref, provide } from "vue";

export default {
  props: {
    activeName: {
      type: [String, Number, Object],
    },
  },
  setup(props, { emit, slots }) {
    const slotList = slots.default();
    const dynaArr = [];
    const active = ref(props.activeName);

    slotList.forEach((item, index) => {
      if (item.type["__name"] == "my-tabs-item") {
        dynaArr.push(item);
      } else {
        item.children.forEach((item, index) => {
          dynaArr.push(item);
        });
      }
    });
    console.log(dynaArr);

    // 标题列表
    const titleList = [];
    dynaArr.forEach((item) => {
      titleList.push({ name: item.props.name, label: item.props.label });
    });
    const cuIndex = (title, index) => {
      active.value = title.name;
      emit("tabClick", { ...title, index });
      emit("update:activeName", title.name);
    };
    provide("activeName", active);
    return {
      titleList,
      cuIndex,
      dynaArr,
    };
  },
};
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
