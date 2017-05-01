// DNA Strings (15 min)

// In DNA strings, symbols "A" and "T" are complements of each other,
// as are "C" and "G".
// Write two iterations of the code that use
// a FOR loop to iterate over a DNA string
// and console.log() a new string that represents it's compliment letter.
// The first iteration should use IF\ELSE conditional logic
// and the second one a SWITCH statement.

// Original String: let DNA = "ATTGC"

// New String "TAACG"

let dna = "attgc";

var dnaFunction = function(string) {
	let stringToArray = string.split(""); //change string to array 
	let newDna = []; //create new empty array to add to
	for (var j = 0; j < stringToArray.length; j++) {
		if (stringToArray[j] === "a") {
			newDna.push("t");
		} else if (stringToArray[j] === "t") {
			newDna.push("a");
		} else if (stringToArray[j] === "c") {
			newDna.push("g");
		} else if (stringToArray[j] === "g") {
			newDna.push("c");
		}
	}
	return newDna.join();
};
console.log(dnaFunction(dna));

//use while loop to run for set condition, continues until condition is true
let newDnaS = "";
while (i < dna.length) {
	if (dna[i] === "t") {
		newDnaS += "a";
	} else if (dna[i] === "a") {
		newDnaS += "t";
	} else if (dna[i] === "c") {
		newDnaS += "g";
	} else if (dna[i] === "g") {
		newDnaS += "c";
	}
	return newDnaS;
}

for (let k = 0; k < dna.length; k++) {
	switch (dna[k]) {
		case "g": newDnaS += "c";
		break;
		case "c": newDnaS += "g";
		break;
		case "t": newDnaS += "a";
		break;
		case "a": newDnaS += "t";
		break;
	}
}



