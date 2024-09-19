const contH = 600;
const contW = 620;
let container = document.getElementsByClassName("container")[0];
container.style.cssText = `width : ${contW}px; height : ${contH}px;`;

generateGrid(34);

function generateGrid(n) {
  container.innerHTML = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let div = document.createElement("div");
      div.classList.add("grid-div");
      div.style.height = contH / n + "px";
      div.style.width = contW / n + "px";
      div.addEventListener("mouseenter", () => blackMode);
      container.append(div);
    }
  }
}

let button = document.getElementById("size");
button.addEventListener("click", () => {
  let size = window.prompt("Enter the size (e.g. 16 will be 16*16 grid)");
  if (size > 0 && size <= 100) generateGrid(size);
});

let random = document.getElementById("random");
let divs = document.getElementsByClassName("grid-div");

random.addEventListener("click", () => {
  Array.from(divs).forEach((element) => {
      element.removeEventListener("mouseenter", () => blackMode);
      element.addEventListener("mouseenter", randomColors)
  });
});

let clear = document.getElementById("clear");

clear.addEventListener("click", () =>
  Array.from(divs).forEach((e) => (e.style.backgroundColor = ""))
);

let black = document.getElementById("black");

black.addEventListener("click", () => {
  Array.from(divs).forEach((e) => {
      e.removeEventListener("mouseenter", randomColors);
      e.addEventListener("mouseenter", blackMode);
  });
});

function blackMode(e) {
  e.target.style.backgroundColor = "black";
}

function randomColors(e) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
