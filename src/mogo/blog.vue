<template>
  <div class="blogSection">
    <common-header header="Our stories" subheader="LATEST BLOG" :description="false"></common-header>
    <div class="blogs">
      <div class="blog" v-for="(blog, index) in blogs" :key="index">
        <picture class="blog__img">
          <img :src="blog.img">
          <div class="blog__date">
            <h2>{{ blog.date.day }}</h2>
            <p>{{ blog.date.month.toUpperCase() }}</p>
          </div>
        </picture>
        <h3 class="blog__title">{{ blog.title }}</h3>
        <p class="blog__snippet">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Inventore sapiente accusantium, officiis omnis architecto
        </p>
        <div>
          <div class="blog__views">
            <font-awesome-icon :icon="['fas', 'eye']"></font-awesome-icon>
            {{ blog.views }}
          </div>
          <div class="blog__comments">
            <font-awesome-icon :icon="['fas', 'comment']"></font-awesome-icon>
            {{ blog.comments }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          title: "Lorem ipsum",
          img: require("./assets/a3.png"),
          date: {
            day: 14,
            month: "dec"
          },
          views: 123,
          comments: 33
        },
        {
          title: "Dolor sit amet",
          img: require("./assets/a2.png"),
          date: {
            day: 13,
            month: "dec"
          },
          views: 211,
          comments: 65
        },
        {
          title: "Lorem ipsum",
          img: require("./assets/a1.png"),
          date: {
            day: 12,
            month: "dec"
          },
          views: 475,
          comments: 180
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
}
.blogSection {
  width: 100%;
  background: #fff;
  padding-bottom: 80px;
  flex-direction: column;
  align-items: center;
}
.blogs {
  width: 60%;
  justify-content: space-between;
}

.blog {
  width: 30%;
  flex-direction: column;

  &__img {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 250px;

    & img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  &__date {
    position: absolute;
    bottom: 10px;
    left: -10px;
    border: 2px solid #fff;
    height: 80px;
    width: 60px;
    flex-direction: column;
    justify-content: center;
    background: #95e1d4;
    align-items: center;
    color: #fff;
  }

  &__snippet {
    margin-top: 10px;
    padding-bottom: 20px;
    color: gray;
    border-bottom: 1px solid lightgray;
  }

  &__views,
  &__comments {
    margin: 10px 10px 0 0;
    align-items: center;
    color: gray;

    & svg {
      margin-right: 10px;
      color: #95e1d4;
    }
  }
}
</style>
