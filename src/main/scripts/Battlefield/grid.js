/*
* A function that represents the grid for the battlefeild; will keep track of
* hits and misses etc.
*/

function makeGrid(){
  var grid = [];
  while(grid.push(new Array(10)) < 10);
  for(var i = 0; i < grid.length; i++){
    for(var j = 0; j < grid[i].length; j++){
      grid[i][j] = 0;
    }
  }
  return grid;
}

function Grid() {
  this.attacksetting = "group",
  this.grid = makeGrid(),
  this.attackColumn = function() { this.attacksetting = "column"; },
  this.attackRow = function() { this.attacksetting = "row"; },
  this.attackGroup = function() {this.attacksetting = "group"; };
}


module.exports = {
  Grid: Grid,
}
