<template>
  <div>
    <appHeader></appHeader>
    <about></about>
    <services></services>
    <meetTheTeam></meetTheTeam>
    <ourWork></ourWork>
  </div>
</template>

<script>
import appHeader from "./appHeader.vue";
import about from "./about.vue";
import services from "./services.vue";
import meetTheTeam from "./meetTheTeam.vue";
import ourWork from "./ourWork.vue"

export default {
  components: {
    appHeader,
    about,
    services,
    meetTheTeam,
    ourWork
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
