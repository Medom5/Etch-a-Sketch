const contH = 600;
const contW = 600;
let container = document.getElementsByClassName("container")[0];
container.style.cssText = `width : ${contW}px; height : ${contH}px;`;

generateGrid(16);

function generateGrid(n) {
    container.innerHTML = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let div = document.createElement("div");
            div.classList.add("grid-div");
            div.style.height = contH / n + "px";
            div.style.width = contW / n + "px";
            div.addEventListener("mouseenter", () => { div.style.backgroundColor = "black"; })
            div.addEventListener("click", () => div.style.backgroundColor = "")
            container.append(div);
        }
    }
}

let button = document.getElementById("size");
button.addEventListener("click", () => {
    let size = window.prompt("Enter the size (e.g. 16 will be 16*16 grid)")
    if (size > 0 && size <= 100)
        generateGrid(size);
})

