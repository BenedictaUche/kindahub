// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_API_KEY,
    authDomain: "kindahub-644d6.firebaseapp.com",
    projectId: "kindahub-644d6",
    storageBucket: "kindahub-644d6.appspot.com",
    messagingSenderId: "1057452284114",
    appId: "1:1057452284114:web:334edf9eb2556f5de0b50b",
    measurementId: "G-7YDB0NYJTP",
    databaseURL: 'https://kindahub-644d6-default-rtdb.firebaseio.com'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export default database;
