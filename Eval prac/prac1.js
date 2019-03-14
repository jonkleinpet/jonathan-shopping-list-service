// create and return and object, 2 properties x and y, with method that returns the position of the point (x,y)

function createObj(x, y) {
  return {
    x: x,
    y: y,
    position: function() {
      return `(${this.x},${this.y})`
    }
  }
}
