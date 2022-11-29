let color = "black";
let coloringMode = true;
let mouseDown = false;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", colorSquare);
    square.addEventListener("mousedown", colorSquare);
    square.style.backgroundColor = "white";
    board.appendChild(square);
  }
}

populateBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    document.querySelector(".error").style.display = "none";
    populateBoard(input);
  } else {
    document.querySelector(".error").style.display = "flex";
    console.log("invalid input");
  }
}

function colorSquare(e) {
  console.log(`${e.type}`);
  console.log(`${mouseDown}`);
  if (!coloringMode || (e.type === "mouseover" && !mouseDown)) {
    return;
  } else {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

function changeMode() {
  coloringMode = !coloringMode;
  if (coloringMode) {
    document.querySelector(".mode").textContent = "Mode: coloring";
  } else {
    document.querySelector(".mode").textContent = "Mode: Not coloring";
  }
}
