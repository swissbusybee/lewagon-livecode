// todo
const button = document.querySelector('#show-hint');
const hint = document.querySelector('.hint');

button.addEventListener('click', (event) => {
  hint.classList.toggle("active");
});

// Steps
// Select all tiles
const tiles = document.querySelectorAll('td');


// Read location of tile (loc1)

// Check if there is empty space (loc2) next to tile
const checkMovability = (tile) => {
  const col = tile.cellIndex;
  const row = tile.parentElement.rowIndex;
  const emptyTile = document.querySelector('.empty');
  const colEmpty = emptyTile.cellIndex;
  const rowEmpty = emptyTile.parentElement.rowIndex;
  if ((rowEmpty === col && Math.abs(rowEmpty - row) === 1) ||
   (rowEmpty === row && Math.abs(colEmpty - col) === 1)) {
      return true;
  }
 }

// Swap loc1 and loc2 content
const moveTiles = (tile) => {
  const emptyTile = document.querySelector('.empty');
  emptyTile.classList.remove("empty");
  emptyTile.innerHTML = tile.innerHTML;
  tile.classList.add("empty");
  tile.innerHTML = '';
}

// Check if game is over
const checkWin = () => {
// in all td's the numebers are increasing and sequential
  const tiles = document.querySelectorAll('td');
  const winningString = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15';
  const testString = Array.from(tiles).map((cell) => {
    return cell.innerHTML;
  }).join(',');
  if (winningString === testString) {
    alert("You Win!!!!");
  }
}


tiles.forEach( (tile) => {
  tile.addEventListener("click", (event) => {
    // console.log("I clicked.", event);
    if (checkMovability(tile)) {
      console.log("I'm inside!");
      moveTiles(tile);
      checkWin();
    }

  });
});
