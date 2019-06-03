<template>
  <header class="banner">
    <div class="overlay"></div>
    <div class="toolbar">
      <h2 class="toolbar__title" @click="toggleNav">MoGo</h2>
      <nav class="navigation">
        <h3 class="navigation__route">ABOUT</h3>
        <h3 class="navigation__route">SERVICE</h3>
        <h3 class="navigation__route">WORK</h3>
        <h3 class="navigation__route">BLOG</h3>
        <h3 class="navigation__route">CONTACT</h3>
        <font-awesome-icon :icon="['fas', 'shopping-cart']" class="navigation__icon"></font-awesome-icon>
        <font-awesome-icon :icon="['fas', 'search']" class="navigation__icon"></font-awesome-icon>
      </nav>
    </div>
    <div class="banner__greetings">
      <h3>Creative Template</h3>
      <h1>WELCOME TO MOGO</h1>
      <hr>
      <button>LEARN MORE</button>
    </div>
    <div class="banner__smthWrapper">
      <div class="banner__smth">
        <progress value="30" max="100"></progress>
        <h3>01</h3>
        <h4>INTRO</h4>
      </div>
      <div class="banner__smth">
        <progress value="0" max="100"></progress>
        <h3>02</h3>
        <h4>WORK</h4>
      </div>
      <div class="banner__smth">
        <progress value="0" max="100"></progress>
        <h3>03</h3>
        <h4>ABOUT</h4>
      </div>
      <div class="banner__smth">
        <progress value="0" max="100"></progress>
        <h3>04</h3>
        <h4>CONTACTS</h4>
      </div>
    </div>
  </header>
</template>

<script>
import { toggleNav } from "../mixins";
export default {
  mixins: [toggleNav]
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:700|Dancing+Script&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
}
.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(#ff6c78e8, #ffd970e7);
  z-index: -1;
}
.banner {
  width: 100%;
  position: relative;
  color: #fff;
  background: url("./assets/banner.png");
  background-size: cover;
  background-position-y: 60%;
  padding: 0 20%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;

  &__greetings {
    align-items: center;
    flex-direction: column;
    min-height: 420px;
    justify-content: space-around;
    width: 50%;
    margin: 0 auto;
    text-align: center;
    font-size: 50px;

    & h3 {
      font-size: 36px;
      font-family: "Dancing Script", cursive;
    }

    & h1 {
      font-family: "Montserrat", sans-serif;
      line-height: 1;
    }

    & hr {
      width: 60px;
      border: 0;
      border-top: 3px solid #fff;
      margin: 20px 0;
    }

    & button {
      background: transparent;
      border: 3px solid #fff;
      border-radius: 3px;
      width: 160px;
      height: 40px;
      font-size: 14px;
      color: #fff;
      font-weight: bold;
      justify-content: center;
      align-items: center;

      &:hover {
        background: #ffffff2d;
      }
    }
  }

  &__smthWrapper {
    width: 100%;
    justify-content: space-between;
  }

  &__smth {
    position: relative;
    width: 100%;
    margin: 15px 10px;
    align-items: flex-end;

    & h3 {
      margin-right: 5px;
    }

    & progress {
      position: absolute;
      bottom: 200%;
      width: 100%;
      height: 3px;
      border: none;
      background: #fff;
    }
    & progress[value]::-moz-progress-bar,
    & progress[value]::-webkit-progress-bar {
      background: #ff6c78;
      box-shadow: 0 0 8px 0px #ff6c78;
    }
  }
}
.toolbar {
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  &__title:hover {
    cursor: pointer;
    color: #ffd35b;
  }
}
.navigation {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  background: none;
  color: #fff;

  &__route,
  &__icon {
    cursor: pointer;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      display: none;
      top: 120%;
      height: 3px;
      width: 100%;
      background: #ffd35b;
    }

    &:hover {
      color: #ffd35b;
    }

    &:hover::after {
      display: flex;
    }
  }
}
</style>
