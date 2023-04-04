/*global chrome*/

import React from "react";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        Explore some prompts
        <button onClick={() => navigate("/home")}>Back to home</button>
      </div>
    </div>
  );
};

export default Explore;
