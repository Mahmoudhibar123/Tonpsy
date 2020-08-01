import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC4VN4M0H02XKzq2Rosg_usQ79aB7MXwGc",
  authDomain: "talkspace-b16b4.firebaseapp.com",
  databaseURL: "https://talkspace-b16b4.firebaseio.com",
  projectId: "talkspace-b16b4",
  storageBucket: "talkspace-b16b4.appspot.com",
  messagingSenderId: "178004466108",
};
firebase.initializeApp(config);
// firebase.firestore().settings({
//   timestampsInSnapshots: true,
// });

export const myFirebase = firebase;
export const myFirestore = firebase.firestore();
export const myStorage = firebase.storage();
