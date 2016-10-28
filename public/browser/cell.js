function Cell(xPos,yPos){
  this.x = xPos
  this.y = yPos
  this.weight = 0
  this.status = 'unexplored' 
  this.id = this.x.toString()+','+this.y.toString()
  this.parent = null
  this.direction = 'UP'
  this.distance = Infinity
} 

Cell.prototype.getCellStatus = function(){
  return this.status
}

module.exports = Cell
