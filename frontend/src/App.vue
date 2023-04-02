<template>
  <div id="app">
    <q-layout>
      <q-header>
        <q-toolbar>
          <q-toolbar-title>
            出席管理システム
          </q-toolbar-title>
          <q-space />
          <q-btn flat dense round @click="$router.push('/')" icon="home" />
          <q-btn v-if="user" flat dense round @click="logout" icon="logout" />
          <q-btn v-else flat dense round @click="$router.push('/login')" icon="login" />
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

export default {
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
      user: null,
    };
  },
  async created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
    });
  },
  methods: {
    async logout() {
      try {
        await firebase.auth().signOut();
        this.$router.push('/login');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    },
  },
};
</script>
