import { db } from "./firebase.js";

import {
collection,
getDocs,
query,
orderBy
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const box = document.getElementById("announcementList");

const q = query(
collection(db,"announcements"),
orderBy("createdAt","desc")
);

const snap = await getDocs(q);

snap.forEach(doc=>{

const a = doc.data();

box.innerHTML += `

<div class="card">

<h3>📢 Announcement</h3>

<p>${a.message}</p>

</div>

`;

});
