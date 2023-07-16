const gridContainer = document.querySelector("#grid-container");
const changeGridSize = document.querySelector("#change-grid-size");
const clearGridBtn = document.querySelector("#clear-grid");

let gridSizeValue = 16;
generateGrid(gridSizeValue);

changeGridSize.addEventListener("click", () => {
    const gridSizeValuePrompt = prompt("Enter grid size between 10 and 64");
    if (gridSizeValuePrompt >= 10 && gridSizeValuePrompt <= 64) {
        gridSizeValue = gridSizeValuePrompt;
        clearGrid();
        generateGrid(gridSizeValue);
    } else {
        alert("Invalid grid size.")
    }
});

clearGridBtn.addEventListener("click", () => {
    clearGrid();
    generateGrid(gridSizeValue);
});

function generateGrid(gridSize) {
    for (let i = 1; i <= gridSize; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 1; j <= gridSize; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.setAttribute("id", "cell")
            cell.addEventListener("mouseover", () => cell.classList.add("cell-change-color"))
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
}

function clearGrid() {gridContainer.innerHTML = "";}

