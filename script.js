"use strict";

const container = document.querySelector(".container");

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
