const gridContainer = document.querySelector("#grid-container");

for (let i = 1; i <= 16; i++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 1; j <= 16; j++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.setAttribute("id", "cell")
        cell.addEventListener("mouseover", () => cell.classList.add("cell-change-color"))
        row.appendChild(cell);
    }
    gridContainer.appendChild(row);
}