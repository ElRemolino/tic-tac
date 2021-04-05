console.log('well hello there')

let playerX = 'X';
let playerO = 'O';

//select all cells
const cellElements = document.querySelectorAll('[data-id]')
//add an event listener to each cell
cellElements.forEach(cell => {
  cell.addEventListener('click', handleClick, {once: true})
})

function handleClick(event) {
  console.log('click')
    // render current players text in the cell
    // reassign current cell
}
