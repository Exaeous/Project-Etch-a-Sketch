"use strict";

let userDesiredGrid = 0;

const container = document.querySelector(".container");

const generateButton = document
  .querySelector(".generate-button")
  .addEventListener("click", () => {
    userDesiredGrid = parseInt(prompt("How many grid tiles do you want?", 16));
  });

for (let i = 1; i <= 16; i++) {
  let defaultGrid = document.createElement("div");
  defaultGrid.classList.add("default-grid");
  container.appendChild(defaultGrid);
  container.style.width = "204px";
  container.style.height = "204px";

  defaultGrid.style.width = "50px";
  defaultGrid.style.height = "50px";

  defaultGrid = document.querySelectorAll(".default-grid");
  defaultGrid.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "black";
    });
  });
}
