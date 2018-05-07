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
/**
 * 类
 */
var Greeter = /** @class */ (function () {
    function Greeter(name) {
        this.greeting = name;
    }
    ;
    Greeter.prototype.greet = function () {
        console.log('hello ' + this.greeting);
    };
    ;
    return Greeter;
}());
var greeter = new Greeter('word');
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (moveMeter) {
        console.log("this animal is moved " + moveMeter + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.dark = function () {
        console.log('wolf ! wolf !');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.dark();
dog.move(10);
dog.dark();
var Animal1 = /** @class */ (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    Animal1.prototype.move = function (moveMetr) {
        if (moveMetr === void 0) { moveMetr = 0; }
        console.log(this.name + " is moved " + moveMetr + "m.");
    };
    return Animal1;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (moveMetr) {
        if (moveMetr === void 0) { moveMetr = 45; }
        console.log('snake is ...');
        _super.prototype.move.call(this, moveMetr);
    };
    return Snake;
}(Animal1));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (moveMetr) {
        if (moveMetr === void 0) { moveMetr = 20; }
        console.log('Horse is ...');
        _super.prototype.move.call(this, moveMetr);
    };
    return Horse;
}(Animal1));
var sam = new Snake('Sammy the Python');
var tom = new Horse('Tommy the Palomino');
sam.move();
tom.move(50);
/**
 * 公有/私有修饰符
 */
var Animal2 = /** @class */ (function () {
    function Animal2() {
    }
    Animal2.prototype.intr = function (name) {
        this.name = name;
        console.log("my name is " + name);
    };
    return Animal2;
}());
var cat = new Animal2();
// cat.name;    -> 私有属性不可访问
cat.intr('tom');
var Animal3 = /** @class */ (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    return Animal3;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, 'Rhino') || this;
    }
    return Rhino;
}(Animal3));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var anm3 = new Animal3('json');
var rhino = new Rhino();
var employee = new Employee('json');
anm3 = rhino;
// anm3 = employee;    -> 私有属性不相通
/**
 * protected
 */
var Animal4 = /** @class */ (function () {
    function Animal4(theName) {
        this.name = theName;
    }
    return Animal4;
}());
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance(name) {
        return _super.call(this, name) || this;
    }
    return Instance;
}(Animal4));
var ins = new Instance('Tom');
// ins.name; protected 属性不可访问，只可class类访问
var Animal5 = /** @class */ (function () {
    function Animal5(theName) {
        this.name = theName;
    }
    return Animal5;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(theName, placeMent) {
        var _this = _super.call(this, theName) || this;
        _this.place = placeMent;
        return _this;
    }
    Employee1.prototype.getPlace = function () {
        return this.name + " is from " + this.place;
    };
    return Employee1;
}(Animal5));
var howord = new Employee1('Join', 'beijing');
// let marry = new Animal5('Marry');    -> 构造函数被保护
/**
 * readonly
 */
var Animal6 = /** @class */ (function () {
    function Animal6(theName) {
        this.age = 12;
        this.name = theName;
    }
    return Animal6;
}());
var spider = new Animal6('hero');
// spider.name = 'Xiaoming';    -> 只读属性不可以改变
// spider.age = 16;    -> 只读属性不可以改变
/**
 * 参数属性
 */
var Animal7 = /** @class */ (function () {
    function Animal7(name) {
        this.name = name;
    }
    Animal7.prototype.move = function (moveMetr) {
        if (moveMetr === void 0) { moveMetr = 50; }
        return this.name + " is moved " + moveMetr + "m.";
    };
    return Animal7;
}());
var tiger = new Animal7('Pangpang');
tiger.move(100);
/**
* 存取器
*/
var Employee2 = /** @class */ (function () {
    function Employee2() {
    }
    return Employee2;
}());
var myEmployee = new Employee2();
myEmployee.fullName = 'Hello Ketty';
if (myEmployee.fullName) {
    console.log(myEmployee.fullName);
}
// const passcode : string = 'hello Ketty';
// class Emplyee3 {
// 	private _fullName : string;
// 	get fullName () : string {
// 		return this._fullName;
// 	}
// 	set fullName (newValue : string){
// 		if( passcode && 'hello Ketty' === passcode){
// 			this._fullName = newValue;
// 		}else{
// 			console.log('Error: Unauthorized update of employee!');
// 		}
// 	}
// }
// let employee3 = new Emplyee3();
// employee3.fullName = "Bob Smith";
// if (employee3.fullName) {
// 	alert(employee3.fullName);
// }
/**
 * 静态属性
 */
var grid = /** @class */ (function () {
    function grid(scale) {
        this.scale = scale;
    }
    grid.prototype.caculate = function (point) {
        var xDis = (point.x - grid.origin.x);
        var yDis = (point.y - grid.origin.y);
        return Math.sqrt(xDis * xDis + yDis * yDis) / this.scale;
    };
    ;
    ;
    grid.origin = { x: 0, y: 0 };
    return grid;
}());
var grid1 = new grid(1.0);
var grid2 = new grid(5.0);
console.log(grid1.caculate({ x: 10, y: 10 }));
console.log(grid2.caculate({ x: 10, y: 10 }));
