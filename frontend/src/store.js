import { ref } from "vue";
import firebase from "./firebase";

const user = ref(null);

firebase.auth().onAuthStateChanged((currentUser) => {
  user.value = currentUser;
});

const login = async (email, password) => {
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password);
    user.value = response.user;
  } catch (error) {
    console.error(error);
  }
};

const logout = async () => {
  try {
    await firebase.auth().signOut();
    user.value = null;
  } catch (error) {
    console.error(error);
  }
};

const signUp = async (email, password) => {
  try {
    const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      user.value = response.user;
    } catch (error) {
      console.error(error);
    }
};

export {
  user,
  login,
  logout,
  signUp,
};
