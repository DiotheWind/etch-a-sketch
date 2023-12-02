const gridContainer = document.querySelector("#grid-container");
// const changeGridSize = document.querySelector("#change-grid-size");
const slider = document.querySelector("#slider")
const clearGridBtn = document.querySelector("#clear-grid");

let gridSizeValue = 16; 
let toDraw;  // Flag variable for the hold click

generateGrid(gridSizeValue);
gridContainer.onmousedown = () => toDraw = true; // The user can shade the cell if
gridContainer.onmouseup = () => toDraw = false;  // the mouse was on hold click inside that specific cell

// changeGridSize.addEventListener("click", () => {
//     const gridSizeValuePrompt = prompt("Enter grid size between 10 and 64");
//     if (gridSizeValuePrompt >= 10 && gridSizeValuePrompt <= 64) {
//         gridSizeValue = gridSizeValuePrompt;
//         clearGrid();
//         generateGrid(gridSizeValue);
//     } else {
//         alert("Invalid grid size.");
//     }
// });
slider.addEventListener("input", () => {
    gridSizeValue = slider.value;
    clearGrid();
    generateGrid(gridSizeValue);
})

clearGridBtn.addEventListener("click", () => {
    clearGrid();
    generateGrid(gridSizeValue);
});

function generateGrid(gridSize) {
    for (let i = 1; i <= gridSize; i++) {  // Generate rows of container for the cell
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 1; j <= gridSize; j++) {  // Generates cells to be stored inside the row container
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.setAttribute("id", "cell");
            cell.addEventListener("mouseenter", () => {
                if (toDraw) {
                    cell.classList.add("cell-change-color");  // The cell changes color if the ToDraw flag variable is set to True
                }
            });
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
}

function clearGrid() {gridContainer.innerHTML = "";}



