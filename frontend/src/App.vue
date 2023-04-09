<template>
  <div id="app">
    <div v-if="!isReady">
      <q-spinner color="primary" size="40px" />
      <p>Loading...</p>
    </div>

    <q-layout v-else>
      <q-header>
        <q-toolbar>
          <q-toolbar-title>
            出席管理システム
          </q-toolbar-title>
          <q-space />
          <q-btn                flat dense round @click="$router.push('/')" icon="home" />
          <q-btn v-if="isAdmin" flat dense round @click="$router.push('/admin')" icon="dashboard" />
          <q-btn v-if="user"    flat dense round @click="logout(); $router.push('/')" icon="logout" />
          <q-btn v-else         flat dense round @click="$router.push('/login')" icon="login" />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page padding>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { QLayout, QHeader, QToolbar, QToolbarTitle, QSpace, QBtn, QPageContainer } from 'quasar';
import firebase from '@/firebase.js';
import { onBeforeMount } from "vue";
import { user, isAdmin, isReady, logout } from "@/store";

export default {
  name: 'App',
  components: {
    QLayout,
    QHeader,
    QToolbar,
    QToolbarTitle,
    QSpace,
    QBtn,
    QPageContainer,
  },
  data() {
    return {
      isLoading: true,
      userData: null,
    };
  },
  async created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
    });
  },
  setup() {
    onBeforeMount(() => {
      // ここで何か初期化処理が必要な場合
    });
    return {
      user,
      isAdmin,
      isReady,
      logout
    };
  },
};
</script>
