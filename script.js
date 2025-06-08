"use strict";

const container = document.querySelector(".container");

const generateGridButton = document.querySelector(".generate-grid-btn");

let numberOfGrids = 0;

generateGridButton.addEventListener("click", () => {
  numberOfGrids = parseInt(prompt("Enter the number of grids you want"));
});

// Creating the grids
for (let i = 1; i <= 16; i++) {
  let grids = document.createElement("div");
  grids.classList.add("grids");
  container.appendChild(grids);

  // Changing color on mouse hover
  grids = document.querySelectorAll(".grids");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "black";
    });
  });
}
