import React from "react";
import "./login.js";
import "./login.css";


export const Signin = () => {
  const $btnSignIn = document.querySelector(".sign-in-btn");
  const $btnSignUp = document.querySelector(".sign-up-btn"),
    $signUp = document.querySelector(".sign-up"),
    $signIn = document.querySelector(".sign-in");

  document.addEventListener("click", (e) => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
      $signIn.classList.toggle("active"), 
      $signUp.classList.toggle("active");
    }
  });
};
