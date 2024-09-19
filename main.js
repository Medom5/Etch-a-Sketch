let container = document.getElementsByClassName("container")[0];
let contH = 500;
let contW = 500;

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let div = document.createElement("div");
    div.classList.add("grid-div");
    div.style.height = contH / 16 + "px";
    div.style.width = contW / 16 + "px";
    container.append(div);
  }
}
