// Write a function called isPalindrome
// that will return true if a given input (string(s) or number)
// is a palindrome and false if it's not.

// Input: 'race car' or 'Race car' or 12321

// Output: true

let isPalindrome = function(input) {
	if (input.split('').join('').split('') == input) {
		return true;
	} else {
		return false;
	}
};
console.log(isPalindrome('12321'));
console.log(isPalindrome('hannah'));
console.log(isPalindrome('race car'));
