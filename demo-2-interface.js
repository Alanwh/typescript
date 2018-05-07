/**
 * 接口 interface
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printLable(lableObj) {
    console.log(lableObj.lable);
}
var lableObj = { name: 'alan', lable: 'hahaha', age: 11 };
var lableObj1 = { name: 'alan', lable: 22, age: 11 };
var lableObj2 = { name: 'alan', age: 11 };
printLable(lableObj);
function printLable1(lableObj) {
    console.log(lableObj.lable);
}
printLable1(lableObj);
function selectValue(selectObj) {
    var newSpure = { color: 'white', area: 100 };
    if (selectObj.color) {
        newSpure.color = selectObj.color;
    }
    if (selectObj.width) {
        newSpure.area = selectObj.width * selectObj.width;
    }
    return newSpure;
}
var mySelect = selectValue({ color: 'black' });
// let mySelect1 = selectValue({color : 'black',opacity : 1});    -> 未定义属性，报错
var mySelect2 = selectValue({ color: 'black', opacity: 1 }); // -> 断言可以绕开检查
var optVlu = { color: 'black', opacity: 1 };
var mySelect3 = selectValue(optVlu); // -> 赋值给另外变量可绕开检查
var p1 = { x: 10, y: 20 };
// p1.x = 15;    -> 只读属性不能修改，报错
var a = [2, 4, 5, 8];
var b = a;
a[0] = 10;
// b[0] = 15;    -> 只读属性不能修改，报错
// b.length = 10;    -> 只读属性不能修改，报错
// b.push(4);    -> 只读属性不能修改，报错
var c = [1, 2];
// c = b;    -> 只读属性不能赋值，报错
c = b; //类型断言可以实现赋值
var Search;
Search = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ['Bob', 'Alan'];
var myStr = myArray[0];
var readonlyArray = ['Bob', 'Alan'];
// readonlyArray[2] = 'Tom';    -> 只读索引禁止赋值
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setDate = function (d) {
        this.currentTime = d;
    };
    ;
    ;
    return Clock;
}());
var ccc = {};
ccc.name = 'alan';
ccc.age = 12;
ccc.contry = 'China';
function GetCounter() {
    var counter = function (start) { };
    counter.interval = 12;
    counter.reset = function () { };
    return counter;
}
var couter = GetCounter();
couter(10);
couter.interval = 5;
