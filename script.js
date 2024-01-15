const container = document.querySelector('.container');

const createGrid = function(gridWidth, gridHeight) {
    
    container.style.height = (gridHeight) * 25 + "px";
    container.style.width = (gridWidth) * 25 + "px";

    for (let i = 0; i < (gridWidth * gridHeight); i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        container.appendChild(gridSquare);
    }
    
};

createGrid(24, 24);

let gridSquareColor = document.querySelector('.grid-square');

gridSquareColor.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "black";

});

