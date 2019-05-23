<template>
  <footer class="footer">
    <div class="footer__containersWrapper">
      <div class="footer__container">
        <h3 class="footer__header">GET IN TOUCH</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aliquam, odio laborum vitae quidem est quaerat
          ipsam vel quis rerum dicta vero et alias optio inventore dolores nam aperiam.
          Illum, aut?
        </p>
                <ul>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
        </ul>
      </div>
      <div class="footer__container">
        <h3 class="footer__header">TWITTER</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aliquam, odio laborum vitae quidem est quaerat
          ipsam vel quis rerum dicta vero et alias optio inventore dolores nam aperiam.
          Illum, aut?
        </p>
        <ul>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
        </ul>
      </div>
      <div class="footer__container">
        <h3 class="footer__header">POPULAR POSTS</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aliquam, odio laborum vitae quidem est quaerat
          ipsam vel quis rerum dicta vero et alias optio inventore dolores nam aperiam.
          Illum, aut?
        </p>
        <ul>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
        </ul>
      </div>
      <div class="footer__container">
        <h3 class="footer__header">ABOUT US</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aliquam, odio laborum vitae quidem est quaerat
          ipsam vel quis rerum dicta vero et alias optio inventore dolores nam aperiam.
          Illum, aut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aliquam, odio laborum vitae quidem est quaerat.
        </p>
      </div>
    </div>
    <div class="footer__copyright">&copy; asdasd</div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  color: whitesmoke;
  padding: 0 13vw;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ul {
    list-style-type: square;
  }

  &__containersWrapper {
    @media (max-width: 50em) {
      justify-content: center;
    }
    display: flex;
    border-bottom: 1px solid gray;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__container {
    width: 100%;
    max-width: 250px;
  }

  &__header {
    color: gray;
  }
}
</style>
