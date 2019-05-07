<template>
  <div class="realEstate">
    <appNav></appNav>
    <sideBar></sideBar>
    <banner></banner>
  </div>
</template>

<script>
import appNav from "./appNav.vue";
import banner from "./banner.vue";
import sideBar from "./sideBar.vue";
export default {
  components: {
    appNav,
    banner,
    sideBar
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Iceland");
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
</style>
