"use strict";

const container = document.querySelector(".container");
const generateGridButton = document.querySelector(".generate-grid-button");

function createGrid(squaresPerSide) {
  container.innerHTML = "";
  const totalSize = 600;
  const squareSize = totalSize / squaresPerSide;

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    let square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);

    square = document.querySelectorAll(".grid-square");
    square.forEach((grid) => {
      grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "black";
      });
    });
  }
}

generateGridButton.addEventListener("click", () => {
  let input = prompt("Enter grid size (1-100):", "16");
  let size = parseInt(input);
  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }
  createGrid(size);
});

createGrid(16);
