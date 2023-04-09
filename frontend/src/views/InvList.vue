<template>
  <div>
    <q-card id="code-list">
      <div class="text-h5">発行済みの招待コード</div>
      <q-card v-for="(invCode, index) in invCodes" :key="index" class="code-card">
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-h5">{{ invCode.data.name }}</div>
              <div class="text-h6">{{ invCode.data.birthDate }}</div>
            </div>
            <div class="text-h4">{{ invCode.data.uniqueCode }}</div>
            <div class="col-auto">
              <div><q-btn flat dense round icon="qr_code" /></div>
              <div><q-btn flat dense round icon="delete" @click="deleteInvCode(invCode.id)" /></div>
            </div>
          </div>
        </q-card-section>

      </q-card>
    </q-card>
  </div>
</template>

<style lang="scss">
#code-list {
  margin: 0 auto;
  padding: 10px;
  max-width: 500px;

  .code-card {
    margin: 10px;
    background: #f2f2f2;
  }
}
</style>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { db } from "@/firebase";

export default {
  name: "InvList",
  setup() {
    const invCodes = ref([]);

    const sortInvCodes = (a, b) => {
      const furiganaA = a.data.furigana;
      const furiganaB = b.data.furigana;

      if (furiganaA < furiganaB) {
        return -1;
      }
      if (furiganaA > furiganaB) {
        return 1;
      }
      return 0;
    };

    const fetchData = () => {
      const unsubscribe = db.collection("invCode").onSnapshot((querySnapshot) => {
        invCodes.value = []; // リアルタイムでデータを更新するために、配列を初期化します。
        querySnapshot.forEach((doc) => {
          invCodes.value.push({ id: doc.id, data: doc.data() });
        });
        invCodes.value.sort(sortInvCodes);
      });
      return unsubscribe;
    };

    let unsubscribe;
    onMounted(() => {
      unsubscribe = fetchData();
    });

    onUnmounted(() => {
      unsubscribe();
    });

    const deleteInvCode = async (id) => {
      try {
        await db.collection("invCode").doc(id).delete();
      } catch (error) {
        console.error("Error removing document: ", error);
      }
    };

    return {
      invCodes,
      deleteInvCode,
    };
  },
};
</script>
