const container = document.querySelector(".container");
const btnCreateDiv = document.querySelector("#createDiv");

btnCreateDiv.addEventListener("click", () => {
  createDiv();
}); // Callback btn Create DIV

function createDiv() {
  // num = prompt("Insert the amount of squares");

  for (let i = 0; i < 256; i++) {
    const divElement = document.createElement("div");
    divElement.style.width = "6.25%";
    divElement.style.height = "6.25%";
    divElement.style.border = "1px solid #ccc";
    divElement.style.borderColor = "black";
    divElement.style.boxSizing = "border-box";

    container.appendChild(divElement);
  }
}
