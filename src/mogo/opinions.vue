<template>
  <div class="opinions">
    <picture class="opinions__background">
      <img src="./assets/mountain.png" alt />
      <div class="opinions__overlay"></div>
    </picture>
    <common-header header="Happy Clients" subheader="what people say" :description="false"></common-header>
    <div class="comments">
      <div class="comment" v-for="each in 4" :key="each">
        <img class="comment__img" :src="require(`./assets/circle${each}.png`)" />
        <div class="comment__wrapper">
          <h2 class="comment__author">Random Guy {{ each }}</h2>
          <h3 class="comment__role">Random Role {{ each }}</h3>
          <hr />
          <p class="comment__body">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Eligendi numquam repellat asperiores, in odio obcaecati nihil,
            fuga repudiandae error illo eius adipisci quas cum quia ducimus
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  display: flex;
  box-sizing: border-box;
}
.opinions {
  position: relative;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
  font-family: "Montserrat", sans-serif;

  &__background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;

    & img {
      width: 100%;
      object-fit: cover;
      object-position: 0 0;
    }
  }

  &__overlay {
    position: absolute;
    background: #fff;
    opacity: 0.8;
    height: 100%;
    width: 100%;
  }
}
.comments {
  @media (max-width: 1200px) {
    width: 100%;
  }
  width: 60%;
  flex-wrap: wrap;
  justify-content: space-around;
}
.comment {
  @media (max-width: 1200px) {
    width: auto;
    max-width: 320px;
  }
  align-items: flex-start;
  justify-content: center;
  width: 40%;
  margin: 20px 10px;

  &__img {
    object-fit: cover;
    object-position: 50% 100%;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin-right: 20px;
  }

  &__wrapper {
    width: 70%;
    flex-direction: column;
    font-size: 14px;

    & h3,
    & p {
      color: gray;
    }
  }

  & hr {
    width: 60px;
    border: none;
    margin: 20px 0 40px 0;
    border-top: 3px solid #f5827f;
  }
}
</style>
