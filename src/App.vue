<template>
  <div id="app">
    <appNav></appNav>
    <router-view/>
  </div>
</template>

<script>
import appNav from './appNav.vue'
export default {
  components: {
    appNav,
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
body {
  background-color: #f7f7f7;
  margin: 0;
  overflow-y: scroll;
  font-family: "Oswald", sans-serif;
  // width: 100vw;
}
#app {
  position: relative;
}
</style>
