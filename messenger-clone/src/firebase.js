import firebase from "firebase";

const firbaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDZf8eBZPgwtuKJVTOcAwGZeD8meOoEtpA",
  authDomain: "facebook-messenger-clone-87a5b.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-87a5b.firebaseio.com",
  projectId: "facebook-messenger-clone-87a5b",
  storageBucket: "facebook-messenger-clone-87a5b.appspot.com",
  messagingSenderId: "252446463923",
  appId: "1:252446463923:web:cc8aa66ecd4eab392f5dc6",
  measurementId: "G-85VQB1HCLD",
});

const db = firbaseApp.firestore();

export default db;
