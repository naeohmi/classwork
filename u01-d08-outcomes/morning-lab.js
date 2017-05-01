let naomi = {};

naomi.firstName = "Naomi";
naomi.lastName = "Meyer";
naomi.age = 47;
naomi.hobbies = ["soccer", "yoga", "brunch"];

let printFullName = (person) => {
	console.log(`${person.firstName} ${person.lastName}`);
}

naomi.printName = function() {
	console.log(`${this.firstName} ${this.lastName}`);
}

naomi.printData = function() {
	let hobby = '';
	for (let i = 0; i < this.hobbies.length; i++) {
		hobby += `${this.hobbies[i]}, `;	
	}
	console.log(`Hi I'm ${this.firstName} ${this.lastName} and my hobbies include ${hobby}`);
}

naomi.updateData = function() {
	let item = window.prompt(`What item would you like to change?`, "First Name");
	let newItem = window.prompt(`What would you like to change it to?`);
	this[item] = newItem;
	window.prompt(`Ok I will change ${item} to ${newItem}`);
	alert (`Great, the value of ${item} is now ${newItem}`);
}

// console.log(naomi);
// printFullName(naomi);
// naomi.printName(naomi);
// naomi.printData(naomi);