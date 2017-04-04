
class Kar {
	constructor(engine, year, color, firstName, lastName, idle) {
		this.engine = engine;
		this.year = year;
		this.color = color;
		this.owner = {
			firstName: firstName,
			lastName: lastName,
		}
		this.idle = false;
	}
	getYear() {
		console.log(this.year);
	}
	getModel() {
		console.log(this.model);
	}
	getColor() {
		console.log(this.color);
	}
	getOwner() {
		console.log(`Owner is: ${this.owner.firstName} ${this.owner.lastName}`);
	}
	start() {
		if (this.idle === false) {
			this.idle = true;
			console.log(`Idle status is: ${this.idle}`);
		} else {
			this.idle = false;
			console.log(`Idle status is: ${this.idle}`);
		}
	}
}

var tesla = new Kar('electric', '2017', 'blue', 'Naomi', 'Meyer', false);
tesla.getOwner();
tesla.start();

class World {
	constructor(car) {
		this.car = new Kar('v8', '2016', 'green', 'Patrick', "andre", true);
	}
	getKar() {
		console.log(this.car);
	}
}
let earth = new World(tesla);
earth.getKar();