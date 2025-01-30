// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKg16bPCKAXQg83srx-w_iNCtQ5T2Cv0w",
    authDomain: "my-next-app-a0af6.firebaseapp.com",
    projectId: "my-next-app-a0af6",
    storageBucket: "my-next-app-a0af6.firebasestorage.app",
    messagingSenderId: "829127234364",
    appId: "1:829127234364:web:9a789884e0779f9a460439",
    measurementId: "G-9TQMTYYX2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = await isSupported().then(supported => supported ? getAnalytics(app) : null);

export default app;