"use strict";

const container = document.querySelector(".container");

for (let i = 0; i <= 16; i++) {
  const grids = document.createElement("div");
  grids.classList.add("grids");
  container.appendChild(grids);
}
