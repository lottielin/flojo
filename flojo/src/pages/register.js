/*global chrome*/

import React from "react";
import { useNavigate, Link } from "react-router-dom";

import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";

const Register = () => {
  const nav = useNavigate();
  const [loginError, setLoginError] = React.useState("");

  const { handleSubmit, handleChange, touched, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ email, password }) => {
      console.log("submit:");
      //   chrome.runtime.sendMessage({ commmand: "basic" }, (resp) => {
      //     console.log(resp);
      //   });
      //   nav("/home");

      //   signInWithEmailAndPassword(auth, email, password)
      //     .then((userCredential) => {
      //       // Signed in
      //       const user = userCredential.user;
      //       console.log("Successfully logged in user:", user);
      //       navigate("/home");
      //       // ...
      //     })
      //     .catch((error) => {
      //       const errorCode = error.code;
      //       const errorMessage = error.message;
      //       console.log("Error signing in:", error.message);
      //       switch (errorCode) {
      //         case "auth/user-not-found":
      //           setLoginError("User not found.");
      //           break;
      //         case "auth/wrong-password":
      //           setLoginError("Wrong password.");
      //           break;
      //         case "auth/too-many-requests":
      //           setLoginError("Too many login requests.");
      //           break;
      //         default:
      //           setLoginError(errorMessage);
      //       }
      //     });
    },
  });

  return (
    <div>
      <div className="container">
        <div className="login-body">
          <div>Log in with Email</div>
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
