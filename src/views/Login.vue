<template>
  <div>
    <div id="container">
      <div id="email_group">
        <label for="email">Email:</label>
        <input name="email" type="emial" v-model="form.email">
      </div>

      <div id="password_group">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="form.password">
      </div>
      <hr>
      <button id="btn_login" v-on:click="login">Login</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login",

  data() {
    return {
      form: { password: "", email: "" }
    };
  },
  methods: {
    ...mapActions({ _login: "login" }),
    login: function() {
      let { email, password } = this.form;
      this._login({ email: email, password: password })
        .then(r => alert("ok"))
        .catch(r => alert("fail"));
    }
  }
};
</script>

<style lang="stylus" scoped>
* {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

hr {
  background: #8bf201;
  height: 1px;
  width: 30%;
}

label {
  color: #8bf201;
}

#container {
  width: 50%;
  background: #78a1c4;
  padding: 1em;
}

#email_group, #password_group {
  width: 100%;
  margin: 5px;
}

input {
  font-family: monospace;
  border-radius: 3px;
  height: 21px;
  padding: 2px;
}

#btn_login {
  background: #000408;
  color: #8bf201;
  font-size: 1.5em;
  border-radius: 0.1em;
  border: none;
}

input {
  border: none;
}
</style>
