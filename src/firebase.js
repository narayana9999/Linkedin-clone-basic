import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAJcAc2S1plKfxd-ZZnjl6Ct-MRiMM2vOI",
    authDomain: "linkedin-clone-1bcb7.firebaseapp.com",
    projectId: "linkedin-clone-1bcb7",
    storageBucket: "linkedin-clone-1bcb7.appspot.com",
    messagingSenderId: "428030567361",
    appId: "1:428030567361:web:06c504c37b4df95f4a0540"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  const auth = firebaseApp.auth()

  export {auth};
  export default db;