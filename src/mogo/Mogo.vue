<template>
  <div>
    <appHeader></appHeader>
    <about></about>
    <services></services>
    <meetTheTeam></meetTheTeam>
  </div>
</template>

<script>
import appHeader from "./appHeader.vue";
import about from "./about.vue";
import services from "./services.vue";
import meetTheTeam from "./meetTheTeam.vue";

export default {
  components: {
    appHeader,
    about,
    services,
    meetTheTeam
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
