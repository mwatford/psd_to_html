<template>
  <div class="team">
    <common-header header="Who we are" subheader="meet our team" :description="true"></common-header>
    <div class="teamContainer">
      <div class="member" v-for="member in members" :key="member.name">
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
          <img :src="member.img" />
        </picture>
        <h4>{{ member.name }}</h4>
        <h4 class="member__description">Lorem ipsum</h4>
      </div>
    </div>
    <div class="brands">
      <img v-for="(icon, index) in brands" :key="index" :src="icon" class="brands__item" />
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
      ],
      brands: [
        require("./assets/icon1.png"),
        require("./assets/icon2.png"),
        require("./assets/icon3.png"),
        require("./assets/icon4.png"),
        require("./assets/icon5.png"),
        require("./assets/icon6.png")
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
  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
    margin: auto;
  }
  position: relative;
  width: 60%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px auto 80px auto;
}
.member {
  @media (max-width: 1200px) {
    width: 100%;
    margin-bottom: 10px;
  }
  cursor: pointer;
  position: relative;
  width: 31%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  max-width: 340px;

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
    height: 100%;
    object-fit: cover;
    min-height: 400px;
  }

  &__description {
    color: gray;
  }
}
.brands {
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    // justify-content: center;
    width: 100%;
    padding: 20px 0;
  }
  margin-top: 40px;
  width: 100%;
  padding: 20px 20%;
  justify-content: space-around;
  align-items: center;
  background: #f5f5f5;

  &__item {
    @media (max-width: 1200px) {
      width: 50%;
    }
    flex-direction: row;
    max-width: 120px;
    max-height: 120px;
    margin: 5px;
  }
}
</style>
