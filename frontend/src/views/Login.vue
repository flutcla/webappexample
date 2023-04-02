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
        <p v-if="error" class="error-message">{{ error }}</p>
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
import * as store from '../store';

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async submit() {
      try {
        await store.login(this.email, this.password);
        if (store.user.value) {
          this.$router.push("/");
        }
      } catch (err) {
        this.error = "ログインに失敗しました。メールアドレスまたはパスワードが間違っています。";
      }
    },
  },
};
</script>
