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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;