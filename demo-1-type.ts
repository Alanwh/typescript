//boolean 
let isDone: boolean = false;

//number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

//string
let englishName: string = "bob";
let age: number = 12;
let sentense = `
	hello , my name is ${ englishName }.
	I'm ${ age }.
`;

//Array
let ages: number[] = [12,14,9];
let list: Array<number> = [12,14,10];

//Tuple
let x: [number,string];
x = [12,'hahaha'];
console.log(x[1].substr(0,2));
x[3] = 12;
console.log(x);

//enum
enum Color{red = 1,green,blue};
let a: Color = Color.blue;
let b: Color = Color.green;
let c: string = Color[1];

//any
let notSure: any = 4;
notSure = 'hahaha';
notSure = [2,3,3];

//void
function warnUser(): void {
	alert('This is my warning message');
}
let u: void = undefined;
let n: void = null;

//null and undefined
let U: undefined = undefined;
let N: null = null;

//Never
function error(messenge: string): never {
	throw new Error(messenge);
}
function whileTrue() :never {
	while(true){

	}
}

//类型断言
let someValue: any = 'this is a string';
var strLength: number = (<string>someValue).length;
var strLength: number = (someValue as string).length;