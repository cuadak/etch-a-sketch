let size = 16; //Default grid size
const container = document.querySelector("#container"); //Select grid container

function newGridSize() {
  let newSize = prompt(`What new grid size do you want?
Please input between 2 to 100`);
  if (newSize < 2 || newSize > 100) {
    alert("Please reinput the grid size");
    console.log(newSize);
  } else {
    size = newSize;
    console.log(size);
  }
  removeGrid();
  gridSize();
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBoxColor(event) {
  const box = event.target;
  const randomColor = getRandomColor(); // Get a random color
  box.style.backgroundColor = randomColor;
  box.removeEventListener("mouseover", changeBoxColor);
}

function gridSize() {
  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseover", changeBoxColor);
    container.appendChild(box);
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      box.style.width = `calc(100% / ${size})`;
      box.style.height = `calc(100% / ${size})`;
    });
  }
}

function removeGrid() {
  const grid = container.querySelectorAll(".box");
  grid.forEach((box) => {
    container.removeChild(box);
  });
}

gridSize();
