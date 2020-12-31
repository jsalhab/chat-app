import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

 var firebaseConfig = {
    apiKey: "AIzaSyDHNnubNu1Zts81XskI2o2ZNB2LsccC3Iw",
    authDomain: "slack-chat-app-ee9f7.firebaseapp.com",
    projectId: "slack-chat-app-ee9f7",
    storageBucket: "slack-chat-app-ee9f7.appspot.com",
    messagingSenderId: "488076776922",
    appId: "1:488076776922:web:463465bdc7797843985ce3",
    measurementId: "G-WGGEXH62C6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;