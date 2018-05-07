//boolean 
var isDone = false;
//number
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
//string
var englishName = "bob";
var age = 12;
var sentense = "\n\thello , my name is " + englishName + ".\n\tI'm " + age + ".\n";
//Array
var ages = [12, 14, 9];
var list = [12, 14, 10];
//Tuple
var x;
x = [12, 'hahaha'];
console.log(x[1].substr(0, 2));
x[3] = 12;
console.log(x);
//enum
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 3] = "blue";
})(Color || (Color = {}));
;
var a = Color.blue;
var b = Color.green;
var c = Color[1];
//any
var notSure = 4;
notSure = 'hahaha';
notSure = [2, 3, 3];
//void
function warnUser() {
    alert('This is my warning message');
}
var u = undefined;
var n = null;
//null and undefined
var U = undefined;
var N = null;
//Never
function error(messenge) {
    throw new Error(messenge);
}
function whileTrue() {
    while (true) {
    }
}
//类型断言
var someValue = 'this is a string';
var strLength = someValue.length;
var strLength = someValue.length;
