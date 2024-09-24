type = "randomColorMode";
const grid = document.querySelector('.grid');
const reset = document.querySelector('#reset');
const defaultColor = document.querySelector('#default');
const randomColor = document.querySelector('#color');

//Selecting the slider and the label that adjusts the grid size
const resolutionInput = document.querySelector('#resolutionInput');
const resolutionLabel = document.querySelector('.resolutionLabel');
let numSquares = 8; //Initial size of the grid

//Adding Event Listener to the slider 
resolutionInput.addEventListener('input', changeGrid);

//changeGrid Function runs when the user changes the grid size using the slider
function changeGrid(e) {
    numSquares = e.target.value; //Update the numSquares variable with the new value from the slider
    resolutionLabel.textContent = `${numSquares}x${numSquares}`;
       //numSquares refers to the size (initial size set to 8x8) 
}


//createGrid function creates the grid with the specified number of squares
function createGrid() {
    let gridSize = (numSquares * numSquares); //calculates total number of squares

    for (i = 0; i < gridSize; i++) { //Loop to create each grid square
        let gridDiv = document.createElement('div') //creates a new div for every square  
        gridDiv.className = 'box' //each new square div is assigned to the 'box' class
        gridDiv.addEventListener('mouseover', changeColor);
        //Added an Event Listener to each square so that it changes color when it is hovered
        grid.appendChild(gridDiv); //Appended child to the container
}
//Sets the grid layout to a number of rows and columns equal to numSquares (dynamic Grid layout)
grid.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`
grid.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`
}

createGrid(numSquares);

//resetGrid resets the grid size when the button is clicked
function resetGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild); //deletes old size
    } 
    createGrid(numSquares); //creates the new sized grid
}
reset.addEventListener('click', resetGrid);

//changeColor Function changes the color of the grid square when hovered
function changeColor(e) {
    //If the random color mode is active, this will generate a random RGB color
    if (type === "randomColorMode") {
        const randomR = Math.floor(Math.random() * 256) //Random Red Value
        const randomG = Math.floor(Math.random() * 256) //Random Green Value
        const randomB = Math.floor(Math.random() * 256) //Random Blue Value

        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } //This sets the background color of the hovered square to the random color
    else if (type === "defaultColorMode") { //If default color mode is active then it will set the color to light blue
        e.target.style.backgroundColor = 'lightblue';
    }
};

  //Added event listener to the default button to activate default color mode (blanking the canvas)
defaultColor.addEventListener("click", function() {
    //setting color mode to default
    type = "defaultColorMode";
    //Adding an active class to visually indicate that the default button is active
    this.classList.add("active");
    //Removing the active class from the random color button
    randomColor.classList.remove("active");
});

//Adding event listener to the random color button to activate random color mode
randomColor.addEventListener("click", function() {
    //Setting color mode to random
    type = "randomColorMode";
    //Adding an active class to visually indicate that the random color button is active
    this.classList.add("active");
    //Removing the active class from the default color button
    defaultColor.classList.remove("active");
});

//Adding the active class to visually indicate that a button is active is referring to
//when someone clicks on a button, the button will glow,change colors,show a border, etc
//to indicate that it is selected. We can edit that using css

