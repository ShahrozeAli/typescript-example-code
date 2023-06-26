var a;
var b;
var c;
var d;
var e = [1, 2, 3]; //number array
var f = [1, true, "a", false]; //any array
var Color;
(function (Color) {
  //enum in js
  Color[(Color["red"] = 0)] = "red";
  Color[(Color["green"] = 1)] = "green";
  Color[(Color["blue"] = 2)] = "blue";
})(Color || (Color = {}));
var bgColor = Color.green;
