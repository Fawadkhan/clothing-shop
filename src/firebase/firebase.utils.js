import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDQp_wAOBnj6hh6L-F7Q3dDIiWywhQLV0Q",
    authDomain: "clothing-db-6b381.firebaseapp.com",
    projectId: "clothing-db-6b381",
    storageBucket: "clothing-db-6b381.appspot.com",
    messagingSenderId: "1095607932624",
    appId: "1:1095607932624:web:271f19f1eacc329bb430d5",
    measurementId: "G-BFKKR9FVR6"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message)
    }
  }
  console.log(snapShot)
  return userRef;
}

export default firebase;