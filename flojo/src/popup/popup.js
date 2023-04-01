/*global chrome*/

import React from "react";
import "./popup.css";

import { RouterProvider, createHashRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

import Register from "../pages/register";
import Login from "../pages/login";
import Home from "../pages/home";

const history = createMemoryHistory();

const router = createHashRouter([
  { path: "/", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
]);

const Popup = () => {
  return (
    <div>
      <RouterProvider router={router} history={history} />
    </div>
  );
};

export default Popup;
