const MAX_GRID_NUM = 100;
const container = document.querySelector("#container");
let lightness = 100;

function paintColor(e){
    if (lightness > 0) lightness -= 2;
    const hue = Math.floor(Math.random()*1000)%360; 
    const color = `hsl(${hue}, 100%, ${lightness}%)`;
    e.target.style["background-color"] = color;
    e.target.style["border-color"] = color;
}

function addGridContainer(){
    const gridContainer = document.createElement("div");
    gridContainer.setAttribute("id", "grid-container");
    container.append(gridContainer);
    return gridContainer;
}

function addNewGrid(gridNum){
    lightness = 100;
    container.removeChild(container.lastChild);
    const gridContainer = addGridContainer();
    container.style["border"] = "0px";

    for (let i = 0; i < gridNum; i++){
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        rowDiv.setAttribute("id", `row_${i}`);
        for (let j = 0; j < gridNum; j++){
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("column");
            columnDiv.setAttribute("id", `col-${j}`)
            rowDiv.appendChild(columnDiv);
        }
        rowDiv.addEventListener("mouseover", paintColor);
        gridContainer.appendChild(rowDiv);
    }
    container.appendChild(gridContainer);
}

function createGrid(){
    const input = Number(prompt("Enter the number of grid in each side: "));
    if (Number.isInteger(input) && input>0 && input<=MAX_GRID_NUM) addNewGrid(input);
    else alert("Invalid input");
}
addGridContainer();
addEventListener("click", createGrid)