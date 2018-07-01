/*jslint esversion: 6*/

var compSelect = require('../src/website_script').compSelect;

function test_comp_Select(){
  var test_1 = compSelect(1,7);
  if(!isNaN(test_1) || (test_1 > 0 && test_1 < 7) ){
    return true;
  } else {
    return false;
  }
}

var testResults = {
  test1: test_comp_Select(),
};

function printResults(){
  for (var member in testResults){
    console.log(member + " " + testResults[member]);
  }
}
printResults();
