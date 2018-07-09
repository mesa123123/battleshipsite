/*
* A function that takes the Co-ordinates from the page and stores them in an
* array.
*/

function createTargets(grid, userSelection, attacksetting){
    var shotsFired = [];
    if (attacksetting == "column"){
        for (var i = 0; i < 10; i++){
          shotsFired.push([i,userSelection.y]);
        }
    } else if (attacksetting == "row"){
        for (var j = 0; j < 10; j++){
          shotsFired.push([userSelection.x,j]);
        }
    } else {
        shotsFired.push([userSelection.x, userSelection.y]);
        shotsFired.push([userSelection.x - 1, userSelection.y - 1]);
        shotsFired.push([userSelection.x + 1, userSelection.y + 1]);
        shotsFired.push([userSelection.x + 1, userSelection.y - 1]);
        shotsFired.push([userSelection.x -1, userSelection.y +1]);
        shotsFired.push([userSelection.x -1, userSelection.y]);
        shotsFired.push([userSelection.x +1, userSelection.y]);
        shotsFired.push([userSelection.x, userSelection.y +1]);
        shotsFired.push([userSelection.x, userSelection.y -1]);
    }
    return shotsFired;
}


module.exports = {
  createTargets: createTargets,
}
