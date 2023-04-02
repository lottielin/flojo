/*global chrome*/

import React from "react";
import { useNavigate, Link } from "react-router-dom";

import { firebaseApp } from "../popup/firebase_config";
import {
  getAuth,
  onAuthStateChanged,
  signInWithCredential,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(firebaseApp);

const Home = () => {
  const [user, setUser] = React.useState(undefined);
  const navigate = useNavigate();

  const handleSignout = () => {
    console.log("[Home] Signing out");
    auth.signOut();
    navigate("/login");
  };

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user && user.uid ? user : null);
    });
  }, []);
  return (
    <div>
      <div className="container">Home</div>
      <h1>Signed in as {user ? user.email : ""}.</h1>
      <button onClick={handleSignout}>Sign Out?</button>
    </div>
  );
};

export default Home;
