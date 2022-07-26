<template>
  <div class="home">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/img/alphen.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption">
            <h5>就要大四了，有点小紧张</h5>
            <p>开学就要考虑驾照，找工作，时间也有点紧张</p>
          </div>
        </div>

        <div class="carousel-item">
          <img
            src="@/assets/img/computer.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption">
            <h5>加油吧ヾ(◍°∇°◍)ﾉﾞ</h5>
            <p>个人测试 随便写写玩的</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped lang="scss">
.carousel {
  @media (max-width: 768px) {
    height: 500px;
    .carousel-inner {
      height: 500px;
      .carousel-item {
        height: 100%;
        .carousel-caption {
        }
        img {
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .carousel-indicators {
    bottom: 7px;
    li {
      height: 15px;
      width: 15px;
      border: none;
      border-radius: 155px;
    }
  }
}
</style>
