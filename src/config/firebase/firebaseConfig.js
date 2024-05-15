import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj6jOEBl24ZzDR5gdQZz9phtkuyXbRFis",
  authDomain: "erp-thiago.firebaseapp.com",
  projectId: "erp-thiago",
  storageBucket: "erp-thiago.appspot.com",
  messagingSenderId: "367012377950",
  appId: "1:367012377950:web:dcef718e847d7c05d40bcf",
};

export const fbConfig = initializeApp(firebaseConfig);
export const fireStoreInit = getFirestore(fbConfig);
export const auth = getAuth(fbInit);
