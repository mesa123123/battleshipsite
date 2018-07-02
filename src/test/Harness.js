
var tests = [];
tests.push(require('./test_website_script').test_comp_Select);
tests.push(require('./gridTest').test_create_grid);


function printResults(){
  for (var member in tests){
    var result = tests[member]();
    console.log(result);
  }
}
printResults();
