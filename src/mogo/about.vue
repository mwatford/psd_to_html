<template>
  <div class="intro">
    <div class="story">
      <h3 class="story__headerOne">What we do</h3>
      <h2 class="story__headerTwo">STORY ABOUT US</h2>
      <hr>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Facilis esse praesentium tempora aliquid corporis nisi eius error,
        aliquam suscipit alias possimus accusantium adipisci temporibus vel,
        rem, unde delectus! Doloremque, et?
      </p>
      <div class="story__gallery">
        <picture class="story__img">
          <img src="./assets/2.png">
          <div class="overlay">
            <font-awesome-icon :icon="['fas', 'users']" class="overlay__icon"></font-awesome-icon>
            <h3 class="overlay__header">SUPER TEAM</h3>
          </div>
        </picture>
        <picture class="story__img">
          <img src="./assets/3.png">
          <div class="overlay">
            <font-awesome-icon :icon="['fas', 'users']"></font-awesome-icon>
          </div>
        </picture>
        <picture class="story__img">
          <img src="./assets/4.png">
          <div class="overlay">
            <font-awesome-icon :icon="['fas', 'users']"></font-awesome-icon>
          </div>
        </picture>
      </div>
    </div>
    <div class="facts">
      <div class="facts__item">
        <h1>42</h1>
        <p>WEB DESIGN PROJECTS</p>
      </div>
      <div class="facts__item">
        <h1>123</h1>
        <p>HAPPY CLIENTS</p>
      </div>
      <div class="facts__item">
        <h1>15</h1>
        <p>AWARD WINNER</p>
      </div>
      <div class="facts__item">
        <h1>99</h1>
        <p>CUPS OF COFFEE</p>
      </div>
      <div class="facts__item">
        <h1>24</h1>
        <p>MEMBERS</p>
      </div>
    </div>
    <div class="services"></div>
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
.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(#ff6c78e8, #ffd970e7);
  display: none;
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 26px;

  &__header {
    font-size: 20px;
  }
}
.intro {
  width: 100%;
  padding: 50px 0 0 0;
  flex-direction: column;
}
.story {
  padding: 0 20%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  &__headerOne {
    margin: 15px 0;
    font-family: "Dancing Script", cursive;
  }

  &__headerTwo {
    font-family: "Montserrat", sans-serif;
  }

  & p {
    margin-bottom: 40px;
    color: gray;
    width: 80%;
  }

  & hr {
    border: 0;
    border-top: 3px solid #ff6c78;
    width: 60px;
    margin: 40px 0;
  }

  &__gallery {
    margin: 20px 0;
    justify-content: space-between;
  }

  &__img {
    cursor: pointer;
    position: relative;
    width: 30%;
    max-width: 390px;
    max-height: 210px;

    & img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    &:hover {
      transform: translate(-5px, -5px);
      box-shadow: 8px 8px 0px 0px #95e1d4;

      & .overlay {
        display: flex;
      }
    }
  }
}
.facts {
  width: 100%;
  min-height: 300px;
  background: #95e1d4;
  margin-top: 50px;
  padding: 0 20%;
  font-family: 'Montserrat', sans-serif;

  &__item {
    flex-direction: column;
    width: 100%;
    border-left: 1px solid #fff;
    color: #fff;
    justify-content: center;
    align-items: center;
    font-size: 40px;

    &:last-child {
      border-right: 1px solid #fff;
    }

    & p {
      font-size: 16px;
    }
  }
}
</style>
