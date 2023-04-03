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

// const journalRef = firebaseDb.collection("journals");
// SET; /journals/<userEmail>/<dateCreated>
// {prompt, entry, dateUpdated}
const addJournal = () => {};

// UPDATE; /journals/<userEmail>/<dateCreated>/<timeUpdated>
// {prompt, entry, timeUpdated}
const updateJournal = (user, date, prompt, entry) => {
  var userEmail = user.email;
  var timeUpdated = getTime();
  const userJournalRef = doc(
    firebaseDb,
    "journals",
    userEmail,
    date,
    timeUpdated
  );
  const journalData = {
    prompt: prompt,
    entry: entry,
    timeUpdated: Timestamp.fromDate(new Date()),
  };
  setDoc(userJournalRef, journalData).then(() => {
    console.log("Updated journal:", journalData);
  });
};

// Uncaught (in promise) FirebaseError: Invalid collection reference.
// Collection references must have an odd number of segments,
// but journals/test1@gmail.com has 2.
// GET; /journals/<userEmail>/<dateCreated>
const getJournal = async (user, date) => {
  var userEmail = user.email;
  //   var timeUpdated = getTime();
  const userJournalRef = collection(firebaseDb, "journals", userEmail, date);
  const docSnap = await getDocs(userJournalRef);
  docSnap.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};

// GET; /journals/<userEmail>
const getJournals = () => {};

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

export { addJournal, updateJournal, getJournal };
