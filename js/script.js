"use strict";

const button = document.querySelector(".button");
const color = document.querySelectorAll(".color");
const hex = document.querySelectorAll(".hex");

button.addEventListener("click", generatePalatte);

function generatePalatte() {
  for (let i = 0; i < 6; i++) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log("#" + randomColor);

    color[i].style.backgroundColor = "#" + randomColor;
    hex[i].textContent = "#" + randomColor;
  }
}

