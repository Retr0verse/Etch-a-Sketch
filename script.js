const container = document.getElementById('container');

function createGrid (rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', cols);
    for (var i = 0; i < rows * cols; i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-cell';
    };
};

createGrid(16, 16);