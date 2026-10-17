import { auth, db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const uploadBtn = document.getElementById("uploadBtn");

uploadBtn.addEventListener("click", async () => {

    const file = document.getElementById("image").files[0];

    if (!file) {
        alert("Select an image first.");
        return;
    }

    // Temporary placeholder until Storage is connected
    await addDoc(collection(db, "gallery"), {

        title: file.name,

        uploadedBy: auth.currentUser.email,

        createdAt: serverTimestamp()

    });

    document.getElementById("status").innerHTML =
        "Upload recorded successfully.";
});
