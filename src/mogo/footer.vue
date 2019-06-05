<template>
  <footer class="footer">
    <div class="footer__contentWrapper">
      <div class="section--wide section">
        <h1>MoGo</h1>
        <p class="section__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis officiis modi soluta quia repellat labore
          enim nulla aliquid corrupti magnam animi, assumenda explicabo
          quibusdam alias ab! Odio quo modi officia.
        </p>
        <h5 class="section__followers">
          <strong>144</strong>&ensp;followers
        </h5>
        <div class="section__follow">
          <p>Follow us:</p>
          <div class="section__icons">
            <font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon>
            <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
            <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon>
            <font-awesome-icon :icon="['fab', 'youtube']"></font-awesome-icon>
            <font-awesome-icon :icon="['fab', 'tumblr']"></font-awesome-icon>
            <font-awesome-icon :icon="['fab', 'codepen']"></font-awesome-icon>
          </div>
        </div>
        <form class="section__subscribe" @submit.prevent>
          <input type="text" placeholder="e-mail">
          <input type="submit" value="SUBSCRIBE">
        </form>
      </div>
      <div class="section--narrow section">
        <h4 class="section__title">BLOGS</h4>
        <div class="blog">
          <picture class="blog__post">
            <img src="./assets/mini11.png">
            <div class="blog__textWrapper">
              <h4 class="blog__postTitle">Lorem ipsum dolor sit amet</h4>
              <h6 class="blog__postSubtitle">Lorem ipsum dolor sit amet</h6>
            </div>
          </picture>
          <picture class="blog__post">
            <img src="./assets/mini12.png">
            <div class="blog__textWrapper">
              <h4 class="blog__postTitle">Lorem ipsum dolor sit amet</h4>
              <h6 class="blog__postSubtitle">Lorem ipsum dolor sit amet</h6>
            </div>
          </picture>
          <picture class="blog__post">
            <img src="./assets/mini13.png">
            <div class="blog__textWrapper">
              <h4 class="blog__postTitle">Lorem ipsum dolor sit amet</h4>
              <h6 class="blog__postSubtitle">Lorem ipsum dolor sit amet</h6>
            </div>
          </picture>
        </div>
      </div>
      <div class="section--narrow section">
        <h4 class="section__title">INSTAGRAM</h4>
        <div class="instagramGallery">
          <img
            v-for="post in 9"
            :src="require(`./assets/mini${post}.png`)"
            class="instagramGallery__post"
          >
          <a href="#">View more photos</a>
        </div>
      </div>
    </div>
    <div class="copyright">
      &copy; 2016 MoGo Free PSD template by&ensp;
      <strong>Laaqiq</strong>
    </div>
  </footer>
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
.footer {
  background: #f8f8f8;
  font-family: "Montserrat", sans-serif;
  padding: 60px 20% 15px 20%;
  width: 100%;
  flex-direction: column;
  font-size: 18px;

  &__contentWrapper {
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
  }
}

.section {
  color: #cdcdcd;
  flex-direction: column;
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }

  &--wide {
    width: 40%;
  }

  &--narrow {
    width: 30%;
    color: #000;
  }

  &__info {
    font-size: 14px;
    margin: 20px 0 40px 0;
  }

  &__followers {
    color: #000;
    align-items: flex-end;

    & strong {
      font-size: 20px;
    }
  }

  &__follow {
    font-size: 14px;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid lightgray;
    padding-top: 15px;
  }

  &__icons {
    width: 60%;
    justify-content: space-between;
    font-size: 18px;
    margin-left: 10px;
    color: #95e1d4;

    & svg:hover {
      color: #80ccbf;
      cursor: pointer;
    }
  }

  &__subscribe {
    margin-top: 40px;
    width: 80%;

    & input {
      height: 40px;
      border: 2px solid #95e1d4;
    }

    & input[type="text"] {
      width: 65%;
      color: lightgray;
      font-size: 18px;
      padding: 0 5px;
    }

    & input[type="submit"] {
      width: 35%;
      color: #ffffff;
      background: #95e1d4;
      font-family: "Montserrat", sans-serif;
      justify-content: center;
    }
  }
  & a {
    font-size: 14px;
    text-decoration: none;
    margin: 10px 0 0 2px;

    &:hover {
      text-decoration: underline;
      color: #95e1d4;
    }
  }
}
.blog {
  margin-top: 30px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  min-width: 350px;
  flex-wrap: wrap;

  &__post {
    width: 100%;
    justify-content: space-between;

    & img {
      object-fit: cover;
      width: auto;
    }
  }

  &__textWrapper {
    width: 60%;
    font-size: 14px;
    flex-direction: column;
    text-transform: uppercase;
  }

  &__postSubtitle {
    color: #cdcdcd;
    font-size: 12px;
  }
}
.instagramGallery {
  min-width: 350px;
  flex-wrap: wrap;
  margin-top: 28px;

  &__post {
    margin: 2px;
  }
}
.copyright {
  width: 100%;
  border-top: 1px solid lightgray;
  padding-top: 15px;
  justify-content: center;
  font-size: 14px;
  margin-top: 60px;

  & strong {
    color: #f5827f;
  }
}
</style>
