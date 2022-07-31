<template>
  <div class="row">
    <!-- 注册 -->
    <Form
      ref="registTarget"
      v-if="isLogin == false"
      :class="{ registActive: isLogin == false }"
      v-slot="{ errors }"
      :validation-schema="mySchema"
      class="form col-md-6 col-lg-5 col-xl-4 col-xxl-3"
    >
      <h3 class="mt-0" style="text-align: center">注册</h3>
      <div class="mb-4">
        <label for="exampleInputEmail1" class="form-label">Username</label>
        <Field
          type="text"
          class="form-control"
          name="username"
          v-model="registInfo.username"
          :class="{ 'red-border': errors.username }"
        />
        <div v-if="errors.username" class="error">
          <CloseOne></CloseOne>
          {{ errors.username }}
        </div>
      </div>
      <div class="mb-4">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <Field
          type="password"
          v-model="registInfo.password"
          class="form-control"
          name="password"
          :class="{ 'red-border': errors.password }"
        />
        <div v-if="errors.password" class="error">
          <CloseOne></CloseOne>
          {{ errors.password }}
        </div>
      </div>
      <div class="mb-3 form-check">
        <Field
          type="checkbox"
          class="form-check-input"
          v-model="registInfo.checked"
          id="exampleCheck1"
          name="isChecked"
          :class="{ 'red-border': errors.isChecked }"
        />
        <label class="form-check-label" for="exampleCheck1">同意协议</label>
        <div v-if="errors.isChecked" class="error">
          <CloseOne></CloseOne>
          {{ errors.isChecked }}
        </div>
      </div>
      <button
        type="submit"
        @click.prevent="regist()"
        class="col-12 btn btn-primary"
      >
        注册
      </button>
      <a href="javascript:;" @click="isLogin = true" class="account mt-3"
        >已有账号，去登陆</a
      >
    </Form>

    <!-- 登录 -->
    <Form
      ref="loginTarget"
      v-else
      :class="{ loginActive: isLogin == true }"
      v-slot="{ errors }"
      :validation-schema="mySchema"
      class="form col-md-6 col-lg-5 col-xl-4 col-xxl-3"
    >
      <h3 class="mt-0" style="text-align: center">登录</h3>
      <div class="mb-4">
        <label for="exampleInputEmail1" class="form-label">Username</label>
        <Field
          type="text"
          name="username"
          class="form-control"
          v-model="loginInfo.username"
          :class="{ 'red-border': errors.username }"
        />
        <div v-if="errors.username" class="error">
          <CloseOne></CloseOne>
          {{ errors.username }}
        </div>
      </div>
      <div class="mb-4">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <Field
          type="password"
          v-model="loginInfo.password"
          class="form-control"
          name="password"
          :class="{ 'red-border': errors.password }"
        />
        <div v-if="errors.password" class="error">
          <CloseOne></CloseOne>
          {{ errors.password }}
        </div>
      </div>
      <div class="mb-3 form-check">
        <Field
          type="checkbox"
          class="form-check-input"
          v-model="loginInfo.checked"
          name="isChecked"
          id="exampleCheck1"
          :class="{ 'red-border': errors.isChecked }"
        />
        <label class="form-check-label" for="exampleCheck1">同意协议</label>
        <div v-if="errors.isChecked" class="error">
          <CloseOne></CloseOne>
          {{ errors.isChecked }}
        </div>
      </div>
      <button
        type="submit"
        @click.prevent="login()"
        class="col-12 btn btn-primary"
      >
        登录
      </button>
      <a href="javascript:;" @click="isLogin = false" class="account mt-3"
        >快速注册账号</a
      >
    </Form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { Field, Form } from "vee-validate";
import schema from "@/schema/user.js";
import { CloseOne } from "@icon-park/vue-next";
import { userLogin, userRegist } from "../../../../api/user";
import { useStore } from "vuex";
import Message from "@/components/TOOLS/Message";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();
const isLogin = ref(false);
const mySchema = {
  username: schema.username,
  password: schema.password,
  isChecked: schema.isChecked,
};
// 注册表
const registTarget = ref("");
const registInfo = reactive({
  username: "",
  password: "",
  checked: true,
});
const regist = async () => {
  const valid = await registTarget.value.validate();
  if (valid && isLogin.value == false) {
    try {
      const { data } = await userRegist(registInfo);
      Message({ title: data.message });
      isLogin.value = true;
    } catch (error) {}
  }
};

// 登录表
const loginTarget = ref("");
const loginInfo = reactive({
  username: "",
  password: "",
  checked: true,
});
const login = async () => {
  const valid = await loginTarget.value.validate();
  if (valid && isLogin.value) {
    try {
      const { data } = await userLogin(loginInfo);
      if (data.data) {
        store.commit("user/setToken", data.data);
        Message({ title: "跳转至首页" });
        setTimeout(() => {
          router.push("/");
        }, 5000);
      } else {
        return Message({ title: data.message });
      }
    } catch (error) {}
  }
};
</script>

<style scoped lang="scss">
.red-border {
  border: 2px solid #ff4d4d;
}
.error {
  display: flex;
  align-items: center;
  color: #ff4d4d;
  margin-top: 5px;
}
.registActive {
  animation: fadeIn 0.7s;
}
.loginActive {
  animation: fadeOut 0.7s;
}
@keyframes fadeIn {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
.account {
  display: flex;
  justify-content: end;
  color: #fff;
  text-decoration: none;
}
.row {
  height: 100%;
  justify-content: center;
  align-items: center;
}
.form {
  border-radius: 20px;
  padding: 60px 70px;
  color: #fff;
  font-size: 1.2em;
  background-color: rgba($color: #000000, $alpha: 0.4);
  backdrop-filter: blur(20px);
  // box-shadow: 1px 1px 8px 3px rgba(241, 241, 241, 0.3);
}
</style>
