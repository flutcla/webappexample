<template>
  <div>
    <h2>Sign Up</h2>
    <q-form @submit.prevent="submit">
      <q-input outlined v-model="email" label="Email" type="email" />
      <q-input outlined v-model="password" label="Password" type="password" />
      <q-btn label="Sign Up" type="submit" :disable="!email || !password" />
    </q-form>
  </div>
</template>

<script>
import * as store from "../store";

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submit() {
      await store.signUp(this.email, this.password);
      if (store.user.value) {
        this.$router.push("/");
      }
    },
  },
};
</script>
