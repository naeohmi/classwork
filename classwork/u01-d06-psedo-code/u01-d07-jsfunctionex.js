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

let bazz = (function() {
	return {
		foo: 123
	};
})();
console.log(bazz);
