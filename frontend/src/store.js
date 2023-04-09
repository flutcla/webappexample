import { ref } from "vue";
import firebase from "./firebase";
import { db } from "@/firebase";

const user = ref(null);
const isAdmin = ref(false);
const isReady = ref(false);

firebase.auth().onAuthStateChanged(async (currentUser) => {
  user.value = currentUser;

  if (currentUser) {
    const userDoc = await db.collection("userInfo").doc(currentUser.uid).get();
    if (userDoc.exists) {
      isAdmin.value = userDoc.data().isAdmin || false;
    } else {
      isAdmin.value = false;
    }
  } else {
    isAdmin.value = false;
  }
  isReady.value = true;
});


const login = async (email, password) => {
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password);
    user.value = response.user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const logout = async () => {
  try {
    await firebase.auth().signOut();
    user.value = null;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const signUp = async (email, password) => {
  try {
    const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
    user.value = response.user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  user,
  isAdmin,
  isReady,
  login,
  logout,
  signUp,
};
