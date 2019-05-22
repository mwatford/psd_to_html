<template>
  <nav class="navigation">
    <h2 class="navigation__title" @click="toggleNav">HOME</h2>
    <div class="navigation__menu">
      <h3 class="navigation__link" @click="toggleSignIn">SIGN IN</h3>
      <h3 class="navigation__link" @click="toggleSignUp">SIGN UP</h3>
      <h3 class="navigation__link">ABOUT</h3>
      <component :is="activeModal" class="navigation__modal" v-if="modal"></component>
    </div>
  </nav>
</template>

<script>
import { toggleNav } from "../mixins.js";
import signIn from "./signIn.vue";
import signUp from "./signUp.vue";

export default {
  mixins: [toggleNav],
  components: {
    signIn,
    signUp
  },
  data() {
    return {
      modal: false,
      activeModal: null
    };
  },
  methods: {
    toggleModal(val) {
      if (val) {
        this.modal = val;
      } else {
        this.modal = !this.modal;
      }
    },
    toggleSignIn() {
      if (this.modal && this.activeModal === signIn) {
        this.toggleModal(false);
      } else if (this.modal && this.activeModal !== signIn) {
        this.activeModal = signIn;
      } else if (!this.modal) {
        this.activeModal = signIn;
        this.toggleModal();
      }
    },
    toggleSignUp(passedModal) {
      if (this.modal && this.activeModal === signUp) {
        this.toggleModal(false);
      } else if (this.modal && this.activeModal !== signUp) {
        this.activeModal = signUp;
      } else if (!this.modal) {
        this.activeModal = signUp;
        this.toggleModal();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Chakra+Petch");
* {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.navigation {
  font-family: Chakra Petch, sans-serif;
  color: #505050;
  background-color: #88f169;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  padding: 0 3vw;
  z-index: 1;
  font-size: calc(0.8vw + 10px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  line-height: 1;
  position: sticky;
  top: 0;

  &__title {
    cursor: pointer;
    &:hover {
      color: #000;
    }
    // font-size: 1em;
  }
  &__menu {
    position: relative;
    height: 100%;
  }
  &__link {
    // font-size: 0.7em;
    margin-left: 20px;
    cursor: pointer;

    &:first-of-type {
      margin: 0;
    }

    &:hover {
      color: #000;
    }
  }
  &__modal {
    border: 2px solid #88f169;
    position: absolute;
    top: 110%;
    width: 100%;
    background: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }
}
</style>
