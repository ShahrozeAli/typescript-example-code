var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X = ", this.x, " Y = ", this.y);
    };
    Point.prototype.getDistance = function (point) { };
    return Point;
}());
// let point: Point = new Point(); //initializes memory to it
var point = new Point(); //initializes memory to it
point.x = 1;
point.y = 2;
point.draw();
