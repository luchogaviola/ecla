import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBtj6wgaTP3qXEyWJwWAH-aVOYwyqzGq68",
  authDomain: "ecla-ecommerce.firebaseapp.com",
  projectId: "ecla-ecommerce",
  storageBucket: "ecla-ecommerce.appspot.com",
  messagingSenderId: "1008019957952",
  appId: "1:1008019957952:web:0d0cc2311a663e7e1a2525"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)