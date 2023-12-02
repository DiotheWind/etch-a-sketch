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
changeCursor("paint");

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
        changeCursor("paint");
    } else {
        toErase = true
        eraseBtn.style.border = "3px solid black";
        changeCursor("erase");
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
                    toErase ? cell.style.backgroundColor = "#FFFFFF" : cell.style.backgroundColor = color;  // The cell changes color or delete color if the mousedown while inside cell div
                }
            });
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
}

function changeCursor(type) {
    if (type === "paint") {
        gridContainer.style.cursor = "url('./Cursors/paint.cur'), auto";
    } else if (type === "erase") {
        gridContainer.style.cursor = "url('./Cursors/eraser.cur'), auto";
    }
}

function clearGrid() {gridContainer.innerHTML = "";}



