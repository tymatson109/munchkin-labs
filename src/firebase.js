import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyANemb5SS-RWH8y-SJ_l8Q4DZ9pqds2_w0",
    authDomain: "munchkin-labs.firebaseapp.com",
    projectId: "munchkin-labs",
    storageBucket: "munchkin-labs.appspot.com",
    messagingSenderId: "55660525673",
    appId: "1:55660525673:web:16ca8997ddf547a991caf8",
    measurementId: "G-LBMM7KC67N"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export {db, auth, storage};