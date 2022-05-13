import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase, set, ref, onValue,update } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyCn2nNKG_m42AGv3UK4VHGJX12k74ZmerY",
    authDomain: "todo-5d49d.firebaseapp.com",
    databaseURL: "https://todo-5d49d-default-rtdb.firebaseio.com",
    projectId: "todo-5d49d",
    storageBucket: "todo-5d49d.appspot.com",
    messagingSenderId: "918822236874",
    appId: "1:918822236874:web:1738cef036775edcd5fa33"
};


const app = initializeApp(firebaseConfig);
let database = getDatabase(app);

export {database,set,ref,update,onValue};














