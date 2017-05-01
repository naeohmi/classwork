// Write a function called reverseString that will take a string and returns the string reversed.

let stringEx = "abcdefg";

let reverseString1 = function(string) {
	return string.split('').reverse().join('');
};
console.log(reverseString1(stringEx));

let reverseString2 = function(string) { //for-loop decrementing
	let newString = '';
	for (let i = string.length - 1; i >= 0; i--) {
		newString += string[i];
	}
	return newString;
};
console.log(reverseString2(stringEx));

let reverseString3 = function(string) {
	if (string === "") {
		return "";
	} else {
		return reverseString3(string.substr(1)) + string.charAt(0);
	}
}
console.log(reverseString3(stringEx));

let reverseString4 = function(string) {
	return (string === "") ? "" : reverseString4(string.substr(1)) + string.charAt(0);
};
console.log(reverseString4(stringEx));
