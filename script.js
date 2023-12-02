const displayGridSize = document.querySelectorAll(".grid-size")
const gridContainer = document.querySelector("#grid-container");
const slider = document.querySelector("#slider");
const eraseBtn = document.querySelector("#eraser");
const colorBtn = document.querySelector("#color-picker");
const clearGridBtn = document.querySelector("#clear-grid");

let gridSizeValue; 
let color;
let toDraw;  
let toErase;  

// Default Values
gridSizeValue = 32;
color = "#808080";
toErase = false; 

generateGrid(gridSizeValue);
gridContainer.onmousedown = () => toDraw = true; // The user can shade the cell if
gridContainer.onmouseup = () => toDraw = false;  // the mouse was on hold click inside that specific cell

slider.addEventListener("input", () => {
    gridSizeValue = slider.value;
    updateGridSizeText(slider.value);
    clearGrid();
    generateGrid(gridSizeValue);
});

eraseBtn.addEventListener("click", () => {
    if (toErase) {
        toErase = false;
        eraseBtn.style.border = "none";
    } else {
        toErase = true
        eraseBtn.style.border = "3px solid black";
    }
});

colorBtn.addEventListener("input", () => {
    color = colorBtn.value;
});

clearGridBtn.addEventListener("click", () => {
    clearGrid();
    generateGrid(gridSizeValue);
});

function updateGridSizeText(value) {
    for (const text of displayGridSize) {
        text.textContent = value;
    }
}

function generateGrid(gridSize) {
    for (let i = 1; i <= gridSize; i++) {  // Generate rows of container for the cell
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 1; j <= gridSize; j++) {  // Generates cells to be stored inside the row container
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.addEventListener("mouseenter", () => {
                if (toDraw) {
                    toErase == true ? cell.style.backgroundColor = "#FFFFFF" : cell.style.backgroundColor = color;  // The cell changes color or delete color 
                                                                                                                    //  if the ToDraw flag variable is set to True
                }
            });
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
}

function clearGrid() {gridContainer.innerHTML = "";}



