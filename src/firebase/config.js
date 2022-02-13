import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyARnH5BN69OSA8IjLGM_LpSlEkGlslv4OQ",
    authDomain: "mymoney-16522.firebaseapp.com",
    projectId: "mymoney-16522",
    storageBucket: "mymoney-16522.appspot.com",
    messagingSenderId: "718803329879",
    appId: "1:718803329879:web:db5c81ad311d03c12b9412"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig);

  // init service
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();

  export { projectFirestore, projectAuth };