import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAGWp8OY9xuTVIc9S3lj-OoexsHGEZlLRw",
  authDomain: "e-ride-b5b3d.firebaseapp.com",
  projectId: "e-ride-b5b3d",
  storageBucket: "e-ride-b5b3d.appspot.com",
  messagingSenderId: "439685401894",
  appId: "1:439685401894:web:afb7e95d6fd6673202c5e7"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
