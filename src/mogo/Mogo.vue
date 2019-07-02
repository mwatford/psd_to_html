<template>
  <div class="mogo">
    <appHeader></appHeader>
    <about></about>
    <services></services>
    <meetTheTeam></meetTheTeam>
    <ourWork></ourWork>
    <opinions></opinions>
    <blog></blog>
    <appMap></appMap>
    <appFooter></appFooter>
  </div>
</template>

<script>
import appHeader from "./appHeader.vue";
import about from "./about.vue";
import services from "./services.vue";
import meetTheTeam from "./meetTheTeam.vue";
import ourWork from "./ourWork.vue";
import opinions from "./opinions.vue";
import blog from "./blog.vue";
import map from "./map.vue";
import appFooter from './footer.vue'

export default {
  components: {
    appHeader,
    about,
    services,
    meetTheTeam,
    ourWork,
    opinions,
    blog,
    appMap: map,
    appFooter
  }
};
</script>

<style lang="scss" scoped>
* {
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.mogo {
  flex-direction: column;
}
</style>
