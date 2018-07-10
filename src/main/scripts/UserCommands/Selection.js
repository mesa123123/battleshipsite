/*
*  This is a class that will store the Cell on the grid the
*  User Has Selected.
*/

function userSelection(row, column) {
  this.x = row,
  this.y = column;
}

module.exports = {
  userSelection: userSelection,
}
