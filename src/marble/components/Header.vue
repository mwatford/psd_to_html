<template>
  <nav>
    <div class="navbar">
      <div id="title" class="navbar__title" @click="toggleNav">marble</div>
      <div class="navbar__menu">
        <div class="navbar__menuItems">
          <a v-for="(item, index) in menu" :key="index" :to="item.path">{{ item.value }}</a>
        </div>
        <div id="menuButton" class="navbar__menuDropButton">MENU</div>
      </div>
    </div>
  </nav>
</template>

<script>
import { toggleNav } from "../../mixins.js";
export default {
  mixins: [toggleNav],
  data() {
    return {
      menu: [
        { value: "home", path: "/" },
        { value: "about", path: "/about" },
        { value: "journal", path: "/journal" },
        { value: "service", path: "/service" },
        { value: "features", path: "/#" },
        { value: "contact", path: "/#" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$text-primary: #4e4e4e;
$text-secondary: #1abb9c;
a {
  @media (max-width: 40em) {
    display: flex;
    background-color: #e5e5e5;
    width: 25vw;
    height: 5vw;
    border-bottom: 1px solid $text-primary;
    justify-content: start;
    align-items: center;
    z-index: 2;

    &:hover,
    &:active {
      background-color: #cecece;
    }
  }

  &:hover {
    color: $text-secondary;
    cursor: pointer;
  }

  padding: 0 5px;
  text-decoration: none;
  color: $text-primary;
  display: inline-block;
}
a.a-exact-active {
  text-decoration: none;
  color: $text-secondary;
}

nav {
  @media (max-width: 40em) {
    position: sticky;
    top: 0;
    left: 0;
  }
  width: 100%;
}

.navbar {
  height: 100px;
  padding: 0 13vw;
  display: flex;
  grid-template-rows: 1fr;
  grid-template-columns: 215fr repeat(3, 390fr) 215fr;
  align-items: center;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;

  &__title {
    grid-column: 2;
    font-weight: 600;
    font-size: 28px;
    margin: 0 auto 0 0;

    &:hover {
      transition: none;
      color: $text-secondary;
      cursor: pointer;
    }
  }

  &__menu {
    @media (max-width: 40em) {
      &:hover .navbar__menuItems {
        display: block;
        position: absolute;
        top: 100px;
      }
      &:hover .navbar__menuDropButton,
      &:active .navbar__menuDropButton {
        background-color: #cecece;
        color: $text-secondary;
      }
    }

    grid-column: 3 / span 2;
    display: flex;
    justify-content: end;
    height: 100%;
  }

  &__menuDropButton {
    @media (max-width: 40em) {
      display: flex;
    }

    justify-content: center;
    align-items: center;
    display: none;
    font-weight: 600;
    height: 100%;
    width: 30%;

    &:hover {
      background-color: #cecece;
      cursor: pointer;
      color: $text-secondary;
    }
  }

  &__menuItems {
    @media (max-width: 40em) {
      display: none;
      position: absolute;
      bottom: 0;
      z-index: 1;
    }
    align-items: center;
    display: flex;
    justify-content: flex-end;
    font-weight: 600;
    height: 100%;
  }
}
</style>

