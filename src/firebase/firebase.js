import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database';





  const config = {
    apiKey: "AIzaSyDCn0Qr3GVxVhnzXBOs5ZUuqCqB3pBgD0M",
    authDomain: "pwa-firebase-auth.firebaseapp.com",
    databaseURL: "https://pwa-firebase-auth.firebaseio.com",
    projectId: "pwa-firebase-auth",
    storageBucket: "",
    messagingSenderId: "311383812751"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  const db = firebase.database();
  const auth = firebase.auth();

export {
    db,
  auth,
};