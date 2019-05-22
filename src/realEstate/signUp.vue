<template>
  <form class="signUp" @submit.prevent="submitForm">
    <h2>Sign Up</h2>
    <input type="text" placeholder="e-mail" v-model.lazy="email">
    <input type="password" placeholder="password" v-model.lazy="password">
    <input type="password" placeholder="repeat password" v-model="passwordRepeated">
    <input type="submit" value="SIGN IN" :disabled="!formValidate" class="signUp__button">
    <p v-for="error in Array.from(errors)" :key="error" class="signUp__error">{{ error }}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      passwordRepeated: "",
      errors: new Set()
    };
  },
  computed: {
    formValidate() {
      return (
        this.validateEmail() &&
        this.validatePassword() &&
        this.validateRepeated()
      );
    }
  },
  methods: {
    submitForm() {
      if (this.formValidate) this.createNewUser();
    },
    createNewUser() {
      console.log("Your account has been created");
    },
    validateEmail() {
      const emailReg = new RegExp(
        /^([a-z\d\.-]+?)@([a-z\d-]+?)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
      );
      if (this.email && !emailReg.test(this.email)) {
        this.errors.add("Your e-mail is not in a valid format.");
        return false;
      } else {
        this.errors.delete("Your e-mail is not in a valid format.");
        return true;
      }
    },
    validatePassword() {
      if (this.password) {
        if (
          !this.password.match(/\d/) ||
          !this.password.match(/[A-Z]/) ||
          this.password.length < 12
        ) {
          this.errors.add(
            `Your password has to be at least 12 characters long, 
            include a number and a uppercase character.`
          );
          return false;
        } else {
          this.errors
            .delete(`Your password has to be at least 12 characters long, 
            include a number and a uppercase character.`);
          return true;
        }
      } else return false;
    },
    validateRepeated() {
      if (this.passwordRepeated) {
        if (this.password !== this.passwordRepeated) {
          this.errors.add("Passwords don't match");
          return false;
        } else {
          this.errors.delete("Passwords don't match");
          return true;
        }
      } else return false;
    }
  }
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
.signUp {
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

  & > input[type="text"],
  input[type="password"] {
    border: 2px solid #88f169;
    border-radius: 3px;
    height: 30px;
    padding: 0 5px;
    width: 70%;
    background: #f8f8f8;
  }

  &__error {
    font-size: 16px;
    color: red;
    text-align: justify;
    width: 90%;
  }
}
</style>
