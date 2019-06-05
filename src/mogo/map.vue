<template>
  <div class="map">
    <font-awesome-icon :icon="['fas', 'map-marked-alt']"></font-awesome-icon>
    <h2>OPEN MAP</h2>
    <hr>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.map {
  cursor: pointer;
  background-image: url("./assets/map.png");
  background-color: #ffffffc4;
  background-blend-mode: overlay;
  padding: 40px 0;
  width: 100%;
  flex-direction: column;
  color: #f5827f;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;

  & svg {
    font-size: 30px;
    margin: 15px 0 8px 0;
  }

  & hr {
    border: 0;
    margin-top: 8px;
    border-top: 3px solid #f5827f;
    width: 60px;
  }
}
</style>
