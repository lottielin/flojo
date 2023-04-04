import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyoZbHYt5A3ktOwuuLxHSMGU6-_I2HLyc",
  authDomain: "flojo-ext.firebaseapp.com",
  projectId: "flojo-ext",
  storageBucket: "flojo-ext.appspot.com",
  messagingSenderId: "165900540315",
  appId: "1:165900540315:web:c620f21776073622bfe93e",
  measurementId: "G-VT955W2JFX",
};

// Initialize Firebase app and db
const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = getFirestore(firebaseApp);

const dbCollections = {
  USERS: "users",
  JOURNALS: "journals",
  PROMPTS: "prompts",
};

export { firebaseApp, firebaseDb, dbCollections };
