/**
 * 接口 interface
 */

function printLable (lableObj : {lable: string}) {
	console.log(lableObj.lable);
}
const lableObj = {name:'alan',lable:'hahaha',age:11};
const lableObj1 = {name:'alan',lable:22,age:11};
const lableObj2 = {name:'alan',age:11};
printLable(lableObj);
// printLable(lableObj1);    -> 类型不符合，报错
// printLable(lableObj2);    -> 不存在参数，报错

interface lableValue {
	lable : string;
}
function printLable1(lableObj : lableValue) {
	console.log(lableObj.lable);
}
printLable1(lableObj);
// printLable1(lableObj1);     -> 类型不符合，报错


/**
 * 可选属性
 */
interface selectVlu{
	color? : string;
	width? : number;
 	// [propName : string] : any; // 除color,width任意字符串属性可任意赋值
}
function selectValue (selectObj : selectVlu) : {color : string ;area : number} {
	let newSpure = {color : 'white',area : 100};
	if(selectObj.color){
		newSpure.color = selectObj.color; 
	}
	if(selectObj.width){
		newSpure.area = selectObj.width * selectObj.width;
	}
	return newSpure;
}
let mySelect = selectValue({color: 'black'});
// let mySelect1 = selectValue({color : 'black',opacity : 1});    -> 未定义属性，报错
let mySelect2 = selectValue({color : 'black',opacity : 1} as selectVlu); // -> 断言可以绕开检查
let optVlu = {color : 'black',opacity : 1};
let mySelect3 = selectValue(optVlu); // -> 赋值给另外变量可绕开检查


/**
 * 只读属性
 */
 interface readOnly{
 	readonly x : number;
 	readonly y : number;
 }
let p1 : readOnly = {x : 10,y : 20};
// p1.x = 15;    -> 只读属性不能修改，报错

let a : number[] = [2,4,5,8];
let b : ReadonlyArray<number> = a;
a[0] = 10;
// b[0] = 15;    -> 只读属性不能修改，报错
// b.length = 10;    -> 只读属性不能修改，报错
// b.push(4);    -> 只读属性不能修改，报错
let c = [1,2]; 
// c = b;    -> 只读属性不能赋值，报错
c = b as number[]; //类型断言可以实现赋值

/**
 * 函数类型
 */
interface SearchFunc{
	(src : string ,substring : string) : boolean;
}
let Search : SearchFunc;
Search = function (src ,sub) {
	let result = src.search(sub);
	return result > -1;
}

/**
 * 可索引类型
 */
interface StringArray{
	[index : number] : string;
}
let myArray : StringArray;
myArray = ['Bob','Alan'];
let myStr = myArray[0];

interface readonlyStringArray{
	readonly [index : number] : string;
}
let readonlyArray : readonlyStringArray = ['Bob','Alan'];
// readonlyArray[2] = 'Tom';    -> 只读索引禁止赋值

class Animal{
	name : string;
}
class Dog extends Animal{
	breed : string;
}
interface NotOkay {
	// [x : number] : Animal;    -> 使用数字类型索引有时会得到不同Animal
	[x : string] : Dog;
}

interface ClockInterface{
	currentTime : Date;
	setDate(d : Date);
}
class Clock implements ClockInterface{
	currentTime : Date;
	setDate(d : Date){
		this.currentTime = d;
	};
	constructor(h : Date,m : Date){ };
}


/**
 * 接口继承
 */
interface AAA{
	name : string;
}
interface BBB{
	age : number;
}
interface CCC extends AAA,BBB{
	contry : string;
}
let ccc = <CCC>{};
ccc.name = 'alan';
ccc.age = 12;
ccc.contry = 'China';

/**
 * 混合继承
 */
interface Counter {
	(start : number) : string;
	interval : number
	reset() : void;
}
function GetCounter () :Counter {
	let counter = <Counter>function(start : 12){};
	counter.interval = 12;
	counter.reset = function () {};
	return counter; 
}
let couter = GetCounter();
couter(10);
couter.interval = 5;