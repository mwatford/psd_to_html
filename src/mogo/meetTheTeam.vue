<template>
  <div class="team">
    <div class="teamContainer">
      <h3 class="teamContainer__header1">Who we are</h3>
      <h2 class="teamContainer__header2">MEET OUR TEAM</h2>
      <hr>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        libero quos mollitia nihil id accusantium impedit! Rem cumque aperiam
        ducimus! Nobis rem beatae voluptatibus reiciendis laboriosam sapiente
        cumque id recusandae.
      </p>
    </div>
    <div class="teamContainer__members">
      <div class="member" v-for="member in members" :key="name">
        <picture>
          <div class="overlay">
            <div>
              <div class="overlay__icon">
                <font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon>
              </div>
              <div class="overlay__icon">
                <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
              </div>
              <div class="overlay__icon">
                <font-awesome-icon :icon="['fab', 'pinterest']"></font-awesome-icon>
              </div>
              <div class="overlay__icon">
                <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon>
              </div>
            </div>
          </div>
          <img :src="member.img">
        </picture>
        <h4>{{ member.name }}</h4>
        <h4 class="member__description">Lorem ipsum</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          name: "Antonio Margheriti",
          img: require("./assets/7.png")
        },
        {
          name: "Mark McNugget",
          img: require("./assets/8.png")
        },
        {
          name: "asd asd",
          img: require("./assets/9.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  background: linear-gradient(#ff6c78e8, #ffd970e7);

  &__icon {
    font-size: 26px;
    height: 50px;
    width: 50px;
    background: #ffd970;
    color: #f5827f;

    &:hover {
      color: #fff;
      background: #f5827f;
    }

    & svg {
      margin: auto;
    }
  }
}

.team {
  background: #fff;
  flex-direction: column;
}
.teamContainer {
  padding: 40px 20% 0 20%;
  position: relative;
  flex-direction: column;
  width: 100%;
  align-items: center;
  text-align: center;

  &__header1 {
    margin: 15px 0;
    font-family: "Dancing Script", cursive;
  }

  &__header2 {
    font-family: "Montserrat", sans-serif;
  }

  & hr {
    border: 0;
    border-top: 3px solid #ff6c78;
    width: 60px;
    margin: 40px 0;
  }

  & > p {
    color: gray;
    width: 80%;
  }

  &__members {
    padding: 0 20%;
    margin: 60px;
    justify-content: space-between;
  }
}
.member {
  cursor: pointer;
  position: relative;
  width: 31%;
  // min-height: 400px;
  height: 100%;
  flex-direction: column;
  align-items: center;

  & picture {
    margin-bottom: 10px;
  }

  &:hover {
    & picture {
      transform: translate(-5px, -5px);
      box-shadow: 8px 8px 0 0 #95e1d4;
    }

    & .overlay {
      display: flex;
    }
  }

  & img {
    object-position: 20% 0;
    width: 100%;
    min-height: 400px;
    object-fit: cover;
  }

  &__description {
    color: gray;
  }
}
</style>
