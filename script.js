const container = document.querySelector(".container");
const divElement = document.createElement("div");
const createDiv = document.querySelector("#createDiv");

divElement.style.width = "16px";
divElement.style.height = "16px";

divElement.addEventListener("mouseover", () => {
  divElement.style["backgroundColor"] = "green";
});

divElement.addEventListener("mouseout", () => {
  divElement.style["backgroundColor"] = "white";
});

container.appendChild(divElement);
