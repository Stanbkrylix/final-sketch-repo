`use strict`;

let gridSize;
let square = document.querySelector(".square");

const container1 = document.createElement("div");
const container = document.createElement("div");
document.body.appendChild(container1);
container1.setAttribute("class", "container1");
document.body.appendChild(container);
container.setAttribute("class", "container");
let mainContainer = document.querySelector(".container");

//random color function

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// grid functionality
function ui(gridNum = 16) {
  let squareDiv;
  let text;
  let dark;
  // loop for creating 16 div dynamically

  for (let i = 1; i < 1 + gridNum * gridNum; i++) {
    //create grid square
    squareDiv = document.createElement("div");
    text = document.createTextNode(`${i}`);
    container.appendChild(squareDiv);
    squareDiv.appendChild(text);
    squareDiv.setAttribute("class", "square");

    // to darken squareDiv
    dark = 100;
    squareDiv.addEventListener("mouseover", function (e) {
      e.target.style.cssText = `background-color:${randomColor()};`;
    });
  }
}

ui();

//Adding the button functionallity
function userButton() {
  //create button element
  let button = document.createElement("button");
  container1.appendChild(button);
  let text = document.createTextNode("Select Grid Size");
  button.appendChild(text);
  button.className = "btn";

  //default grid template
  mainContainer.style.cssText = `grid-template-columns: repeat(16, 45px);`;

  //Button click event Listener
  button.addEventListener("click", (e) => {
    gridSize = Number(
      prompt("how many square per side for the new grid would you like")
    );

    //Making sure grid number is less than 100

    if (gridSize > 100) {
      mainContainer.style.cssText = "display:flex";
      mainContainer.textContent = "Grid number must be less than 100";
    } else {
      mainContainer.style.cssText = `grid-template-columns: repeat(${gridSize}, 45px);`;
      mainContainer.textContent = "";
      ui(gridSize);
    }
  }); // End of button listener
}

// call button function
userButton();
