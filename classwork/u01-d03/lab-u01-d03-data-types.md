# Data Types Lab Questions Part 1

### Determine the output of the following code snippets and explain the output in a sentence or two

1. `71 == "71"`
2. `false || true`
3. `(7 + 3) == "10"`
4. `(7 + 3) === "10"`
5. `false && true || true || false`
6. `let x = 2; x = 3`
7. `false == 0`
8. `const s = "12"; s = "34"`
9. `Math.floor(Math.PI)`
10. `"1234".split("")`


## My Answers (Part 1)

| Q# | input | output | why |
| --- | --- | --- | --- |
| 1 | `71 == "71"` | true | because js can figure out that the string "71" is equal to the value of the number 71 |
| 2 | `false || true` | true | because the statement is asking for whether something is false or true, and as one of the choices is true it registers as true |
| 3 | `(7 + 3) == "10"` | true | because the numbers 7 and 3 added together are equal to the number 10, written as a string |
| 4 | `(7 + 3) === "10"` | false | because the 3 equals signs check for precise equivalency and the number 10 is not exactly equivalent to the string with the number 10 in it |
| 5 | `false && true || true || false` | true | because true is one of the or options |
| 6 | `let x = 2; x = 3` | 3 | because code reads top to bottom |
| 7 | `false == 0` | true | because the value of false is equal to the value of zero |
| 8 | `const s = "12"; s = "34"` | error | because const is a constant variable that cannot be changed, so it's confused and returns an error |
| 9 | `Math.floor(Math.PI)` | 3 | because Math.floor takes a float integer and rounds up to make it a whole number, with an input of the value of PI (3.1415926535...) it rounds up to 3 |
| 10 | `"1234".split("")` | `[ '1', '2', '3', '4' ]` | the .split built in method returns an array with the values input | 

# Data Types Lab Questions (Part 2)

### Q1.
Get the square root of a number using the Math object (Google fu practice).

### Q2.
Create an array that contains one of each value we learned about. Loop through the array and log the type of each value (more Google fu if necessary).

## My Answers (Part 2)

### A1.
```
Math.sqrt(x);
console.log(x);
```

### A2.
```
var question = function() {
	var array = ["string", 1, false];
		for (var i = 0; i < array.length; i++) {
			console.log(typeof array[i]);
		}
	};
	question();
```
