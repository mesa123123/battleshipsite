var createGrid = require('../main/scripts/grid').createGrid;

function test_create_grid(){
    var results = [];
    var testGrid = createGrid();
    if(testGrid.length == 10){
      results.push(true);
    }
    else {
      results.push(false);
    }
    if(testGrid[0].length == 10){
      results.push(true);
    }
    else{
      results.push(false);
    }
    return results;
}


module.exports = {
  test_create_grid: test_create_grid,
}
