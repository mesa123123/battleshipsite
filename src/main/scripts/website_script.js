/* jslint evil: true, esversion: 6 */

// This grid will represent the sea where the game will take place
var grid = new Array(7);
// Prototype: A function that picks the computers ship placement
function compSelect(min, max){
  return Math.floor(Math.random()*7);
}
// Computer decides where ship will be placed
var shipPlace = compSelect(1,7);
// Computer Places ship within the sea
for(var i = 0; i < grid.length; i++){
  if(i == compSelect){
    grid[i] = 1;
  }
  else{
   grid[i] = 0;
  }
}
// variable i will act as a timer to show that the ship is getting ready to fire
var i = 3;
//variable that will terminate the game if the shpi is hit
var shipAlive = true;
//variable that says if you're dead
var playerAlive = true;
//Game Loop
function fireRound(){
  var selection = document.getElementById("fireConsole").value;
  selection--;
  if( shipAlive && playerAlive && (isNaN(selection) || grid[selection] == -1 || selection < 0 || selection > 6) ){
    document.getElementById("intelConsole").innerHTML = "Invalid Selection, Make another one";
  }
  else if ( playerAlive && shipAlive){
    i--;
    //Check the selection is valid and the User isn't bombing the same place
    //Case: Missed shot else: hit
    if(grid[selection] == 0){
      document.getElementById("Result").innerHTML = "It appears you missed, enemy ship still active";
      grid[selection] = -1;
    } else{
      document.getElementById("Result").innerHTML = "Direct hit! You've got the bastard!";
      shipAlive = false;
    }
    if(i > 0){
      //Messages that inform user of ship status; this creates dramatic effect
      switch(i){
        case 3:
            document.getElementById("intelConsole").innerHTML = "Radar has picked up an enemy ship;  Where should we fire?";
          break;
        case 2:
            document.getElementById("intelConsole").innerHTML = "Enemy Ship Loading Ammunition; Where should we fire?";
          break;
        case 1:
            document.getElementById("intelConsole").innerHTML = " Enemy Ship Taking Aim; Where should we fire?";
          break;
        default:
            document.getElementById("intelConsole").innerHTML = " Attained visuals on ship;  Where should we fire?";
        //Check the selection is valid and the User isn't bombing the same place
        //Case: Missed shot
      } //end of switch
    } else{
      result();
    }
  } else{
    result();
  }
}

function result(){
  //console summarizes the results of the Game
  //Lose
  if( shipAlive== true ){
    document.getElementById("intelConsole").innerHTML = (" It appears as though we gave them enough time to fire... \
    I believe, as it turns out, that you are quite dead... Sorry :/");
    playerAlive = false;
  }
  //Win
  else{
    document.getElementById("intelConsole").innerHTML = (" Bloody well done there! Were safe for another day!");
  }
}

module.exports = {
  compSelect: compSelect,
};
