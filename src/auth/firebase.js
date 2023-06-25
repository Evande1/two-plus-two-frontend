import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAdOcSrsM51MMzer0rs6zEvSJovTepkr9c",
    authDomain: "two-plus-two-a8466.firebaseapp.com",
    projectId: "two-plus-two-a8466",
    storageBucket: "two-plus-two-a8466.appspot.com",
    messagingSenderId: "723701734193",
    appId: "1:723701734193:web:49828b205b84d8f4132e10",
    measurementId: "G-KYVYDY2HST"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);