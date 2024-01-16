const container = document.querySelector('.container');

const body = document.querySelector('body');

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('.button-container');
body.appendChild(buttonContainer);

buttonContainer.style.height = '30px';
buttonContainer.style.widows = '30px';

const getGridSize = document.createElement('button');
getGridSize.style.fontSize = '20px';
getGridSize.textContent = 'Make a new grid';
getGridSize.style.padding = '20px';
getGridSize.style.margin = '10px';

buttonContainer.appendChild(getGridSize);

const createGrid = function() {
    let gridSize = Number(prompt("Enter pixel value for grid"));

    if (gridSize > 64) {
        alert("Too big, grid must be 64 pixels or below");
    } else {
        container.innerHTML = ""; 
        container.style.height = (gridSize) * 10 + "px";
        container.style.width = (gridSize) * 10 + "px";

        for (let i = 0; i < (gridSize * gridSize); i++) {
            gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            container.appendChild(gridSquare);
            gridSquare.addEventListener('mousedown', (e) => {
                e.target.style.backgroundColor = 'blue';
            });
        }
    };
};

getGridSize.addEventListener('click', createGrid);




