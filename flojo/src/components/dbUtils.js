import {
  firebaseApp,
  firebaseDb,
  dbCollections,
} from "../popup/firebase_config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  Timestamp,
} from "firebase/firestore";

const getTime = () => {
  var date = new Date();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hour = date.getHours();
  return hour + ":" + minutes + ":" + seconds;
};
// const getDate = () => {
//   var today = new Date();
//   var date =
//     today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
//   return date;
// };
// ============ Journal ============

const journalRef = doc(firebaseDb, "flojo", "journals");
// const journalRef = firebaseDb.collection("journals");
// SET; /journals/<userEmail>/<dateCreated>
// {prompt, entry, dateUpdated}
const addJournal = () => {};

// UPDATE; doc: /flojo/journals/<userEmail>/<dateCreated>
// {prompt, entry, timeUpdated}
const updateJournal = (user, date, prompt, entry) => {
  var userEmail = user.email;
  // var timeUpdated = getTime();

  const userJournalRef = doc(journalRef, userEmail, date);
  const journalData = {
    prompt: prompt,
    entry: entry,
    timeUpdated: Timestamp.fromDate(new Date()),
  };
  setDoc(userJournalRef, journalData).then(() => {
    console.log("Updated journal:", journalData);
  });
};

// GET; collection: /flojo/journals/<userEmail>/<dateCreated>
// get most updated journal for today
const getJournal = async (user, date, setPrompt, setEntry) => {
  var userEmail = user.email;

  const dateJournalRef = collection(journalRef, userEmail, date);
  const docSnap = await getDocs(dateJournalRef);
  docSnap.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    setEntry(doc.data().entry);
    setPrompt(doc.data().prompt);
  });
};

// GET; /flojo/journals/<userEmail>
const getJournalsbyEmail = async (user, setAllJournals) => {
  var userEmail = user.email;
  var allJournals = [];
  const userJournalRef = collection(journalRef, userEmail);
  // const userJournalRef = collection(firebaseDb, "journals", userEmail, date);
  const docSnap = await getDocs(userJournalRef);
  docSnap.forEach((doc) => {
    allJournals.push(doc.data());
  });
  console.log(allJournals);
  setAllJournals(allJournals);
};

// DELETE; /journals/<userEmail>/<dateCreated>
const deleteJournal = () => {};

// ============ Prompts ============
// GET; /prompts/categories
const getCategories = () => {};
// update, delete

// GET; /prompts/promptByCategories
const getPromptByCat = () => {};
// update, delete

// GET; /prompts/promptByUsers
const getPromptByUser = () => {};
// update, delete

// ============ User ============

// GET; /users/<userEmail>
// {uid, subscription, notification, ...}
const addUser = () => {};

export { addJournal, updateJournal, getJournal, getJournalsbyEmail };
