var userSelection = require('../main/scripts/UserCommands/Selection').userSelection;

function   testSimpleSelect() {
  var simpleSelect = new userSelection(4,5);
  if(simpleSelect.x == 4 && simpleSelect.y == 5) {
    return true;
  }
  return false;
}

module.exports = {
  testSimpleSelect: testSimpleSelect,
}
