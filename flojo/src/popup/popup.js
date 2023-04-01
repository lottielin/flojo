/*global chrome*/

import React from "react";
import "./popup.css";

import Basic from "../components/basic";
const Popup = () => {
  const handleBtnClick = () => {
    chrome.runtime.sendMessage({ commmand: "basic" }, (resp) => {
      console.log(resp);
    });
  };
  return (
    <div>
      <div className="container">
        Hello World
        <Basic />
        <button class="btn" onClick={handleBtnClick}>
          Interact with background
        </button>
      </div>
    </div>
  );
};

export default Popup;
