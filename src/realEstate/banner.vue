<template>
  <div class="banner">
    <h1 class="banner__title">Affordable Homes</h1>
    <div>
      <input class="banner__search" type="text">
      <input type="submit" value="Search" class="banner__submit">
    </div>
    <h3 class="banner__subtitle">houses you can afford</h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url('/assets/fonts/stylesheet.css');

* {
  display: flex;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
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
  font-size: 60px;
  text-align: center;

  &__title {
    font-size: 114px;
    font-family: 'ar bonnie';
  }
  &__search {
    height: 45px;
    max-width: 600px;
    width: 40%;
    border: 2px solid #88f169;
    background: rgba(255, 255, 255, 0.7);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 0 1em;
    font-size: 20px;
  }
  &__submit {
    color: #505050;
    height: 45px;
    width: 100px;
    background: #88f169;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: none;
    font-family: "Segoe Script", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 22px;
    &:hover {
      color: #000;
    }
  }
}
</style>
