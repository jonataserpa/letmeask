import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID
    apiKey: "AIzaSyDcjGAfbTMRRAeu6LjJ4yMaEbU58UjiK1A",
    authDomain: "letmeask-8e81f.firebaseapp.com",
    databaseURL: "https://letmeask-8e81f-default-rtdb.firebaseio.com",
    projectId: "letmeask-8e81f",
    storageBucket: "letmeask-8e81f.appspot.com",
    messagingSenderId: "903769000280",
    appId: "1:903769000280:web:d2bf95d9a87dbb00c63d2d"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }