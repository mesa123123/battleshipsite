/*
* A function that takes the Co-ordinates from the page and stores them in an
* array.
*/

function createTargets(grid, userSelection){
    var shotsFired = [];
    if (grid.attacksetting == "column"){
        for (var i = 0; i < 10; i++){
          shotsFired.push([i,userSelection.y]);
        }
    } else if (grid.attacksetting == "row"){
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

/*
A function that will do the math of calculating hits misses etc.
*/

function calcShot(shotArray, userSelection, Grid) {
      var shotArray = createTargets(userSelection, Grid);
      /*This is an array that will stack up the hits and misses
       and repeats*/
      var tally = [0, 0, 0];
      for(var i = 0; i < shotArray.length; i++){
        for(var j = 0; j < shotArray[i].length){
          if(Grid.grid[i][j] == 0){
              // throw a miss
          } else if(Grid.grid[i][j] == -1){
            // throw a repeat hit
          } else {
            // throw a hit
          }
        }
      }
      return [Grid,tally];
}


module.exports = {
  createTargets: createTargets,
  calcShot: calcShot,
}
