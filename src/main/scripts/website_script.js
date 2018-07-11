var Grid = require('./BattleField/grid').Grid;
var createTargets = require('./AttackScripts/CalcShots').createTargets;
var calcShot = require('./AttackScripts/CalcShots').calcShot;
var userSelection = require('./UserCommands/Selection').userSelection;

//Elements that are pulled straight from the document
var tableView = document.getElementById('battleGrid');
var consoleView = document.getElementById('intelTerminal');

/*
* The functions in this script will act as the controlller/model for mechanical and creation scripts
* that are imported above. The Table and ConsoleViews will actas event handlers
*/


//These variables will act as a stored model of the page
var battleField = new Grid();
var scoreCard = {
  hits: 0,
  misses: 0,
  remaining: 100;
}

renderGrid();

function gridClickHandler(x, y) {
//Create the necessary functions to calculate the shot
  var selection = new userSelection(x, y);
  var targets = createTargets(Grid, selection);
  var doneShot = calcShot(targets, selection, Grid, scoreCard);

//Store shot stats in temporary variables
  score = doneShot[1];
  battleField = doneShot[0];

//Push the temporary variables into render arrays
  renderScore(score);
  renderGrid(battleField);

//Replace stored models of the page with
  this.score = score;
  this.battleField = battleField;

}

function renderGrid(battleField) {
    for(var i = 0; i < battleField.length; i++){
      for(var j = 0; j < battleField[i].length; j++){
        if(battleField[i][j] == -1){
            //change tr(i by id) and td(j by class) - disappear
        }
        else if(battleField[i][j] == -2){
          // make the border invisible and put the word "hit"
        }
        else if(battleField[i][j] == -3) {
          // put miss for one turn
        }
        else {
          // keep the tile the same
        }
      }
    }
    return battleField;
}

function renderScore(score) {
    //display hits

    //display misses

    //display remaining tiles

}
