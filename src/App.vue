<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <appFooter/>
  </div>
</template>

<script>
import Header from './Header.vue';
import Home from './Home.vue';
import About from './About.vue';
import Journal from './Journal.vue';
import Service from './Service.vue';
import Footer from './Footer.vue';

export default {
  components: {
    'app-header': Header,
    'home': Home,
    'about': About,
    'journal': Journal,
    'service': Service,
    'appFooter': Footer
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
body {
    background-color: #f7f7f7;
    margin: 0;
    overflow-y: scroll;
    font-family: 'Oswald', sans-serif;
}
#app {
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
    grid-template-rows:  450fr 335fr auto 210fr;
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

    @media (max-width: 50em ) {
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

    @media (max-width: 50em ) {
      // display: flex;
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
