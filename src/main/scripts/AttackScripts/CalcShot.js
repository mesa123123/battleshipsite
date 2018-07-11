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

function calcShot(shotArray, userSelection, Grid, scoreCard) {
      var shotArray = createTargets(userSelection, Grid);
      /*This is an array that will stack up the hits and misses
       and repeats*/
      for(var i = 0; i < shotArray.length; i++){
        for(var j = 0; j < shotArray[i].length){
          if(Grid.grid[shotArray[i]][shotArray[j]] == 0){
              //This is the value for misses, they will be displayed on the baord for one turn
              Grid.grid[shotArray[i]][shotArray[j]] = -3;
              scoreCard.misses = scoreCard.misses + 1;
              scoreCard.remaining = scoreCard.remaining - 1;
          } else if(Grid.grid[shotArray[i]][shotArray[j]] == 1){
              //This is the value for hits, they will be displayed on the board for one turn
              Grid.grid[shotArray[i]][shotArray[j]] = -2;
              scoreCard.hits = scorecard.hits + 1;
              scoreCard.remaining = scoreCard.remaining - 1;
          } else if(Grid.grid[shotArray[i]][shotArray[j]] == -2 || Grid.grid[shotArray[i]][shotArray[j]] == -3){
              //This is the value that will show hits that have been made more than one turn ago,
              //Hits and misses will be dislayed on the board for one turn
              Grid.grid[shotArray[i]][shotArray[j]] = -1;
          }
        }
      }
      return [Grid,scoreCard];
}


module.exports = {
  createTargets: createTargets,
  calcShot: calcShot,
}
