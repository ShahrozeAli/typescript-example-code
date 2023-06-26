class Point {
  //   private x: number;
  //   private y: number;
  constructor(private x?: number, private y?: number) {
    // in ts we can't have multiple constructors
    //making values optional, so object doesn't throw error if params are missing
    //ts auto initializes values with same name
    // this.x = x !== undefined ? x : 0;
    // this.y = y !== undefined ? y : 0;
  }

  public draw() {
    console.log("X = ", this.x, " Y = ", this.y);
  }

//   getX() {
  get X() {
    return this.x;
  }

//   setX(value) {
  set X(value) {
    if (value < 0) throw new Error("value can't be less than 0");
    this.x = value;
  }

  getDistance(point: Point) {}
}

// let point: Point = new Point(); //initializes memory to it
// let point = new Point(); //initializes memory to it
let point = new Point(1, 2); //initializes memory to it

// point.x = 1;
// point.y = 2;
// point.setX(10);
point.X(10);
point.draw();
