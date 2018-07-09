/*
* A function that represents the grid for the battlefeild; will keep track of
* hits and misses etc.
*/

function createGrid() {
  var grid = [];
  while(grid.push(new Array(10)) < 10);
  for(var i = 0; i < grid.length; i++){
    for(var j = 0; j < grid[i].length; j++){
      grid[i][j] = 0;
    }
  }
  return grid;
}


module.exports = {
  createGrid: createGrid,
}
