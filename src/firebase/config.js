import firebase from "firebase/compat/app";
import 'firebase/auth';


export const firebaseConfig = {
    apiKey: "AIzaSyAjYw52VZiOjtAIn8d2EZFWwN7n0PdYkO8",
    authDomain: "en-shop-60497.firebaseapp.com",
    projectId: "en-shop-60497",
    storageBucket: "en-shop-60497.appspot.com",
    messagingSenderId: "512304823298",
    appId: "1:512304823298:web:9e7866cb3a9768862bfb1b"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);