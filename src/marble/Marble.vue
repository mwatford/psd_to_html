<template>
  <div class="marble">
    <appHeader></appHeader>
    <Home></Home>
    <appFooter></appFooter>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    appHeader: Header,
    Home: Home,
    appFooter: Footer
  }
};
</script>

<style lang="scss">
.marble {
  display: grid;
  grid-template-columns: 215fr repeat(3, 390fr) 215fr;
  grid-template-rows: auto 6fr 1fr;
  @media (max-width: 50em) {
    grid-template-rows: auto 6fr minmax(30vw, max-content);
  }
}
nav {
  grid-column: 1 / span 5;
  grid-row: 1;
  background-color: #e5e5e5;
  color: #4e4e4e;
}
main {
  grid-row: 2;
  grid-column: 1 / span 5;
  display: grid;
  grid-template-columns: 215fr repeat(3, 390fr) 215fr;
  grid-template-rows: 450fr 335fr auto 210fr;
  @media (max-width: 50em) {
    grid-template-rows: minmax(auto, 70vw) 400vh auto auto;
  }
}
.contentOne {
  grid-row: 2;
  grid-column: 2 / span 3;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;

  @media (max-width: 50em) {
    grid-template-columns: 100%;
  }
}
.contentTwo {
  grid-column: 2 / span 3;
  grid-row: 3;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, max-content);
  grid-gap: 15px;

  @media (max-width: 50em) {
    grid-template-columns: 100%;
    grid-auto-rows: auto;
  }
}
.quote {
  grid-column: 1 / span 5;
  grid-row: 4;
}
footer {
  grid-column: 1 / span 5;
  grid-row: 3;
  background-color: #1e1e1e;
}
</style>
