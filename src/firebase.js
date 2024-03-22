import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDlLx7QHvBSB4AP9XbQYzK2RkSxeShyxV4",
  authDomain: "heybuddy-1c167.firebaseapp.com",
  projectId: "heybuddy-1c167",
  storageBucket: "heybuddy-1c167.appspot.com",
  messagingSenderId: "220760264346",
  appId: "1:220760264346:web:0eac0d80b807b1a25c1923"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export {db, auth, provider, doc, setDoc};