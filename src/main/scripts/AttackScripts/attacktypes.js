/* Attack Type Settings */
/* Variables that will track what type of bomb to drop */
function attackStyle() {
  this.attacksetting = "group",
  this.attackColumn = function() { this.attacksetting = "column"; },
  this.attackRow = function() { this.attacksetting = "row"; },
  this.attackGroup = function() {this.attacksetting = "group"; };
};

module.exports = {
  attackStyle: attackStyle,
};
