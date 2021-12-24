// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYnNna_Ec3SzMmuk0FNTQ-LSLHj6EikP4",
  authDomain: "hastane-otomasyonu-e218f.firebaseapp.com",
  projectId: "hastane-otomasyonu-e218f",
  storageBucket: "hastane-otomasyonu-e218f.appspot.com",
  messagingSenderId: "225559173321",
  appId: "1:225559173321:web:7022ca188fb1d341665518"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);
export{app};