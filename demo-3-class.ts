/**
 * 类
 */
class Greeter{
	greeting : string;
	constructor (name) {
		this.greeting = name;
	};
	greet () {
		console.log('hello ' + 	this.greeting);
	};
}
var greeter = new Greeter('word');

class Animal{
	move(moveMeter: number){
		console.log(`this animal is moved ${moveMeter}m.`);
	}
}
class Dog extends Animal{
	dark () {
		console.log('wolf ! wolf !');
	}
}
var dog = new Dog();
dog.dark();
dog.move(10);
dog.dark();

class Animal1{
	name : string;
	constructor (theName : string) {
		this.name = theName;
	}
	move (moveMetr : number = 0) {
		console.log(`${this.name} is moved ${moveMetr}m.`)
	}
}
class Snake extends Animal1{
	constructor (name : string) {
		super(name);
	}
	move (moveMetr = 45) {
		console.log('snake is ...');
		super.move(moveMetr);
	}
}
class Horse extends Animal1{
	constructor (name : string) {
		super(name);
	}
	move (moveMetr = 20) {
		console.log('Horse is ...');
		super.move(moveMetr);
	}
}
let sam = new Snake('Sammy the Python');
let tom : Animal = new Horse('Tommy the Palomino');
sam.move();
tom.move(50);


/**
 * 公有/私有修饰符
 */
 class Animal2 {
 	private name : string;
 	public intr (name) {
 		this.name = name;
 		console.log(`my name is ${name}`)
 	}
 }
 var cat = new Animal2();
// cat.name;    -> 私有属性不可访问
 cat.intr('tom');

class Animal3{
	private name : string;
	constructor (theName : string) {
		this.name = theName;
	}
}
class Rhino extends Animal3{
	constructor () {
		super('Rhino');
	}
}
class Employee{
	private name : string;
	constructor (theName : string) {
		this.name = theName;
	}
}
let anm3 = new Animal3('json');
let rhino = new Rhino();
let employee = new Employee('json');
anm3 = rhino;
// anm3 = employee;    -> 私有属性不相通

/**
 * protected 
 */
class Animal4 {
 	protected name : string;
 	constructor (theName : string) {
 		this.name = theName;
 	}

} 
class Instance extends Animal4{
	constructor (name) {
		super(name);
	}
} 
var ins = new Instance('Tom');
// ins.name; protected 属性不可访问，只可class类访问

class Animal5 {
	protected name : string;
	protected constructor (theName : string) {
		this.name = theName;
	}
}
class Employee1 extends Animal5{
	private place : string;
	public constructor (theName : string ,placeMent : string) {
		super(theName);
		this.place = placeMent;
	}
	getPlace () {
		return `${this.name} is from ${this.place}`;
	}
}
let howord = new Employee1('Join','beijing');
// let marry = new Animal5('Marry');    -> 构造函数被保护

/**
 * readonly
 */
class Animal6 {
	readonly name : string;
	readonly age : number = 12;
	constructor (theName :string) {
		this.name = theName;
	}
}
let spider = new Animal6('hero');
 // spider.name = 'Xiaoming';    -> 只读属性不可以改变
 // spider.age = 16;    -> 只读属性不可以改变

/**
 * 参数属性
 */
class Animal7 {
	constructor (private name : string) { }
	move (moveMetr : number = 50) {
		return `${ this.name } is moved ${ moveMetr }m.`
	}
}
let tiger = new Animal7('Pangpang');
tiger.move(100);

/**
* 存取器
*/
class Employee2 {
	fullName : string;
}
let myEmployee = new Employee2();
myEmployee.fullName = 'Hello Ketty';
if(myEmployee.fullName) {
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
class grid {
	static origin = { x : 0,y : 0};
	caculate (point : {x : number,y : number}) {
		let xDis = (point.x - grid.origin.x);
		let yDis = (point.y - grid.origin.y);
		return Math.sqrt( xDis * xDis + yDis * yDis)/this.scale;
	};
	constructor (public  scale : number) {};
}
let grid1 = new grid(1.0);
let grid2 = new grid(5.0);

console.log(grid1.caculate({x : 10,y : 10}));
console.log(grid2.caculate({x : 10,y : 10}));