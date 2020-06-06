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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
      const {displayName, email} = userAuth
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName, email, createdAt, ...additionalData
        })
      } catch (error) {

        console.log('there was a error creating user', error.message);

      }
    }
    return userRef;

}


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);

  })
  return await batch.commit();
}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;