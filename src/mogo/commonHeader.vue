<template>
  <div class="commonHeader">
    <h3 class="commonHeader__header">{{ header }}</h3>
    <h2 class="commonHeader__subheader">{{ subheader.toUpperCase() }}</h2>
    <hr>
    <p v-if="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
      libero quos mollitia nihil id accusantium impedit! Rem cumque aperiam
      ducimus! Nobis rem beatae voluptatibus reiciendis laboriosam sapiente
      cumque id recusandae.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      body: String,
      required: true
    },
    subheader: {
      body: String,
      required: true
    },
    description: {
      body: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:700|Dancing+Script&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.commonHeader {
  @media (max-width: 1200px) {
    padding: 40px 2vw;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20% 40px 20%;
  text-align: center;
  width: 100%;

  &__header {
    margin: 15px 0;
    font-family: "Dancing Script", cursive;
  }

  &__subheader {
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
}
</style>
