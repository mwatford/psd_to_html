<template>
  <main>
    <div class="slider">
      <h1 class="slider__h1">{{ title1 }}</h1>
      <h2 class="slider__h2">{{ title2 }}</h2>
      <button class="slider__button">See portfolio</button>
    </div>
    <div class="contentOne">
      <div class="contentOne__icon" v-for="(item, index) in news" :key="index">
        <picture>
          <img :src="item.img" alt="#">
        </picture>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
        <p>{{ item.id }}</p>
      </div>
    </div>
    <div class="contentTwo">
      <h3 class="contentTwo__header">OUR LATEST WORKS</h3>
      <div class="contentTwo__post" v-for="(post, index) in posts" :key="index">
        <picture>
          <img :src="post.img" alt="#">
        </picture>
        <h2>Nobis Bussiness Card</h2>
        <p>{{ placeholderText }}</p>
      </div>
    </div>
    <div class="quote">
      <picture class="quote__sign">
        <img src="../assets/img/quotes.png" alt="#">
      </picture>
      <p class="quote__text">{{ quote }}</p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title1: "We are a digital & branding agency based in London.",
      title2: "We love to turn great ideas into beautiful products.",
      quote:
        "Cras nattus consectetur purus sit amet fementum. \
        Donec id elit non mi porta gravida at eget metus. Duis mollis,\
        est non commodo luctus erat porttitor.",
      news: [
        {
          id: 1,
          img: require(`../assets/img/icon1.png`),
          title: "Tristiquet",
          text:
            "Fusce depibis, cursus commodo, tortor mauris condimentum nibh,\
            ut fermentum massa justo risus."
        },
        {
          id: 2,
          img: require(`../assets/img/icon1.png`),
          title: "Tristiquet",
          text:
            "Fusce depibis, moje commodore, tortor mauris condimentum nibh,\
            ut fermentum massa justo risus."
        },
        {
          id: 3,
          img: require(`../assets/img/icon1.png`),
          title: "Tristiquet",
          text:
            "Fusce depibis, cursus commodo, tortor mauris condimentum nibh,\
            ut fermentum massa justo risus."
        },
        {
          id: 4,
          img: require("../assets/img/icon1.png"),
          title: "Tristiquet",
          text:
            "Fusce depibis, cursus commodo, tortor mauris condimentum nibh,\
            ut fermentum massa justo risus."
        }
      ],
      placeholderText:
        "Cras nattus consectetur purus sit amet fementum.\
				  Donec id elit non mi porta gravida at eget metus. Duis mollis,\
          est non commodo luctus erat porttitor.",
      posts: [
        { img: require("../assets/img/post1.png") },
        { img: require("../assets/img/post1.png") },
        { img: require("../assets/img/post1.png") }
      ]
    };
  }
};
</script>

<style lang="scss">
.slider {
  grid-column: 1 / span 5;
  grid-row: 1;
  display: flex;
  background: url("../assets/img/slider1.png") no-repeat;
  background-position: center center;
  background-size: cover;

  @media (max-width: 50em) {
    background-size: fill;
    font-size: 0.8em;
  }

  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Roboto Slab", serif;

  &__h1 {
    align-self: center;
    color: #f3f3f3;
  }

  &__h2 {
    align-self: center;
    color: #a8a8a8;
  }

  &__button {
    background-color: #3f8dbf;
    color: #fff;
    border: none;
    border-radius: 4px;
    width: 150px;
    height: 35px;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 2px;
    align-self: center;
    margin-top: 1.8vw;

    &:hover {
      cursor: pointer;
    }
  }
}
.contentOne__icon {
  align-content: center;
  border-bottom: 1px solid #d7d7d7;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 20% 10%;
  text-align: center;
}
.contentTwo__header {
  grid-column: 1 / span 3;
  grid-row: 1;
  text-transform: uppercase;
  padding: 0;
  display: flex;
  align-self: center;

  @media (max-width: 50em) {
    grid-column: 1;
  }
}
.contentTwo__post {
  font-size: 0.9em;
  display: flex;
  flex-flow: column;
  align-content: center;

  picture img {
    height: auto;
    width: 100%;
  }
}
.quote {
  display: flex;
  flex-flow: column;
  background-color: #efefef;
  align-items: center;
  justify-content: space-around;
  padding: 40px 0;

  &__text {
    width: 80%;
    max-width: 600px;
    color: #a1a1a1;
    font-family: "Bitter", serif;
    text-align: center;
  }
}
</style>
