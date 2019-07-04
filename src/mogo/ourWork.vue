<template>
  <div class="ourWork">
    <common-header header="What we do" subheader="some of our work" :description="true"></common-header>
    <div class="gallery">
      <picture class="gallery__img">
        <div class="overlay">
          <font-awesome-icon :icon="['fas', 'image']" class="overlay__icon"></font-awesome-icon>
          <p>Lorem ipsum</p>
        </div>
        <img src="./assets/gallery7.png" />
      </picture>
      <picture class="gallery__img">
        <div class="overlay">
          <font-awesome-icon :icon="['fas', 'image']" class="overlay__icon"></font-awesome-icon>
          <p>Lorem ipsum</p>
        </div>
        <img src="./assets/gallery6.png" />
      </picture>
      <picture class="gallery__img--special">
        <div class="overlay">
          <font-awesome-icon :icon="['fas', 'image']" class="overlay__icon"></font-awesome-icon>
          <p>Lorem ipsum</p>
        </div>
        <img src="./assets/gallery3.png" />
      </picture>
      <picture class="gallery__img">
        <div class="overlay">
          <font-awesome-icon :icon="['fas', 'image']" class="overlay__icon"></font-awesome-icon>
          <p>Lorem ipsum</p>
        </div>
        <img src="./assets/gallery5.png" />
      </picture>
      <picture class="gallery__img">
        <div class="overlay">
          <font-awesome-icon :icon="['fas', 'image']" class="overlay__icon"></font-awesome-icon>
          <p>Lorem ipsum</p>
        </div>
        <img src="./assets/gallery4.png" />
      </picture>
      <picture class="gallery__img">
        <div class="overlay">
          <font-awesome-icon :icon="['fas', 'image']" class="overlay__icon"></font-awesome-icon>
          <p>Lorem ipsum</p>
        </div>
        <img src="./assets/gallery2.png" />
      </picture>
      <picture class="gallery__img">
        <div class="overlay">
          <font-awesome-icon :icon="['fas', 'image']" class="overlay__icon"></font-awesome-icon>
          <p>Lorem ipsum</p>
        </div>
        <img src="./assets/gallery1.png" />
      </picture>
    </div>
    <div class="quote">
      <img src="./assets/quote.png" class="quote__img" />
      <div class="quote__wrapper">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt delectus possimus, quos voluptate quae cumque ducimus
          nesciunt voluptatibus eaque quia eum fugiat aliquid ipsa corporis atque!
          Laborum velit fugit nostrum?
        </p>
        <div class="quote__author">Susan Boyler</div>
      </div>
    </div>
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
.ourWork {
  background: #fff;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.gallery {
  @media (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  margin: 40px 0 0 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 350px;
  width: 100%;

  &__img {
    cursor: pointer;
    position: relative;

    &:hover .overlay {
      display: flex;
    }

    &--special {
      @extend .gallery__img;
      grid-area: span 2 / span 1;
    }

    & img {
      @media (max-width: 1200px) {
        width: 20vw;
        height: 20vw;
        min-width: 175px;
        min-height: 175px;
      }
      width: 100%;
      object-fit: cover;
      object-position: 50% 80%;
    }
  }
}
.overlay {
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: linear-gradient(#ff6c78e8, #ffd970e7);
  color: #fff;

  &__icon {
    font-size: 26px;
  }
}
.quote {
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 80px 2vw;
  }
  width: 100%;
  background: #fff;
  padding: 80px 30%;
  justify-content: space-between;
  align-items: center;
  color: gray;

  &__img {
    @media (max-width: 1200px) {
      margin: 0 0 20px 0;
    }
    margin-right: 20px;
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }

  &__wrapper {
    @media (max-width: 1200px) {
      text-align: center;
      align-items: center;
      width: 80%;
    }
    width: 100%;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
  }

  &__author {
    @media (max-width: 1200px) {
      margin-top: 20px;
    }
    position: relative;
    margin-left: 70px;
    font-family: "Dancing Script", cursive;
    font-size: 24px;
    color: #000;

    &::before {
      content: "";
      width: 60px;
      border-top: 3px solid #ff6c78;
      position: absolute;
      right: 100%;
      top: 50%;
      margin-right: 10px;
    }
  }
}
</style>
