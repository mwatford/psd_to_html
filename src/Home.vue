<template>
  <div class="home">
    <h2>Projects</h2>
    <router-link v-for="route in routes.slice(1)" :key="route.name" :to="route.path">
      <h3>{{ route.name }}</h3>
    </router-link>
  </div>
</template>

<script>
import routes from "./routes.js";
export default {
  data() {
    return {
      routes
    };
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  flex-direction: column;
}
</style>
