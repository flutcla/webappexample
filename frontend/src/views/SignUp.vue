<template>
  <div>
    <q-card class="form-card">
      <q-card-section>
        <div class="text-h6">新規登録</div>
        <q-form @submit.prevent="submit">
          <q-input outlined v-model="email" label="メールアドレス" type="email" />
          <q-input outlined v-model="password" label="パスワード" type="password" />
          <q-btn label="登録" type="submit" :disable="!email || !password" />
        </q-form>
      </q-card-section>
    </q-card>
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
