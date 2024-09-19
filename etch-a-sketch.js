const grid = document.querySelector('.grid');
const reset = document.querySelector('#reset');
const defaultColor = document.querySelector('#default');
const randomColor = document.querySelector('#color');

//Selecting the slider and the label that adjusts the grid size
const resolutionInput = document.querySelector('#resolutionInput');
const resolutionLabel = document.querySelector('.resolutionLabel');
let numSquares = 8; //Initial size of the grid


//changeGrid Function runs when the user changes the grid size using the slider
function changeGrid() {
    numSquares = e.target.value; //Update the numSquares variable with the new value from the slider
    resolutionLabel.textContent = `${numSquares}x${numSquares}`;
}       //numSquares refers to the size (initial size set to 8x8)

//Adding Event Listener to the slider 
resolutionInput.addEventListener('input', changeGrid);

//createGrid function creates the grid with the specified number of squares
function createGrid() {
    let gridSize = (numSquares * numSquares); //calculates total number of squares

    for (let i = 0; i < gridSize; i++) { //Loop to create each grid square
        const gridDiv = document.createElement('div') //creates a new div for every square  
        gridDiv.className = 'box' //each new square div is assigned to the 'box' class
        gridDiv.addEventListener('mouseover', changeColor);
        //Added an Event Listener to each square so that it changes color when it is hovered
        grid.appendChild(gridDiv); //Appended child to the container
}

grid.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`
grid.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`
}

createGrid(numSquares);

  
