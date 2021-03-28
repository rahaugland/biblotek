import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyDyG6Rs4_UeLGBsTXK6hcGsFFpQbsLs57g",
    authDomain: "biblotek.firebaseapp.com",
    databaseURL: "https://biblotek-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "biblotek",
    storageBucket: "biblotek.appspot.com",
    messagingSenderId: "485392325058",
    appId: "1:485392325058:web:ac27ae9e2158d4a0dc9e5b"
  };

firebase.initializeApp(firebaseConfig);
const firestore = firebase.app().firestore()
const storage = firebase.app().storage()

export  {
    firebaseConfig, firestore, storage, firebase as default
}
