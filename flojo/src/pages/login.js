/*global chrome*/

import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Link } from "@mui/material";

import { firebaseApp } from "../popup/firebase_config";
import {
  getAuth,
  onAuthStateChanged,
  signInWithCredential,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(firebaseApp);

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = React.useState("");

  const LoginSchema = Yup.object({
    email: Yup.string().required("Required").email("Invalid email"),
    password: Yup.string().required("Required"),
  });

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
    validationSchema: LoginSchema,
    onSubmit: ({ email, password }) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Successfully logged in user (email login):", user);
          navigate("/home");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error signing in:", error.message);
          switch (errorCode) {
            case "auth/user-not-found":
              setLoginError("User not found.");
              break;
            case "auth/wrong-password":
              setLoginError("Wrong password.");
              break;
            case "auth/too-many-requests":
              setLoginError("Too many login requests.");
              break;
            default:
              setLoginError(errorMessage);
          }
        });
    },
  });

  React.useEffect(() => {
    // auth.onAuthStateChanged((user) => {
    //   if (user != null) {
    //     console.log("[Login] User is logged in:", user);
    //     navigate("/home");
    //   } else {
    //     console.log("[Login] No user logged in!");
    //   }
    // });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="login-body">
          <div>Login</div>
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
              Log in with Email
            </Button>
          </form>

          <div className="register-option">
            <Link to="/">Don't have an account yet?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
