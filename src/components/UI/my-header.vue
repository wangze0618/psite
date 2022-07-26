<template>
  <header class="container-fluid">
    <ul class="container item-ul">
      <li>
        <router-link to="/">HOME</router-link>
      </li>
      <li>
        <router-link to="/about">ABOUT</router-link>
      </li>
      <li>
        <router-link to="/story">STORY</router-link>
      </li>
      <li>
        <router-link to="/dream">DREAM</router-link>
      </li>
      <li>
        <router-link to="/text">TEXT</router-link>
      </li>
      <li>
        <router-link to="/login">LOGIN</router-link>
      </li>
    </ul>
    <h2 class="h2">小泽君😄's 测试</h2>
    <details>
      <summary>
        <span></span>
        <span></span>
        <span></span>
      </summary>
    </details>
    <nav class="nav">
      <ul>
        <li>
          <router-link to="/">HOME</router-link>
        </li>
        <li>
          <router-link to="/about">ABOUT</router-link>
        </li>
        <li>
          <router-link to="/story">STORY</router-link>
        </li>
        <li>
          <router-link to="/dream">DREAM</router-link>
        </li>
        <li>
          <router-link to="/text">TEXT</router-link>
        </li>
        <li>
          <router-link to="/login">LOGIN</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped lang="scss">
.router-link-exact-active {
  color: rgb(88, 255, 127) !important;
}
header {
  user-select: none;
  font-family: Segoe UI Light, Microsoft YaHei, Arial, Helvetica, sans-serif;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  z-index: 999;
  .h2 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    margin-bottom: 0;
    @media (min-width: 768px) {
      display: none;
    }
  }
  .item-ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin-bottom: 0;
    @media (max-width: 768px) {
      display: none;
    }
    li {
      padding: 0;
      margin: 0;

      a {
        padding: 0 10px;
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
  .nav {
    position: absolute;
    height: 0px;
    left: 0;
    top: 100%;
    width: 100%;
    background-color: rgba($color: #000000, $alpha: 1);
    transition: all 0.5s;
    overflow: hidden;
    ul {
      display: flex;
      list-style: none;
      flex-direction: column;
      align-items: center;
      width: 100vw;
      li {
        width: 100vw;
        border-bottom: 1px solid #555;
        padding: 20px 0px;
        a {
          color: #ffffff;
          text-decoration: none;
        }
      }
    }
  }
  details[open] + .nav {
    height: calc(100vh - 100%);
  }
  // &:has(details[open]) {
  //   background-color: aqua !important;
  // }
  details {
    width: 30px;
    height: 30px;
    margin-left: auto;
    position: relative;
    user-select: none;
    list-style: none;
    list-style-type: none;
    @media (min-width: 768px) {
      display: none;
    }
    &[open] {
      summary {
        span {
          &:nth-child(1) {
            top: calc(50% - 1px);
            transform: rotate(-45deg);
          }
          &:nth-child(2) {
            // display: none;
            opacity: 0;
          }
          &:nth-child(3) {
            transform: rotate(45deg);
            bottom: calc(50% - 1px);
          }
        }
      }
    }
    summary {
      position: relative;
      list-style: none;
      list-style-type: none;
      &::-webkit-details-marker {
        display: none;
      }
      // width: 30px;
      height: 30px;
      span {
        position: absolute;
        width: 30px;
        height: 2px;
        background-color: #ffffff;
        transition: all 0.5s;

        &:nth-child(1) {
          top: 0;
        }
        &:nth-child(2) {
          top: calc(50% - 1px);
        }
        &:nth-child(3) {
          bottom: 0;
        }
      }
    }
  }
}
</style>
