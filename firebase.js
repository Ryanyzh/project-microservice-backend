// firebase.js
const firebase = require('firebase/app');
require('firebase/firestore'); // Import Firestore
// Firebase configuration (replace with your Firebase project config)
const firebaseConfig = {
  apiKey: "AIzaSyCO9i51fID2Gj423PgsZtPDL_V0pISIURU",
  authDomain: "eti-assignment-1.firebaseapp.com",
  databaseURL: "https://eti-assignment-1-default-rtdb.firebaseio.com",
  projectId: "eti-assignment-1",
  storageBucket: "eti-assignment-1.appspot.com",
  messagingSenderId: "383262743301",
  appId: "1:383262743301:web:f67056785e64070b48356c",
  measurementId: "G-BW1YQGP4RL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = require('firebase/firestore');

module.exports = db;
