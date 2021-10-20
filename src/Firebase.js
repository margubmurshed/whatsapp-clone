import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAX9lWYMQgvesT9QDdd_AmFR8MoBpiMERA",
    authDomain: "margubwhatsappclone.firebaseapp.com",
    projectId: "margubwhatsappclone",
    storageBucket: "margubwhatsappclone.appspot.com",
    messagingSenderId: "267518670974",
    appId: "1:267518670974:web:47c440afd257a2219dc02f",
    measurementId: "G-JJZ8CSXC7J"
  };

const FirebaseInit = Firebase.initializeApp(firebaseConfig);
export const FirebaseAuth = FirebaseInit.auth();
export const FirebaseDB = FirebaseInit.firestore();
export const Provider = new Firebase.auth.GoogleAuthProvider();