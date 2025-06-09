"use strict";

let userDesiredGrid = 0;

const container = document.querySelector(".container");

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
