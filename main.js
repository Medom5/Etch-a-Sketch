const contH = 500;
const contW = 500;
let container = document.getElementsByClassName("container")[0];
container.style.cssText = `width : ${contW}px; height : ${contH}px;`;



for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let div = document.createElement("div");
    div.classList.add("grid-div");
    div.style.height = contH / 16 + "px";
    div.style.width = contW / 16 + "px";
      div.addEventListener("mouseenter", () => { div.style.backgroundColor = "black"; } )
      div.addEventListener("click", () => div.style.backgroundColor ="")
      container.append(div);
  }
}
