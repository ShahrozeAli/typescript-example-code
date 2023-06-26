class Point {
  x: number;
  y: number;

  draw() {
    console.log("X = ", this.x, " Y = ", this.y);
  }

  getDistance(point: Point) {}
}

// let point: Point = new Point(); //initializes memory to it
let point = new Point(); //initializes memory to it

point.x = 1;
point.y = 2;
point.draw();
