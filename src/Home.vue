<template>
  <div class="home">
    <h2>Projects</h2>
    <router-link
      v-for="(route, index) in routes.slice(1)"
      :key="route.name"
      :to="route.path"
      class="project"
      tag="picture"
    >
      <img :src="images[index]" class="project__img" alt>
      <img v-if="imagesMobile[index]" :src="imagesMobile[index]" class="project__imgMobile">
      <div class="project__description">asdasdasd</div>
    </router-link>
  </div>
</template>

<script>
import routes from "./routes.js";

export default {
  data() {
    return {
      routes,
      images: [
        require("./assets/ss.png"),
        require("./assets/realestate.jpg")
      ],
      imagesMobile: [
        require('./assets/marble-mobile.png')
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: flex;
}
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
}
.project {
  cursor: pointer;
  position: relative;
  padding: 0;
  margin: 50px 0;
  justify-content: center;
  border-radius: 6px;
  overflow: hidden;
  width: 95%;
  max-width: 640px;
  box-shadow: 0 0 8px 0 #8b8b8b;

  &:hover &__description {
    display: flex;
    transform: translateY(0%);
  }

  &__img {
    width: 100%;
    object-fit: cover;
  }

  &__imgMobile {
    position: absolute;
    width: 30%;
    // max-height: 500px;
    height: 70%;
    object-fit: cover;
    object-position: 0 0;
    border: 1px solid #4fabcf;
    box-shadow: 0 0 10px 1px #4fabcf;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
  }

  &__description {
    position: absolute;
    bottom: 0;
    background: #4fabcf;
    color: #fff;
    height: 35%;
    width: 100%;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }
}
</style>
