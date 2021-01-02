import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyCwGHW5fmPPH4g2mlOS7pxMlpzRF_k3jC0',
    authDomain: 'linkedin-clone-f97ab.firebaseapp.com',
    projectId: 'linkedin-clone-f97ab',
    storageBucket: 'linkedin-clone-f97ab.appspot.com',
    messagingSenderId: '187847338760',
    appId: '1:187847338760:web:5368a0c4a1e5105cd45abd',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
