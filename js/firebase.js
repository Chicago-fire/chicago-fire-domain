
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  const firebaseConfig = {
  apiKey: "AIzaSyApZrpSHIDDpQxzO2gwyoZbXOThW6_eQZI",
  authDomain: "chicago-fire-domain.firebaseapp.com",
  databaseURL: "https://chicago-fire-domain-default-rtdb.firebaseio.com",
  projectId: "chicago-fire-domain",
  storageBucket: "chicago-fire-domain.firebasestorage.app",
  messagingSenderId: "751369922488",
  appId: "1:751369922488:web:539e44732fbb699f61914d"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
