import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";


  var firebaseConfig = {
    apiKey: "AIzaSyDLF3yly6Dr0S2sB7zla-lW6hGQQ0R03wo",
    authDomain: "finalproject-71c0b.firebaseapp.com",
    projectId: "finalproject-71c0b",
    storageBucket: "finalproject-71c0b.appspot.com",
    messagingSenderId: "81000433050",
    appId: "1:81000433050:web:cd1c8ebe5b46728c30e623"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  export default fire;
