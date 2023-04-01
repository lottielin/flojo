/*global chrome*/

import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const handleBtnClick = () => {
    // chrome.runtime.sendMessage({ commmand: "basic" }, (resp) => {
    //   console.log(resp);
    // });
    nav("/home");
  };

  return (
    <div>
      <div className="container">
        Login
        <button class="btn" onClick={handleBtnClick}>
          Jump to home
        </button>
      </div>
    </div>
  );
};

export default Login;
