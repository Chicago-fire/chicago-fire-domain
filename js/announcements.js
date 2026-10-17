import { db, auth } from "./firebase.js";

import {
collection,
addDoc,
serverTimestamp
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const btn = document.getElementById("postBtn");

btn.addEventListener("click", async () => {

const text = document.getElementById("announcement").value.trim();

if (!text) {
alert("Write something.");
return;
}

await addDoc(collection(db,"announcements"),{

message:text,

author:auth.currentUser.email,

createdAt:serverTimestamp()

});

alert("Announcement Posted!");

document.getElementById("announcement").value="";

});
