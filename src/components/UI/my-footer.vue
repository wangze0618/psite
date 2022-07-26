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
      <p style="text-align: center; color: #888">{{ sentence }}</p>
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
import { getDailySetence } from "../../../utils/request2";
const sentence = ref("");
onMounted(async () => {
  sentence.value = await getDailySetence("/api/yiyan/index.php");
  sentence.value = sentence.value.replace(/<[^>]+>/g, "");
});
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
  color: #6b6b6b;
}
.box-footer {
  background-color: #dfdfdf;
  .container {
    height: 100%;
  }
}
</style>
