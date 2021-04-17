import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPo1_uLW6UdfP8r8x5UhDRb_B3NLpIfOw",
    authDomain: "facebook-clone-cb69f.firebaseapp.com",
    projectId: "facebook-clone-cb69f",
    storageBucket: "facebook-clone-cb69f.appspot.com",
    messagingSenderId: "246170069613",
    appId: "1:246170069613:web:d78e42b4cae72812bbed64",
    measurementId: "G-0XPHRN2EXW"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();


  export {auth,provider};
  export default db;