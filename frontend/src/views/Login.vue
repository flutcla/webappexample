<template>
  <div>
    <h2>Login</h2>
    <q-form @submit.prevent="submit">
      <q-input outlined v-model="email" label="Email" type="email" />
      <q-input outlined v-model="password" label="Password" type="password" />
      <q-btn label="Login" type="submit" :disable="!email || !password" />
    </q-form>
    <p>
      Don't have an account yet? <router-link to="/signup">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import * as store from "../store";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submit() {
      await store.login(this.email, this.password);
      if (store.user.value) {
        this.$router.push("/");
      }
    },
  },
};
</script>
