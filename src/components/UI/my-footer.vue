<template>
  <div class="box-footer">
    <div class="container">
      <div class="icon-list">
        <div class="row">
          <div class="col-md-4 icon-main">
            <MyIcon class="icon-item">
              <Github size="100" class="icon-github" color="red"></Github>
            </MyIcon>
          </div>
          <div class="col-md-4 icon-main">
            <MyIcon class="icon-item">
              <Smile size="100" class="icon-github" color="red"></Smile>
            </MyIcon>
          </div>
          <div class="col-md-4 icon-main">
            <MyIcon class="icon-item">
              <Wechat size="100" class="icon-github" color="red"></Wechat>
            </MyIcon>
          </div>
        </div>
      </div>
      <!-- <p style="text-align: center; color: #888">{{ sentence }}</p> -->
      <p style="text-align: center; color: #888">
        世间无限丹青手，一片伤心画不成。——高蟾
      </p>
      <h3>wangze0618</h3>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  Github,
  SmilingFaceWithSquintingEyes as Smile,
  Wechat,
} from "@icon-park/vue-next";
import MyIcon from "./my-icon.vue";
</script>

<style scoped lang="scss">
h3 {
  text-align: center;
  padding: 5px 0;
  color: #999;
}
.icon-list {
  padding: 20px;
  .row {
    height: 100%;
    .icon-main {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.icon-github {
  margin: 10px 5px;
  color: #7a7a7a;
}
.box-footer {
  background-color: rgb(222, 222, 222);
  backdrop-filter: blur(5px);
  .container {
    height: 100%;
  }
}
</style>
