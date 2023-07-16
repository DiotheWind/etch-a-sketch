const gridContainer = document.querySelector("#grid-container");
const changeGridSize = document.querySelector("#change-grid-size");
const clearGridBtn = document.querySelector("#clear-grid");

let gridSize = 16;

generateGrid();

changeGridSize.addEventListener("click", () => {
    gridContainer.innerHTML = "";
    const gridSizeValue = prompt("Enter grid size between 10 and 64");
    if (gridSizeValue >= 10 && gridSizeValue <= 64) {
        gridSize = gridSizeValue;
    } else {
        alert("Invalid grid size.")
    }
    generateGrid();
});

clearGridBtn.addEventListener("click", () => {
    gridContainer.innerHTML = "";
    generateGrid();
});

function generateGrid(){
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

