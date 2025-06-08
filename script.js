"use strict";

let numberOfGrids = 0;

// const defaultContainer = document.querySelector(".default-container");
const userGeneratedContainer = document.querySelector(
  ".user-generated-container"
);

const generateGridButton = document.querySelector(".generate-grid-btn");

generateGridButton.addEventListener("click", () => {
  numberOfGrids = parseInt(prompt("Enter the number of grids you want"));
  for (let i = 1; i <= numberOfGrids; i++) {
    let gridsByUser = document.createElement("div");
    gridsByUser.classList.add("grids-by-user");
    userGeneratedContainer.appendChild(gridsByUser);
  }
});

// for (let i = 1; i <= numberOfGrids; i++) {
//   let gridsByUser = document.createElement("div");
//   gridsByUser.classList.add("grids-by-user");
//   userGeneratedContainer.appendChild(gridsByUser);
// }

// Creating a 16x16 grid
// for (let i = 1; i <= 16; i++) {
//   let grids = document.createElement("div");
//   grids.classList.add("grids");
//   defaultContainer.appendChild(grids);

//   // Changing color on mouse hover
//   grids = document.querySelectorAll(".grids");
//   grids.forEach((grid) => {
//     grid.addEventListener("mouseover", () => {
//       grid.style.backgroundColor = "black";
//     });
//   });
// }
