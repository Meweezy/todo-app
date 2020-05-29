import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyChauZk7o7elT-_QSSe11jui8mmxX-OWco",
  authDomain: "todo-app-44e65.firebaseapp.com",
  databaseURL: "https://todo-app-44e65.firebaseio.com",
  projectId: "todo-app-44e65",
  storageBucket: "todo-app-44e65.appspot.com",
  messagingSenderId: "432765067293",
  appId: "1:432765067293:web:296b90f58b57e61293e6f4",
  measurementId: "G-LB5WBYC0L2",
});

const db = firebaseApp.firestore();

export default db;
