const container = document.querySelector(".container");
const btnCreateDiv = document.querySelector("#createDiv");

btnCreateDiv.addEventListener("click", () => {
  createDiv();
}); // Callback btn Create DIV

function createDiv() {
  let num = prompt("Insert the amount of squares");
  let pixel = num * num;
  let percentStyle = 100 / num;

  for (let i = 0; i < `${pixel}`; i++) {
    if (num > 100) {
      alert("Please DO NOT enter a number greater than 100");
      break;
    } else {
    }

    const divElement = document.createElement("div");
    divElement.style.width = `${percentStyle}%`;
    divElement.style.height = `${percentStyle}%`;
    divElement.style.border = "1px solid #ccc";
    divElement.style.borderColor = "black";
    divElement.style.boxSizing = "border-box";

    divElement.addEventListener("mouseover", () => {
      divElement.style.backgroundColor = "green";
    });

    container.appendChild(divElement);
  }
}
