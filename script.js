const grid = document.querySelector(".grid");

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
    grid.appendChild(div);
  }
};

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const slider = document.querySelector("#slider");
const screenVal = document.querySelector(".value");
slider.addEventListener("input", function () {
  let val = document.getElementById("slider").value;
  screenVal.textContent = val;
  removeChildNodes(grid);
  grid.setAttribute(
    "style",
    `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`
  );
  for (let i = 0; i < val * val; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
    grid.appendChild(div);
  }
});

const erase = document.querySelector("#erase");
erase.addEventListener("click", function () {
  let val = document.getElementById("slider").value;
  let cell = grid.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].style.backgroundColor = "black";
  }
});

const vivid = document.querySelector("#vivid");
vivid.addEventListener("click", function () {
  let val = document.getElementById("slider").value;
  let cell = grid.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = getRandomColor();
    });
  }
});

const white = document.querySelector("#white");
white.addEventListener("click", function () {
  let val = document.getElementById("slider").value;
  let cell = grid.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "white";
    });
  }
});

const customColor = document.querySelector("#color");
customColor.addEventListener("input", function () {
  let val = document.getElementById("slider").value;
  let newColor = document.getElementById("color").value;
  let cell = grid.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = newColor;
    });
  }
});

createGrid();
