import { auth, db } from "./firebase.js";

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {

if (!user) return;

document.getElementById("memberEmail").textContent = user.email;

const ref = doc(db, "members", user.uid);

const snap = await getDoc(ref);

if (snap.exists()) {

const data = snap.data();

document.getElementById("welcome").textContent =
`Welcome, ${data.name}`;

document.getElementById("memberLevel").textContent =
`Membership: ${data.membership}`;

}

});
