/*global chrome*/

import React from "react";
import { useNavigate } from "react-router-dom";
import { firebaseApp } from "../popup/firebase_config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  getJournal,
  updateJournal,
  getJournalsbyEmail,
} from "../components/dbUtils";
import TextField from "@mui/material/TextField";

const auth = getAuth(firebaseApp);
const Today = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(undefined);
  const [prompt, setPrompt] = React.useState("");
  const [entry, setEntry] = React.useState("");
  const [date, setDate] = React.useState("");

  React.useEffect(() => {
    setDate(getDate());
    auth.onAuthStateChanged((user) => {
      setUser(user && user.uid ? user : null);
      console.log("Start retrieving journal in useEffect: ");
      getJournal(user, date, setPrompt, setEntry);
    });
  }, []);

  const getDate = () => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    return date;
  };

  const handleSave = () => {
    updateJournal(user, date, prompt, entry);
  };

  return (
    <div>
      <div className="container">
        <div>Today's journal</div>
        <TextField
          id="standard-basic"
          variant="standard"
          value={prompt}
          //   defaultValue
          fullWidth
          onChange={(e) => setPrompt(e.target.value)}
          autoFocus={false}
          disableUnderline={true}
        />
        <TextField
          id="outlined-multiline-flexible"
          multiline
          fullWidth
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Start writing here..."
          disableUnderline={true}
        />
        <button onClick={handleSave}>Save journal</button>
        <button onClick={() => navigate("/home")}>Back to home</button>
      </div>
    </div>
  );
};

export default Today;
