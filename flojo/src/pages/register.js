/*global chrome*/

import React from "react";
import { useNavigate, Link } from "react-router-dom";

import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";

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

const Register = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = React.useState("");

  //   const handleClick = () => {
  //     chrome.runtime.sendMessage({ commmand: "registerUser" }, (resp) => {
  //       console.log(resp);
  //     });
  //   };

  const handleGoogle = (interactive) => {
    console.log("Google login");
    chrome.identity.getAuthToken({ interactive: true }, function (token) {
      if (chrome.runtime.lastError && !interactive) {
        console.log("It was not possible to get a token programmatically.");
      } else if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else if (token) {
        const credential = GoogleAuthProvider.credential(null, token);
        signInWithCredential(auth, credential)
          .then((result) => {
            console.log("Success!!!");
            console.log(result);
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
      chrome.runtime.sendMessage(
        {
          commmand: "registerUser",
          data: { email: email, password: password },
        },
        (resp) => {
          console.log(resp);
          return true;
        }
      );
      //   nav("/home");

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Successfully created user:", user);
          // navigate("/home");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error registering:", error.message);
        });
    },
  });

  return (
    <div>
      <div className="container">
        <div className="login-body">
          <div>Register</div>
          {/* <button onClick={handleClick}>Test btn</button> */}
          <button onClick={() => handleGoogle(true)}>
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
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />

            <Button type="submit" variant="contained">
              Log in with Email
            </Button>
            <div className="text-red-600 text-sm">
              {loginError ? loginError : null}
            </div>
          </form>

          <div className="register-option">
            Not a member? <Link to="/register">Join ArtToday</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
