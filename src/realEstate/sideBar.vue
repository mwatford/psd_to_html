<template>
  <div class="sideBar">
    <div class="sideBar__item" @click="toggle">
      <font-awesome-icon :icon="['fas', `${extended ? 'angle-left' : 'angle-right'}`]"></font-awesome-icon>
    </div>
    <div class="sideBar__item" v-for="item in 5">
      <font-awesome-icon :icon="['fas', 'coffee']" class="icon"></font-awesome-icon>
      <p v-if="extended">Option {{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      extended: false
    };
  },
  methods: {
    toggle() {
      this.extended = !this.extended;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.sideBar {
  position: fixed;
  top: 80px;
  left: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  color: #505050;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10px;

  &__item {
    cursor: pointer;
    width: 100%;
    height: 30px;
    font-size: 20px;
    margin: 4px 0;
    padding: 10px;

    &:hover {
      color: #000;
      background: #c4c4c4;
    }
  }
}
.icon {
  margin-right: 5px;
}
.fa-angle-left,
.fa-angle-right {
  font-size: 30px;
}
</style>
