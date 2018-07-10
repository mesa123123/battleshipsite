var createGrid = require('./BattleField/grid').Grid;
var createTargets = require('./AttackScripts/CalcShots').createTargets;
var calcShot = require('./AttackScripts/CalcShots').calcShot;
var userSelection = require('./UserCommands/Selection').userSelection;

//Elements that are pulled straight from the document
var tableView = document.getElementById('battleGrid');
var consoleView = document.getElementById('intelTerminal');

/*
* The functions in this script will act as the controller for the model classes
* that are imported above. The Table and ConsoleViews will actas event handlers
*/
