import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyBYEu5TDcDajAQuzjliSBvdcf6LUkJ0lb4",
    authDomain: "forumapp-a.firebaseapp.com",
    projectId: "forumapp-a",
    storageBucket: "forumapp-a.appspot.com",
    messagingSenderId: "669729433784",
    appId: "1:669729433784:web:9221aa26cef83e9f6bac4d",
    measurementId: "G-89V7ZT4NVD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;