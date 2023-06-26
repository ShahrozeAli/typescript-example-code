class Point {
  x: number;
  y: number;
  constructor(x?: number, y?: number) {
    // in ts we can't have multiple constructors
    //making values optional, so object doesn't throw error if params are missing
    this.x = x !== undefined ? x : 0;
    this.y = y !== undefined ? y : 0;
  }

  draw() {
    console.log("X = ", this.x, " Y = ", this.y);
  }

  getDistance(point: Point) {}
}

// let point: Point = new Point(); //initializes memory to it
// let point = new Point(); //initializes memory to it
let point = new Point(1, 2); //initializes memory to it

// point.x = 1;
// point.y = 2;
point.draw();
