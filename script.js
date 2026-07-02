const container = document.querySelector(".container");
const divElement = document.createElement("div");
const btnCreateDiv = document.querySelector("#createDiv");

btnCreateDiv.addEventListener("click", () => {
  const num = prompt("Insert the amount of squares");

  for (let i = 0; i < num; i++) {
    if (num > 100) {
      alert("Do not enter a number grater than 100");
      break;
    } else {
    }
  }
});

divElement.addEventListener("mouseover", () => {
  divElement.style["backgroundColor"] = "green";
});

divElement.addEventListener("mouseout", () => {
  divElement.style["backgroundColor"] = "white";
});

divElement.style.width = "16px";
divElement.style.height = "16px";

container.appendChild(divElement);
