const container = document.querySelector('.container');

const body = document.querySelector('body');

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
body.appendChild(buttonContainer);

const getGridSize = document.createElement('button');
getGridSize.style.fontSize = '20px';
getGridSize.textContent = 'Make a new grid';
getGridSize.style.padding = '20px';
getGridSize.style.margin = '10px';

buttonContainer.appendChild(getGridSize);

const eraseGridButton = document.createElement('button');
eraseGridButton.style.fontSize = '20px';
eraseGridButton.textContent = 'Erase';
eraseGridButton.style.padding = '20px';
eraseGridButton.style.margin = '10px';
eraseGridButton.style.color = 'red';

buttonContainer.appendChild(eraseGridButton);

const defaultContainer = document.querySelector('.container');
defaultContainer.style.height = '240px';
defaultContainer.style.width = '240px';

const defaultGridSize = 48;

defaultContainer.style.height = (defaultGridSize) * 10 + "px";
defaultContainer.style.width = (defaultGridSize) * 10 + "px";

const createDefaultGrid = function() {

    for (let i = 0; i < (defaultGridSize * defaultGridSize); i++) {
        const defaultGrid = document.createElement('div');
        defaultGrid.classList.add('grid-square');
        defaultContainer.appendChild(defaultGrid);
        defaultGrid.addEventListener('mouseover', (e) =>  {
            e.target.style.backgroundColor = 'red';
        });
    }
}

createDefaultGrid();


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
            gridSquare.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'blue';
            });
        };
    };
};

eraseGridButton.addEventListener('click', () => {
    container.innerHTML = ""; 
    container.style.height = (defaultGridSize) * 10 + "px";
    container.style.width = (defaultGridSize) * 10 + "px";

    createDefaultGrid();
});

getGridSize.addEventListener('click', createGrid);




