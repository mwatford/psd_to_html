<template>
  <nav class="navigation">
    <h1 class="navigation__title" @click="toggleNav">HOME</h1>
    <div class="navigation__menu">
      <h2 class="navigation__link">SIGN IN</h2>
      <h2 class="navigation__link">SIGN UP</h2>
      <h2 class="navigation__link">ABOUT</h2>
    </div>
  </nav>
</template>

<script>
import { toggleNav } from "../mixins.js";
export default {
  mixins: [toggleNav]
};
</script>

<style lang="scss" scoped>
* {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.navigation {
  color: #505050;
  background-color: #88f169;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 1;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  &__title {
  }
  &__menu {
  }
  &__link {
    margin-left: 1em;
  }
}
</style>
