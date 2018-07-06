/*
* Functions that deal with the user selection of the type and co-ordinates
* that the user chooses to attack
*/

/* Attack Type Settings */
/* Variables that will track what type of bomb to drop */
var attacksetting = "group";
var attackstyle = {
  group: "group",
  row: "row",
  column: "column",
};

/* functions that control these values */
function attackColumn(){
  attacksetting = attackstyle.column;
}

function attackRow(){
  attacksetting = attackstyle.row;
}

function attackGroup(){
  attacksetting = attackstyle.group;
}

/*
* A function that takes the Co-ordinates from the page and stores them in an
* array.
*/
