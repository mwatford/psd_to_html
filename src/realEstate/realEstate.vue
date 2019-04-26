<template>
  <div class="realEstate">
    <appNav></appNav>
    <div class="banner">
      <h1 class="banner__title">Affordable Homes</h1>
      <div>
        <input class="banner__search" type="text"/>
        <input type="submit" value="Search" class="banner__submit">
      </div>
      <h2 class="banner__subtitle">houses you can afford</h2>
    </div>
  </div>
</template>

<script>
import appNav from "./appNav.vue";
export default {
  components: {
    appNav
  }
};
</script>

<style lang="scss" scoped>
* {
  display: flex;
  justify-content: center;
  align-content: center;
  user-select: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.realEstate {
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
}
.banner {
  background: url("./assets/banner.jpg");
  background-size: cover;
  background-blend-mode: color-burn;
  background-color: rgba(103, 81, 53, 0.52);
  background-position: 50% 70%;
  color: white;
  height: calc(100vh - 80px);
  flex-direction: column;
  justify-content: space-around;

  &__title {
    font-size: 114px;
    font-family: 'AR BONNIE', sans-serif;
  }
  &__search {
    height: 45px;
    max-width: 600px;
    width: 60%;
    border: 2px solid #88F169;
    background: rgba(255, 255,255, 0.7);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 0 1em;
    font-size: 20px;
  }
  &__submit {
    height: 45px;
    width: 120px;
    background: #88F169;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: none;
  }
}
</style>
