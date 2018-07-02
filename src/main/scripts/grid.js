

function createGrid(){
  var grid = [];
  while(grid.push(new Array(10)) < 10);
  return grid;
}


module.exports = {
  createGrid: createGrid,
}
