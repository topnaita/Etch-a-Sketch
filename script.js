const container = document.querySelector(".container");
const divElement = document.createElement("div");

// function setColor(event) {
//   return (divElement.style["backgroundColor"] = "green");
// }
divElement.setAttribute("style", "width: 16px; height: 16px");

divElement.addEventListener("mouseover", () => {
  divElement.style["backgroundColor"] = "green";
});

divElement.addEventListener("mouseout", () => {
  divElement.style["backgroundColor"] = "white";
});

container.appendChild(divElement);
