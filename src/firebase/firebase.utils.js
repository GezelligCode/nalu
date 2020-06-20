import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBboPH---HCl_eBVx_5kaulzkdIOT2G4t4",
    authDomain: "papona-db-c466e.firebaseapp.com",
    databaseURL: "https://papona-db-c466e.firebaseio.com",
    projectId: "papona-db-c466e",
    storageBucket: "papona-db-c466e.appspot.com",
    messagingSenderId: "630253012060",
    appId: "1:630253012060:web:6a69f4af3ec872eefb1299",
    measurementId: "G-V5L5JQCYSL"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;