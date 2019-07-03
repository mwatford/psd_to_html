<template>
  <div class="serviceContainer">
    <div class="service">
      <common-header header="We work with" subheader="amazing services" :description="false"></common-header>
      <div class="servicePart">
        <div class="servicePart__service" v-for="service in servicePartOne" :key="service.title">
          <font-awesome-icon :icon="service.icon"></font-awesome-icon>
          <div class="servicePart__text">
            <h3>{{ service.title.toUpperCase() }}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iure error.
            </p>
          </div>
        </div>
      </div>
      <div class="servicePart">
        <div class="servicePart__service" v-for="service in servicePartTwo" :key="service.title">
          <font-awesome-icon :icon="service.icon"></font-awesome-icon>
          <div class="servicePart__text">
            <h3>{{ service.title.toUpperCase() }}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iure error.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="serviceTwo">
      <picture class="serviceTwo__banner">
        <div class="serviceTwo__bannerOverlay"></div>
        <img src="./assets/5.png" alt />
      </picture>
      <common-header header="For all devices" subheader="unique designs" :description="false"></common-header>
      <img src="./assets/big.png" class="serviceTwo__big" />
      <img src="./assets/mobile.png" class="serviceTwo__mobile" />
    </div>
    <div class="serviceThree">
      <common-header header="Service" subheader="what we do" :description="true"></common-header>
      <div class="serviceThree__content">
        <img class="serviceThree__img" src="./assets/6.png" />
        <div class="serviceThree__descriptions">
          <div
            class="serviceThree__description"
            v-for="(service, index) in servicePartOne"
            :key="service.title"
          >
            <div class="serviceThree__descriptionTitle" @click="toggle(index)">
              <font-awesome-icon :icon="service.icon" class="mainIcon"></font-awesome-icon>
              <h3>{{ service.title.toUpperCase() }}</h3>
              <font-awesome-icon
                class="serviceThree__descriptionOpen"
                :icon="['fas', service.description ? 'angle-up' : 'angle-down']"
              ></font-awesome-icon>
            </div>
            <p class="serviceThree__descriptionText" v-if="service.description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Ea dolorem deleniti id.Officiis blanditiis facilis eveniet.
              Nesciunt, debitis aliquam repellendus dolor
              provident sed odio eum animi corporis ab esse autem?
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="quote">
      <div class="quote__icon">
        <font-awesome-icon :icon="['fas', 'comments']"></font-awesome-icon>
      </div>
      <div class="quote__wrapper">
        <p class="quote__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          debitis explicabo. Debitis adipisci iusto et, illum doloremque laudantium
          necessitatibus repudiandae pariatur expedita similique.
          Nobis dolor odio laborum est, vel quasi.
        </p>
        <h4 class="quote__author">Susan Boyler</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      servicePartOne: [
        {
          title: "photography",
          icon: ["fas", "camera-retro"],
          description: !false
        },
        {
          title: "web design",
          icon: ["fas", "ruler-combined"],
          description: false
        },
        {
          title: "creativity",
          icon: ["fas", "magic"],
          description: false
        }
      ],
      servicePartTwo: [
        {
          title: "seo",
          icon: ["fas", "book-open"]
        },
        {
          title: "css/html",
          icon: ["fas", "code"]
        },
        {
          title: "digital",
          icon: ["fas", "expand"]
        }
      ]
    };
  },
  methods: {
    toggle(index) {
      this.closeAll();
      this.servicePartOne[index].description = true;
    },
    closeAll() {
      this.servicePartOne.forEach(el => (el.description = false));
    }
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
.mainIcon {
  color: #95e1d4;
}
.serviceContainer {
  width: 100%;
  flex-direction: column;
}
.service {
  @media (max-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  position: relative;
  flex-direction: column;
  width: 100%;
  align-items: center;
  min-height: 600px;
  text-align: center;
}
.servicePart {
  @media (max-width: 1200px) {
    width: 80%;
    padding: 0 2vw;
    flex-wrap: wrap;
    border: none;
    max-width: 300px;
  }
  width: 60%;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  margin-bottom: 40px;
  padding-bottom: 40px;
  text-align: left;

  &:last-child {
    @media (max-width: 1200px) {
      padding: 0 2vw;
    }
    border: none;
    padding: 0;
  }

  &__service {
    @media (max-width: 1200px) {
      width: 100%;
      margin: 20px 0;
    }
    width: 30%;
    align-items: space-between;

    & svg {
      grid-column: 1;
      grid-row: 1 / span 2;
      color: #95e1d4;
      height: 30px;
      width: 100%;
      max-width: 30px;
      margin: 5px 35px 0 0;
    }
  }

  &__text {
    min-height: 100px;
    flex-direction: column;
    justify-content: space-between;
  }
}
.serviceTwo {
  // @extend .service;
  @media (max-width: 1200px) {
  }
  width: 100%;
  height: 700px;
  // justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;

  &__banner {
    position: absolute;
    top: 0;
    z-index: -2;
    width: 100%;
    height: 100%;

    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__bannerOverlay {
    position: absolute;
    top: 0;
    background: #ffffffcc;
    height: 100%;
    width: 100%;
  }

  &__big {
    @media (max-width: 1200px) {
      // margin: 0 2vw;
      width: 96%;
    }
    width: 35%;
    max-width: 450px;
    z-index: -1;
  }

  &__mobile {
    @media (max-width: 1200px) {
      transform: translateX(50%);
    }
    height: 50%;
    position: absolute;
    bottom: -10%;
    transform: translateX(100%);
    z-index: 1;
  }
}
.serviceThree {
  @extend .service;
  background: #fff;
  padding-bottom: 40px;

  &__content {
    width: 60%;
    margin: 40px 0;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__img {
    width: 48%;
    object-fit: contain;
  }

  &__descriptions {
    width: 48%;
    flex-direction: column;
    justify-content: flex-start;
    max-height: 400px;
  }

  &__description {
    width: 100%;
    flex-direction: column;
    box-shadow: 0 0 4px 0 #e0e0e0;
    margin: 0 0 15px 0;

    &:last-child {
      margin: 0;
    }
  }

  &__descriptionTitle {
    cursor: pointer;
    position: relative;
    font-size: 20px;
    align-items: center;
    border: 1px solid lightgray;
    padding: 0 10px;

    & h3 {
      margin-left: 15px;
    }

    &:hover {
      color: #95e1d4;
    }
  }

  &__descriptionText {
    padding: 10px;
    text-align: left;
    border: 1px solid lightgray;
    border-top: 0;
    width: 100%;
    color: gray;
  }

  &__descriptionOpen {
    position: absolute;
    right: 10px;
    font-size: 25px;
  }
}
.quote {
  width: 100%;
  background: #f8f8f8;
  padding: 50px 30%;
  justify-content: space-between;
  align-items: center;
  color: gray;

  &__icon {
    font-size: 75px;
    color: #95e1d4;
    border: 3px solid #95e1d4;
    padding: 20px;
    margin-right: 20px;
  }

  &__wrapper {
    width: 100%;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  &__author {
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
