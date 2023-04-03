/*global chrome*/

import React from "react";
import "./popup.css";

import { RouterProvider, createHashRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

import Register from "../pages/register";
import Login from "../pages/login";
import Home from "../pages/home";
import Today from "../pages/today";
import Explore from "../pages/explore";

const history = createMemoryHistory();

const router = createHashRouter([
  { path: "/", element: <Register /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/today", element: <Today /> },
  { path: "/explore", element: <Explore /> },
]);

const Popup = () => {
  return (
    <div>
      <RouterProvider router={router} history={history} />
    </div>
  );
};

export default Popup;
