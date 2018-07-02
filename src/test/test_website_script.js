/*jslint esversion: 6*/

var compSelect = require('../main/scripts/website_script').compSelect;


function test_comp_Select(){
  var test_1 = compSelect(1,7);
  if(!isNaN(test_1) || (test_1 > 0 && test_1 < 7) ){
    return true;
  } else {
    return false;
  }
}

module.exports = {
  test_comp_Select: test_comp_Select,
}
