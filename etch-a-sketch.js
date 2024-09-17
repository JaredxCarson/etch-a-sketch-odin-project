
const container = document.getElementById('container');

function createSquares() {
for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
}
};

createSquares();
  
