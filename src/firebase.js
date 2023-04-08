import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


var firebaseConfig = {
    apiKey: "AIzaSyBeHNZ-rzJLbP_gs6d7wtRWcY_rRUlMjU0",
    authDomain: "iit-dhanbad-1cdaa.firebaseapp.com",
    databaseURL: "https://iit-dhanbad-1cdaa-default-rtdb.firebaseio.com",
    projectId: "iit-dhanbad-1cdaa",
    storageBucket: "iit-dhanbad-1cdaa.appspot.com",
    messagingSenderId: "746492742567",
    appId: "1:746492742567:web:5ab1af5a9fd25789be4482",
    measurementId: "G-WW5J83GL5C"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();