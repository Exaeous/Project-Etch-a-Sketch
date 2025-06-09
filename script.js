"use strict";

const container = document.querySelector(".container");

function createGrid(squaresPerSide) {
  const totalSize = 600;
  const squareSize = totalSize / squaresPerSide;

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }
}

createGrid(16);
