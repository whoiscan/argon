import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyC1XdPAVrtsgr2LKwDYxmCMWtIPPXJCdTs",
    authDomain: "argon-a2794.firebaseapp.com",
    projectId: "argon-a2794",
    storageBucket: "argon-a2794.appspot.com",
    messagingSenderId: "336035200262",
    appId: "1:336035200262:web:4050c99f47a99a9196b287",
    measurementId: "G-SMC99XDFG5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;