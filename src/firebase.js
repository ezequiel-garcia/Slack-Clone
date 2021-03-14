import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrKVom6qmHwKlst7qDcCC3yNlf6wm9Y3Q",
  authDomain: "slack-clone-8509a.firebaseapp.com",
  projectId: "slack-clone-8509a",
  storageBucket: "slack-clone-8509a.appspot.com",
  messagingSenderId: "205734623829",
  appId: "1:205734623829:web:3dce6bd85550518cb1f2dc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
