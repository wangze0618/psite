<template>
  <div class="login container-fluid">
    <div class="row">
      <form class="form col-md-6 col-lg-5 col-xl-4 col-xxl-3">
        <div class="mb-5">
          <label for="exampleInputEmail1" class="form-label">Username</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-5">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-2 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" class="col-12 btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: calc(100vh - 70px);
  background: url("@/assets/img/computer.jpg") no-repeat center;
  background-size: cover;
  object-fit: contain;
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
}
</style>
