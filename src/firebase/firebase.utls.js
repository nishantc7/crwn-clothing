import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const config = {
    apiKey: "AIzaSyBMJ6_FujrqtclZkeBbaDSGMYPMKtvVo1U",
    authDomain: "crwn-db-716d9.firebaseapp.com",
    databaseURL: "https://crwn-db-716d9.firebaseio.com",
    projectId: "crwn-db-716d9",
    storageBucket: "crwn-db-716d9.appspot.com",
    messagingSenderId: "668640006380",
    appId: "1:668640006380:web:52f76599e99030611755c9",
    measurementId: "G-E59F6K9LZW"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;