var Grid = require('../main/scripts/Battlefield/grid').Grid;

function test_grid_length(){
    var testGrid = new Grid();
    if(testGrid.grid.length == 10){
      results = true;
    }
    else {
      results = false;
    }
    return results;
}

function test_gridvector_length(){
  var testGrid =  new Grid();
  result = true;
  for(var i = 0; i < testGrid.grid.length; i++){
    if(testGrid.grid[i].length != 10){
      result = false;
    }
  }
  return result;
}

function test_gridIsPopulated() {
    var testGrid = new Grid();
    return  testGrid.grid[Math.floor(Math.random() *10)][Math.floor(Math.random() *10)] == 0;
}

module.exports = {
  test_grid_length: test_grid_length,
  test_grid_vectorlength: test_gridvector_length,
  test_gridIsPopulated: test_gridIsPopulated,
};
