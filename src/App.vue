<template>
  <div id="app" v-cloak>
    <appNav v-if="appState.appNav"></appNav>
    <router-view/>
  </div>
</template>

<script>
import appNav from "./appNav.vue";
export default {
  components: {
    appNav
  },
  data() {
    return {
      appState: {
        appNav: false
      }
    };
  },
  created() {
    eventBus.$on("toggleNav", () => {
      this.appState.appNav = !this.appState.appNav;
    });
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Mina");
body {
  background-color: #f7f7f7;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  font-family: "Oswald", sans-serif;
}
#app {
  position: relative;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
