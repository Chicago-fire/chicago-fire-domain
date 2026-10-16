import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
doc,
setDoc
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const signup=document.getElementById("signupForm");

if(signup){

signup.addEventListener("submit",async(e)=>{

e.preventDefault();

const name=document.getElementById("name").value;

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

const user=await createUserWithEmailAndPassword(auth,email,password);

await setDoc(doc(db,"members",user.user.uid),{

name,

email,

membership:"Premium",

createdAt:new Date()

});

location.href="dashboard.html";

});

}
const login = document.getElementById("loginForm");

if (login) {

login.addEventListener("submit", async (e) => {

e.preventDefault();

const email = document.getElementById("email").value;

const password = document.getElementById("password").value;

try {

await signInWithEmailAndPassword(auth, email, password);

window.location = "dashboard.html";

}

catch (error) {

alert(error.message);

}

});

}
import {

signOut

}

from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const logout = document.getElementById("logout");

if (logout) {

logout.onclick = async () => {

await signOut(auth);

window.location = "login.html";

};

}
