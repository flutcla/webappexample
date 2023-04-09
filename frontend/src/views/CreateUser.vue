<template>
  <div>
    <q-card class="form-card">
      <q-card-section>
        <div class="text-h6">ユーザー登録</div>
          <q-form @submit.prevent="submit">
            <q-input outlined v-model="name" label="氏名" />
            <q-input
              outlined
              v-model="furigana"
              label="ふりがな"
              :rules="[val => /^[ぁ-んァ-ンー\s]+$/u.test(val) || 'ひらがなのみ入力してください']"
            />
            <q-input outlined v-model="birthDate" label="生年月日" type="date" />
            <q-btn label="登録" type="submit" :disable="!name || !furigana || !birthDate" />
          </q-form>
          <p v-if="error" class="error-message">{{ error }}</p>
        </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  name: "CreateUser",
  data() {
    return {
      name: "",
      furigana: "",
      birthDate: "",
      uniqueCode: "",
      error: null,
    };
  },
  methods: {
    async generateUniqueCode() {
      const snapshot = await db.collection("invCode").get();
      const existingCodes = snapshot.docs.map(doc => doc.id);
      let code = Math.floor(1000 + Math.random() * 9000);
      while (existingCodes.includes(code)) {
        code = Math.floor(1000 + Math.random() * 9000);
      }
      return code.toString();
    },

    async submit() {
      let uniqueCode = await this.generateUniqueCode();

      await db.collection("invCode").doc(uniqueCode).set({
        name: this.name,
        furigana: this.furigana,
        birthDate: this.birthDate,
        uniqueCode: uniqueCode,
      });

      // 保存に成功したら、入力フィールドをクリアする
      this.name = "";
      this.furigana = "";
      this.birthDate = "";
    },
  },
};
</script>
