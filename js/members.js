
import { db } from "./firebase.js";

import {
collection,
getDocs
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const table = document.getElementById("memberTable");

const memberCount = document.getElementById("memberCount");

const premiumCount = document.getElementById("premiumCount");

const adminCount = document.getElementById("adminCount");

async function loadMembers(){

const snapshot = await getDocs(collection(db,"members"));

let total = 0;

let premium = 0;

let admins = 0;

snapshot.forEach(doc=>{

const data = doc.data();

total++;

if(data.membership==="Premium") premium++;

if(data.role==="admin") admins++;

table.innerHTML += `

<tr>

<td>${data.name||""}</td>

<td>${data.email||""}</td>

<td>${data.membership||"Standard"}</td>

<td>${data.role||"member"}</td>

</tr>

`;

});

memberCount.textContent = total;

premiumCount.textContent = premium;

adminCount.textContent = admins;

}

loadMembers();
