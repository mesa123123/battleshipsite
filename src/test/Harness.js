
var tests = [];
tests.push([require('./gridTest').test_grid_length, "Test_Grid_Length"]);
tests.push([require('./gridTest').test_grid_vectorlength,"Test_Vector_Length"]);
tests.push([require('./gridTest').test_gridIsPopulated, "test_gridIsPopulated"]);
tests.push([require('./UserSelectionTest').testSimpleSelect, "testSimpleSelect"]);


function printResults(){
  var fails = "||";
  for (var i = 0; i < tests.length; i++){
    var result = tests[i][0]();
    if (result == false){
      fails = fails + tests[i][1] + "|";
    }
  }
  if(fails.length == 2){
    return "All Passed";
  }
  else{
    return fails;
  }
}

console.log(printResults());
