<template>
  <form class="signIn" @submit.prevent>
    <h2>Sign In</h2>
    <input type="text" placeholder="login">
    <input type="password" placeholder="password">
    <input type="submit" placeholder="submit" value="SIGN IN">
  </form>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
* {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin: 6px 0;
}
.signIn {
  flex-direction: column;
  justify-content: space-around;

  & > input[type="text"],
  input[type="password"] {
    border: 2px solid #88f169;
    border-radius: 3px;
    height: 30px;
    padding: 0 5px;
    background: #f8f8f8;
    // width: 300px;
  }
}
</style>
