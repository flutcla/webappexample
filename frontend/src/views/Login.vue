<template>
  <div>
    <q-card class="form-card">
      <q-card-section>
        <div class="text-h6">ログイン</div>
        <q-form @submit.prevent="submit">
          <q-input outlined v-model="email" label="メールアドレス" type="email" />
          <q-input outlined v-model="password" label="パスワード" type="password" />
          <q-btn label="ログイン" type="submit" :disable="!email || !password" />
        </q-form>
      </q-card-section>
      <q-card-section>
        <p>
          <router-link to="/signup">新規登録</router-link>
        </p>
      </q-card-section>
    </q-card>
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
