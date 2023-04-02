/*global chrome*/

import React from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";

import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";

import { firebaseApp } from "../popup/firebase_config";
import {
  getAuth,
  onAuthStateChanged,
  signInWithCredential,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(firebaseApp);

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(undefined);

  const handleGoogleAuth = (interactive) => {
    console.log("Start auth with Google");
    chrome.identity.getAuthToken({ interactive: true }, function (token) {
      if (chrome.runtime.lastError && !interactive) {
        console.log("It was not possible to get a token programmatically.");
      } else if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else if (token) {
        const credential = GoogleAuthProvider.credential(null, token);
        signInWithCredential(auth, credential)
          .then((result) => {
            console.log("Register/Sign in with Google Successful");
            console.log(result);
            navigate("/home");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.error("The OAuth token was null");
      }
    });
  };

  const { handleSubmit, handleChange, touched, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ email, password }) => {
      console.log("submit:");

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Successfully created user:", user);
          navigate("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error registering:", error.message);
        });
    },
  });

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user && user.uid ? user : null);
      if (user != null) {
        console.log("[Register] User is logged in:");
        console.log(user);
        navigate("/home");
      } else {
        console.log("[Register] No user logged in!");
      }
    });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="login-body">
          <div>Register</div>
          {/* <button onClick={handleClick}>Test btn</button> */}
          <button onClick={() => handleGoogleAuth(true)}>
            Continue with Google
          </button>
          <form className="email-form" onSubmit={handleSubmit}>
            <TextField
              id="email"
              name="email"
              label="Email"
              fullWidth
              value={values.email}
              onChange={handleChange}
            />

            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              value={values.password}
              onChange={handleChange}
            />

            <Button type="submit" variant="contained">
              Register with Email
            </Button>
          </form>

          <div className="register-option">
            <Link to="/login">Already have an account?</Link>
            <Navigate to="/login">Test nav</Navigate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
