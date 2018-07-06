var createGrid = require('../main/scripts/Battlefield/grid').createGrid;


function test_grid_length(){
    var testGrid = createGrid();
    if(testGrid.length == 10){
      results = true;
    }
    else {
      results = false;
    }
    return results;
}

function test_gridvector_length(){
  var testGrid = createGrid();
  result = true;
  for(var i = 0; i < testGrid.length; i++){
    if(testGrid[i].length != 10){
      result = false;
    }
  }
  return result;
}

function test_gridIsPopulated() {
    var testGrid = createGrid();
    return  testGrid[Math.floor(Math.random() *10)][Math.floor(Math.random() *10)] == 0;
}

module.exports = {
  test_grid_length: test_grid_length,
  test_grid_vectorlength: test_gridvector_length,
  test_gridIsPopulated: test_gridIsPopulated,
};
