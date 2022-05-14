import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "./database.js";

document.getElementById("signup-btn").addEventListener("click", () => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (email.value !== "" && password.value !== "") {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        console.log(auth.currentUser.email);
      })
      .catch((error) => {
        alert(error.message)
      });
    email.value = "";
    password.value = "";
  }

  else alert("Don't Leave Field Empty");
})

document.getElementById("signin-btn").addEventListener("click", () => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (email.value !== "" && password.value !== "") {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        console.log(auth.currentUser.email);
      })
      .catch((error) => {
        alert(error.message);
      });
    email.value = "";
    password.value = "";
  }
  else alert("Don't Leave Field Empty");
})

document.getElementById("signout-btn").addEventListener("click", () => {
  console.log(auth.currentUser.email);
  signOut(auth).then(() => {
  }).catch((error) => {
    alert(error.message);
  });
  document.location.reload(true);
})

