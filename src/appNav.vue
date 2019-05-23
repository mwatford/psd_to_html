<template>
  <nav class="nav">
    <div class="nav__hide" @click="toggleNav">HIDE</div>
    <router-link v-for="project in routes" :key="project.name" :to="project.path">{{ project.name }}</router-link>
  </nav>
</template>

<script>
import routes from "./routes.js";
import { toggleNav } from "./mixins.js";
export default {
  mixins: [toggleNav],
  data() {
    return {
      routes
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
}
.nav {
  font-family: "Mina", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background: #242424;
  justify-content: flex-start;
  align-items: flex-start;
  // border-right: 2px solid black;
  z-index: 2;
  color: #fff;

  &__hide {
    cursor: pointer;
    width: 100%;
    height: 100px;
    background: #464646;
    font-size: 24px;
    transition: background-color 0.15s ease;

    &:hover {
      background: #000;
    }
  }

  & a {
    text-decoration: none;
    margin: 5px 0 0 2em;
    font-size: 20px;
    font-weight: bold;
    
    &:active,
    &:visited {
      color: inherit;
    }
    &:hover {
      color: #b32929;
    }
    &.router-link-exact-active {
      color: #b32929;
    }
  }
}
</style>
