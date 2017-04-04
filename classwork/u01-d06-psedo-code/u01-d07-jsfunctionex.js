//#FUNCTION / OBJECT FUN

// let arr = [1, true, 'hello', function () { return('Hi!')}];

// console.log(arr[3]());

//1. simple version
function add1(n1, n2) {
	return n1 + n2;
}
console.log(add1(2, 3));

//2. change to fat arrow function
let add2 = (n1, n2) => {
	return n1 + n2;
}
console.log(add2(2, 3));

//3. trim the fat
let add3 = (n1, n2) => n1 + n2;
console.log(add3(2, 3));

//could add default parameters for values you want defaulted
// let add3 = (n1=1, n2=20) => n1 + n2;

//IFFE way:
// let bazz = (function() {
// 	return {
// 		foo: 123
// 	};
// })();
// console.log(bazz);

//#THIS FUN

var name = 'bug';
let car = {
	insurance: 'expensive',
	model: 2017,
	company: 'toyota',
	color: 'red',
	used: false,
	name: this.name
}

// console.log(car.name);

function getName() {
	console.log(this.name);
}
var obj = {
	name: 'Naomi'
}
var obj1 = {
	name: 'Ella'
}
var obj2 = {
	name: 'Patrick'
}
getName.apply(obj2);


function Car(color, engine, year) {
	this.color = color;
	this.engine = engine
	this.year = year;
}
let lambo = new Car('Silver', 'v8', 1997);
let mazarti = new Car('Gold', 'f16', 2017);

// console.log(lambo.color, lambo.engine, lambo.year);
// console.log(mazarti.color, mazarti.engine, mazarti.year);

//#CLASSES!

class Car2 { //mechanism to hold all the logic
	constructor(engine) { //factory - everytime you create a class, it always needs a constructor
		this.engine = engine;
		this.idle = true;
		console.log('I exist', this.engine);
	}

	getEngine() {
		console.log(this.engine);
	}
}
let bugatti = new Car2('v12');
// let tesla = new Car2('electric');
bugatti.getEngine();