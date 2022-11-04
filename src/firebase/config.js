
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.APIKEY,
  authDomain: "coder-eccomerce.firebaseapp.com",
  projectId: "coder-eccomerce",
  storageBucket: "coder-eccomerce.appspot.com",
  messagingSenderId: "356015076651",
  appId: "1:356015076651:web:07331fa23e347f4222416e"
};


const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app